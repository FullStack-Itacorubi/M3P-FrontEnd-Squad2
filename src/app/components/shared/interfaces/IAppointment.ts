export interface IConsultation {
    id: number;
    reason: string;
    consultationDate: string;
    consultationTime: string;
    problemDescription: string;
    medicationPrescribed: boolean;
    dosageAndPrecautions: string;
    systemStatus: boolean;
  }