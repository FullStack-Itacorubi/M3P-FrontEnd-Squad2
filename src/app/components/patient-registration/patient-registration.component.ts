import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
})
export class PatientRegistrationComponent {
  
  newPatientForm: FormGroup;

  constructor(private http: HttpClient) {
    this.newPatientForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),
      gender: new FormControl('', [Validators.required]),
      birth: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      rg: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      maritalStatus: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nationality: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),
      emergencyContact: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      allergies: new FormControl(''),
      especialCare: new FormControl(''),
      healthInsurance: new FormControl(''),
      healthInsuranceNumber: new FormControl(''),
      validity: new FormControl(''),
      cep: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      complement: new FormControl(''),
      neighborhood: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      sistemStatus: new FormControl(''),
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
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf
    })
  }

  async onSubmit() {
    try{
      const name = this.newPatientForm.get('name')?.value;
      const gender = this.newPatientForm.get('gender')?.value;
      const birth = this.newPatientForm.get('birth')?.value;
      const cpf = this.newPatientForm.get('cpf')?.value;
      const rg = this.newPatientForm.get('rg')?.value;
      const maritalStatus = this.newPatientForm.get('maritalStatus')?.value;
      const telephone = this.newPatientForm.get('telephone')?.value;
      const email = this.newPatientForm.get('email')?.value;
      const nationality = this.newPatientForm.get('nationality')?.value;
      const emergencyContact = this.newPatientForm.get('emergencyContact')?.value;
      const allergies = this.newPatientForm.get('allergies')?.value;
      const especialCare = this.newPatientForm.get('especialCare')?.value;
      const healthInsurance = this.newPatientForm.get('healthInsurance')?.value;
      const healthInsuranceNumber = this.newPatientForm.get('healthInsuranceNumber')?.value;
      const validity = this.newPatientForm.get('validity')?.value;
      const cep = this.newPatientForm.get('cep')?.value;
      const street = this.newPatientForm.get('street')?.value;
      const complement = this.newPatientForm.get('complement')?.value;
      const neighborhood = this.newPatientForm.get('complement')?.value;
      const city = this.newPatientForm.get('complement')?.value;
      const state = this.newPatientForm.get('complement')?.value;
      const sistemStatus = this.newPatientForm.get('sistemStatus')?.value;
      await
      alert("cadastrado com sucesso")
      console.log(name, gender, birth, cpf, rg, maritalStatus, telephone, email, nationality, emergencyContact, allergies,especialCare, healthInsurance, healthInsuranceNumber, validity,cep, street, complement, neighborhood, city, state, sistemStatus);
    } catch (e) {
      alert("dados de cadastro inválidos")
    }
  }
}
