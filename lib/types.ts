export interface PricingPlan {
  name: string;
  status: React.ReactNode;
  description: string;
  price: number;
  interval: string;
  maxPatients: number;
  additionalPatientPrice: number;
}

export interface FormData {
  name: string;
  interest: string;
  currency: string;
  basePrice: string;
  description: string;
  costPerProvider: string;
  maxProviders: string;
  maxPatients: string;
  minPatients: string;
  costPerPatient: string;
}
