import { IPatient } from "./IPatient";

export interface IExam {
    id: number;
    exerciseName: string;
    date: string;
    time: string;
    exerciseType: string;
    weeklyAmount: number;
    description: string;
    patient: IPatient;
    systemStatus: boolean;
  }   