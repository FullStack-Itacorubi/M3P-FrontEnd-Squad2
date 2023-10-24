import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PatientService } from '../shared/services/patient.service';
import { IPatient } from '../shared/interfaces/IPatient';

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
    try {
      const formData = this.newPatientForm.value; 
      const patient: IPatient= {
        name: formData.name,
        gender: formData.gender,
        cpf: formData.cpf,
        phone: formData.phone,
        email: formData.email,
        status: formData.status,
        dateOfBirth: formData.dateOfBirth,
        rgWithIssuingAuthority: formData.rgWithIssuingAuthority,
        maritalStatus: formData.maritalStatus,
        emergencyContact: formData.emergencyContact,
        allergies: formData.allergies,
        specificCare: formData.specificCare,
        insurance:formData.insurance,
        insuranceNumber: formData.insuranceNumber,
        insuranceValidity: formData.insuranceValidity,
        address: {
            cep: formData.CEP,
            city: formData.city,
            state: formData.state,
            street: formData.street,
            number: formData.number,
            complement: formData.complement,
            district: formData.district,
            reference: formData.reference
        }
      };
      this.patientService.addPatient(patient)
      await
      alert ("cadastrado com suceso")
    } catch(e){
      alert("dados de cadastro invalido")
    }
  }
}   