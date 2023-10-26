import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPatient } from '../shared/interfaces/IPatient';
import { PatientService } from '../shared/services/patient.service';


@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit {
  patient: IPatient | null = null;

  constructor(private route: ActivatedRoute, private patientService: PatientService) {}

  ngOnInit() {
    const patientId = this.route.snapshot.paramMap.get('id');
    if (patientId) {
      this.patientService.getPatientById(Number(patientId)).subscribe((patient) => {
        this.patient = patient;
      });
    }
  }
}
