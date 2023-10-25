import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../shared/services/patient.service';
import { IPatient } from '../shared/interfaces/IPatient'; 
@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss']
})
export class MedicationComponent {
  medicationForm: FormGroup;
  isEditMode: boolean = false;
  identifier = 0;
  searchResults: IPatient[] = [];
  showSearchResults: boolean = false;
  searchQuery: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private patientService:PatientService) {
    this.medicationForm = this.formBuilder.group({
      patientId: [''],
      patientSearchControl: [''],
      medicationName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      medicationDate: [this.getCurrentDate(), Validators.required],
      medicationTime: [this.getCurrentTime(), Validators.required],
      medicationType: ['', Validators.required],
      medicationQuantity: ['', [Validators.required, Validators.min(0.01)]],
      medicationUnit: ['', Validators.required],
      medicationObservations: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      medicationStatus: [true, Validators.required],
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
    this.medicationForm.reset();
  }

  onSubmit() {
    if (this.medicationForm.valid) {
      const uniqueIdentifier = this.identifier + 1;

      alert(`Medicamento registrado com sucesso! Identificador único: ${uniqueIdentifier}`);
      this.router.navigate(['labmedical']);
    } else {
      alert('Existem dados inválidos no formulário. Por favor, corrija-os e tente novamente.');
    }

    this.isEditMode = false;
  }
  searchPatients(query: string) {
    if (query && query.length >= 3) {
      this.patientService.getPatientsByName(query).subscribe((patients) => {
        this.searchResults = patients;
        this.showSearchResults = true;
      });
    } else {
      this.searchResults = [];
      this.showSearchResults = false;
    }
  }
  
  assignPatient(patient: IPatient) {
    this.medicationForm.patchValue({
      patientId: patient.id,
    });
    this.searchQuery = '';
    this.showSearchResults = false;
  }
}
