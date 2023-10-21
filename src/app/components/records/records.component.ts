import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/services/patient.service';
import { IPatient } from '../shared/interfaces/IPatient';

@Component({
  selector: 'app-record',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
  patients: IPatient[] = [];
  filteredPatients: IPatient[] = []; // Store the filtered patients
  searchTerm = '';

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients() {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
      this.filteredPatients = data; // Initialize filteredPatients with all patients
    });
  }

  onSearchInputChange() {
    console.log(this.filteredPatients);
    this.filteredPatients = this.patients.filter(patient =>
      patient.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
