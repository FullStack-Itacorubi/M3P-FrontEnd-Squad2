import { IPatient } from './IPatient';

export interface IExam {
  id?: number;
  name: string;
  date: string;
  time: string;
  examType: string;
  laboratory: string;
  documentUrl: string;
  results: string;
  patient: IPatient;
  systemStatus: boolean;
}
