import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  registerForm: FormGroup;
  isEditMode: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      appointmentReason: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
      problemDescription: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(1024)]],
      prescribedMedication: [''],
      dosageAndPrecautions: ['', [Validators.minLength(16), Validators.maxLength(256)]],
      systemStatus: [true, Validators.required]
    });
  }

  getCurrentDate(): string {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm: string | number = today.getMonth() + 1;
    let dd: string | number = today.getDate();

    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;

    return `${yyyy}-${mm}-${dd}`;
  }

  getCurrentTime(): string {
    const now = new Date();
    const hh: string | number = now.getHours();
    const mm: string | number = now.getMinutes();

    return `${hh}:${mm}`;
  }

  editForm() {
    this.isEditMode = true;
  }

  deleteForm() {
    // Implement logic for deleting the form
    // You can show a confirmation dialog and proceed with deletion
  }

  onSubmit() {
    // Implement form submission logic, including validation and saving the data
    if (this.registerForm.valid) {
      // Generate a unique identifier for this consultation
      const uniqueIdentifier = 'your-unique-identifier'; // Implement your own logic here

      alert(`Consulta registrada com sucesso! Identificador único: ${uniqueIdentifier}`);
      this.router.navigate(['login']);
    } else {
      alert('Existem dados inválidos no formulário. Por favor, corrija-os e tente novamente.');
    }

    this.isEditMode = false;
  }
}
