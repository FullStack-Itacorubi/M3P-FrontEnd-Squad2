import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { IPatient } from '../shared/interfaces/IPatient';
import { PatientService } from '../shared/services/patient.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
})
export class PatientRegistrationComponent {
  
  newPatientForm: FormGroup;

  constructor(private http: HttpClient, private patientService: PatientService) {
    this.newPatientForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),
      gender: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      rg: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      maritalStatus: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nationality: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),
      emergencyContact: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      allergies: new FormControl(''),
      specificCare: new FormControl(''),
      insurance: new FormControl(''),
      insuranceNumber: new FormControl(''),
      insuranceValidity: new FormControl(''),
      cep: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      number: new FormControl(''),
      complement: new FormControl(''),
      district: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      status: new FormControl(''),
    })
  }

  consultCEP(cep: any, form: NgForm) {
    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      var validatecep = /^[0-9]{8}$/;
      if (validatecep.test(cep)) {
        this.http
          .get<any>(`https://viacep.com.br/ws/${cep}/json/`)
          .subscribe((data) => {
            this.fillInDataCEP(data, form);
          });
      } else {
        alert('CEP não encontrado.');
      }
    }
    
  }

  fillInDataCEP(data: any, form:any){
    this.newPatientForm.patchValue({
      street: data.logradouro,
      complement: data.complemento,
      district: data.bairro,
      city: data.localidade,
      state: data.uf
    })
  }

  async onSubmit() {
    try{
      const newPatient: IPatient = {
        id: 0,
        name: this.newPatientForm.get('name')?.value,
        gender: this.newPatientForm.get('gender')?.value,
        dateOfBirth: this.newPatientForm.get('dateOfBirth')?.value,
        cpf: this.newPatientForm.get('cpf')?.value,
        rgWithIssuingAuthority: this.newPatientForm.get('rg')?.value,
        maritalStatus: this.newPatientForm.get('maritalStatus')?.value,
        phone: this.newPatientForm.get('phone')?.value,
        email: this.newPatientForm.get('email')?.value,
        nationality: this.newPatientForm.get('nationality')?.value,
        emergencyContact: this.newPatientForm.get('emergencyContact')?.value,
        allergies: this.newPatientForm.get('allergies')?.value,
        specificCare: this.newPatientForm.get('specificCare')?.value,
        insurance: this.newPatientForm.get('insurance')?.value,
        insuranceNumber: this.newPatientForm.get('insuranceNumber')?.value,
        insuranceValidity: this.newPatientForm.get('insuranceValidity')?.value,
        status: this.newPatientForm.get('status')?.value,
        address: {
          id: 0,
          cep: this.newPatientForm.get('cep')?.value,
          city: this.newPatientForm.get('city')?.value,
          state: this.newPatientForm.get('state')?.value,
          street: this.newPatientForm.get('street')?.value,
          number: this.newPatientForm.get('number')?.value,
          complement: this.newPatientForm.get('complement')?.value,
          district: this.newPatientForm.get('district')?.value,
          reference: this.newPatientForm.get('reference')?.value,
        },
      };

      this.patientService.addPatient(newPatient)
      await 
      console.log(newPatient)
      alert("cadastrado com sucesso")
      // console.log(name, gender, dateOfBirth, cpf, rg, maritalStatus, phone, email, nationality, emergencyContact, allergies, specificCare, insurance, insuranceNumber, insuranceValidity,cep, street, complement, district, city, state, status);

    } catch (e) {
      alert("dados de cadastro inválidos")
    }
  }
}
