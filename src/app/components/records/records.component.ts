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
  searchTerm = ''; // Add a property to store the search term

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients() {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
    });
  }

  onSearchInputChange() {
    this.patientService.getPatientsByName(this.searchTerm).subscribe((data) => {
      this.patients = data;
    });
  }
}
