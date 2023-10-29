import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPatientRequest } from '../shared/interfaces/IPatientRequest';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../shared/services/patient.service';
import { ToolbarHeaderService } from '../shared/services/toolbar-header.service';
import { ExamService } from '../shared/services/exam.service';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent {
  examForm: FormGroup;
  isEditMode: boolean = false;
  identifier= 0;
  searchResults: IPatientRequest[] = [];
  showSearchResults: boolean = false;
  searchQuery: string = '';
  examId: string = '';

  constructor(private examService:ExamService,private route:ActivatedRoute,private formBuilder: FormBuilder, private router: Router, private patientService:PatientService,
    private headerService: ToolbarHeaderService
    ) {
    const reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    headerService.headerData = {
      title: 'Exames',
      icon: 'heroDocumentTextSolid',
    };
    this.examForm = this.formBuilder.group({
      patientId: [''],
      examName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      examDate: [this.getCurrentDate(), Validators.required],
      examTime: [this.getCurrentTime(), Validators.required],
      examType: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      laboratory: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      documentUrl: ['', Validators.pattern(reg)],
      results: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(1024)]],
    });
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.examId = params['id'];
        this.loadExamData(this.examId);
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
    this.examForm.reset;
  }

  onSubmit() {
    if (this.examForm.valid) {
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
    this.examForm.patchValue({
      patientId: patient.id,
    });
    this.searchQuery = '';
    this.showSearchResults = false;
  }

  loadExamData(examId: string) {
    this.examService.getExamById(examId).subscribe((exam) => {
      this.examForm.patchValue({
        examName: exam.name,
        examDate: exam.date,
        examTime: exam.time,
        examType: exam.examType,
        laboratory: exam.laboratory,
        documentURL:exam.documentUrl,
        results:exam.results
      });
    });
  }
}
