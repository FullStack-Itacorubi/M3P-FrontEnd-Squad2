import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPatient } from '../shared/interfaces/IPatient';
import { PatientService } from '../shared/services/patient.service';
import { Router } from '@angular/router';
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
    private patientService: PatientService,
    private router:Router
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

  private sortListByDate(list: any[]): any[] {
    return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  private sortListById(list: any[]): any[] {
    return list.sort((a, b) => a.id - b.id);
  }

  private sortListByConsultationDate(list: any[]): any[] {
    return list.sort((a, b) => new Date(a.consultationDate).getTime() - new Date(b.consultationDate).getTime());
  }
  editAppointment(appointment: any) {
    this.router.navigate(['labmedical/appointment', 'edit', appointment['id']]);
  }
  editExam(exam: any) {
    this.router.navigate(['labmedical/exam', 'edit', exam['id']]);
  }
  editMedication(medication: any) {
    this.router.navigate(['labmedical/medication', 'edit', medication['id']]);
  }
  editDiet(diet: any) {
    this.router.navigate(['labmedical/diet', 'edit', diet['id']]);
  }
  editExercise(exercise: any) {
    this.router.navigate(['labmedical/exercise', 'edit', exercise['id']]);
  }
}
