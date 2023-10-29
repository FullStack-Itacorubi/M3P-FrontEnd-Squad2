import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../shared/services/patient.service';
import { IPatientRequest } from '../shared/interfaces/IPatientRequest';
import { ExerciseService } from '../shared/services/exercise.service';
@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  registerForm: FormGroup;
  isEditMode: boolean = false;
  identifier= 0;
  searchResults: IPatientRequest[] = [];
  showSearchResults: boolean = false;
  searchQuery: string = '';
  ExerciseId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private patientService:PatientService,
    private route: ActivatedRoute,
    private exerciseService: ExerciseService

    ) {
    this.registerForm = this.formBuilder.group({
      patientId: [''],
      exerciseName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      exerciseDate: [this.getCurrentDate(), Validators.required],
      exerciseTime: [this.getCurrentTime(), Validators.required],
      exerciseType: ['', Validators.required],
      exerciseFrequency: ['', [Validators.required, Validators.min(0.01)]],
      exerciseDescription: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.ExerciseId = params['id'];
        this.loadExerciseData(this.ExerciseId);
        this.isEditMode = true;
      }
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
    this.registerForm.reset;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const uniqueIdentifier = this.identifier +1;

      alert(`Exercício registrado com sucesso! Identificador único: ${uniqueIdentifier}`);
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
  
  assignPatient(patient: IPatientRequest) {
    this.registerForm.patchValue({
      patientId: patient.id,
    });
    this.searchQuery = '';
    this.showSearchResults = false;
  }
  loadExerciseData(exerciseId: string) {
    this.exerciseService.getExerciseById(exerciseId).subscribe((exercise) => {
      this.registerForm.patchValue({
        exerciseName: exercise.exerciseName,
        exerciseDate: exercise.date,
        exerciseTime: exercise.time,
        exerciseType: exercise.exerciseType,
        exerciseFrequency: exercise.weeklyAmount,
        exerciseDescription: exercise.description,
      });
    });
  }
}
