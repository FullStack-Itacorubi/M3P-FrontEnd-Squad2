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
  medications: any[] = [];
  diet: any[] = [];
  exams: any[] = [];
  appointments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const patientId = +idParam;
      this.patientService.getPatientById(patientId).subscribe((data: IPatient) => {
        this.patient = data;
        this.medications = data.medicationList || [];
        this.diet = data.dietList || [];
        this.exams = data.examList || [];
        this.appointments = data.appointment || [];
      });
    }
  }
}
