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
        this.medications = this.sortListById(data.medicationList || []);
        this.diet = this.sortListByDate(data.dietList || []);
        this.exams = this.sortListByDate(data.examList || []);
        this.appointments = this.sortListByConsultationDate(data.appointment || []);
      });
    }
  }

  // Função para ordenar uma lista por data
  private sortListByDate(list: any[]): any[] {
    return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Função para ordenar uma lista por ID
  private sortListById(list: any[]): any[] {
    return list.sort((a, b) => a.id - b.id);
  }

  // Função para ordenar uma lista de consultas por data de consulta
  private sortListByConsultationDate(list: any[]): any[] {
    return list.sort((a, b) => new Date(a.consultationDate).getTime() - new Date(b.consultationDate).getTime());
  }
}
