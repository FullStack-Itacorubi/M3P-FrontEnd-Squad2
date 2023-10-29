import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';
import { PatientService } from '../shared/services/patient.service';
import { AppointmentService } from '../shared/services/appointment.service'; 
import { IPatientRequest } from '../shared/interfaces/IPatientRequest';
import {IPatient} from '../shared/interfaces/IPatient'
import { ToolbarHeaderService } from '../shared/services/toolbar-header.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent {
  registerForm: FormGroup;
  isEditMode: boolean = false;
  searchResults: IPatient[] = [];
  showSearchResults: boolean = false;
  searchQuery: string = '';
  apointmentId: string ='';
  patients: IPatient[] = [];
  identifier: number=0;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private patientService: PatientService,
    private headerService: ToolbarHeaderService,
    private route:ActivatedRoute,
    private appointmentService:AppointmentService
  ) {
    headerService.headerData = {
      title: 'Consultas',
      icon: 'heroClockSolid',
    };
    this.registerForm = this.formBuilder.group({
      patientId: [''],
      appointmentReason: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(64),
        ],
      ],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
      problemDescription: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(1024),
        ],
      ],
      prescribedMedication: [''],
      dosageAndPrecautions: [
        '',
        [Validators.minLength(16), Validators.maxLength(256)],
      ],
      systemStatus: [true, Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.apointmentId = params['id'];
        this.loadappointmentData(this.apointmentId);
        this.isEditMode = true;
      }
      this.loadPatients();
    });
  }
  loadPatients() {
    this.patientService.getPatients().subscribe((patients) => {
      this.patients = patients;
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

  deleteForm() {}

  onSubmit() {
    if (this.registerForm.valid) {
      const uniqueIdentifier = this.identifier+1;

      alert(
        `Consulta registrada com sucesso! Identificador único: ${uniqueIdentifier}`
      );
      this.router.navigate(['login']);
    } else {
      alert(
        'Existem dados inválidos no formulário. Por favor, corrija-os e tente novamente.'
      );
    }

    this.isEditMode = false;
  }
  searchPatients(query: string) {
    if (query && query.length >= 3) {
      this.searchResults = this.patients.filter((patient) =>
        patient.name.toLowerCase().includes(query.toLowerCase())
      );
      this.showSearchResults = true;
    } else {
      this.searchResults = [];
      this.showSearchResults = false;
    }
  }

  assignPatient(patient: IPatient) {
    this.registerForm.patchValue({
      patientId: patient.id,
    });
    this.searchQuery = '';
    this.showSearchResults = false;
  }
  loadappointmentData(appointmentId: string) {
    this.appointmentService.getAppointmentById(appointmentId).subscribe((appointment) => {
      this.registerForm.patchValue({
        appointmentReason: appointment.reason,
        appointmentDate: appointment.consultationDate,
        appointmentTime: appointment.consultationTime,
        problemDescription: appointment.problemDescription,
        prescribedMedication: appointment.medicationPrescribed,
        dosageAndPrecautions:appointment.dosageAndPrecautions
      });
    });
  }
}
