import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
})
export class PatientRegistrationComponent {
  
  newPatientForm: FormGroup;

  constructor() {
    this.newPatientForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.min(8), Validators.max(64)]),
      gender: new FormControl('', [Validators.required]),
      birth: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      rg: new FormControl('', [Validators.required]),
      maritalStatus: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{12}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nationality: new FormControl('', [Validators.required, Validators.min(8), Validators.max(64)]),
      emergencyContact: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{12}$')]),
      allergies: new FormControl(''),
      especialCare: new FormControl(''),
      healthInsurance: new FormControl(''),
      healthInsuranceNumber: new FormControl(''),
      validity: new FormControl(''),
      address: new FormControl('', [Validators.required]),
      complement: new FormControl(''),
      sistemStatus: new FormControl(''),
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
      const address = this.newPatientForm.get('address')?.value;
      const complement = this.newPatientForm.get('complement')?.value;
      const sistemStatus = this.newPatientForm.get('sistemStatus')?.value;
      await
      alert("cadastrado com sucesso")
      console.log(name, gender, birth, cpf, rg, maritalStatus, telephone, email, nationality, emergencyContact, allergies,especialCare, healthInsurance, healthInsuranceNumber, validity, address, complement, sistemStatus);
    } catch (e) {
      alert("dados de cadastro inválidos")
    }
  }
}
