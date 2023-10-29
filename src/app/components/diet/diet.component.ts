import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../shared/services/patient.service';
import { IPatientRequest } from '../shared/interfaces/IPatientRequest';
import { DietService } from '../shared/services/diet.service'; // Import your DietService
import { ToolbarHeaderService } from '../shared/services/toolbar-header.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.scss']
})
export class DietComponent {

  registerForm: FormGroup;
  isEditMode: boolean = false;
  identifier= 0;
  searchResults: IPatientRequest[] = [];
  showSearchResults: boolean = false;
  searchQuery: string = '';
  dietId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private patientService:PatientService,
    private route: ActivatedRoute,
    private dietService: DietService,
    private headerService : ToolbarHeaderService
    ){

    headerService.headerData = {
      title: 'Dietas',
      icon: 'heroCakeSolid'
    }

    this.registerForm = this.formBuilder.group({
      dietName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      dietDate: [this.getCurrentDate(), Validators.required],
      dietTime: [this.getCurrentTime(), Validators.required],
      dietType: ['', Validators.required],
      dietDescription: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      systemStatus: [true, Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.dietId = params['id'];
        this.loadDietData(this.dietId);
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

      alert(`Dieta registrada com sucesso! Identificador único: ${uniqueIdentifier}`);
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
  loadDietData(dietId: string) {
    this.dietService.getDietById(dietId).subscribe((diet) => {
      this.registerForm.patchValue({
        dietName: diet.dietName,
        dietDate: diet.date,
        dietTime: diet.time,
        dietType: diet.dietType,
        dietDescription: diet.description,
      });
    });
  }
}
