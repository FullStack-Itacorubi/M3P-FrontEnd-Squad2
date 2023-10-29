export interface IPatient {
  id?:number;
  name: string;
  gender: string;
  cpf: string;
  phone: string;
  email: string;
  status: boolean;
  dateOfBirth: string;
  rgWithIssuingAuthority: string;
  nationality: string;
  maritalStatus: string;
  emergencyContact: string;
  allergies: string;
  specificCare: string;
  insurance:string;
  insuranceNumber: string;
  insuranceValidity: string;
  address: {
      cep: string;
      city: string;
      state: string;
      street: string;
      number: string;
      complement: string;
      district: string;
      reference: string;
  };
  exerciseList?: [],
  dietList?: [],
  examList?: [],
  medicationList?:[],
  appointment?: []
}
