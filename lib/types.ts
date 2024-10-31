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

export interface PricingFeature {
  text: string;
}

export interface PricingPagePlan {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isRecommended?: boolean;
}

export interface ContactInfo {
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}
