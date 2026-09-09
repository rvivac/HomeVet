export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  badge?: string;
  features: string[];
  suggestedMsg: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  tutorName: string;
  petName: string;
  petSpecies: 'dog' | 'cat' | 'both';
  neighborhood: string;
  rating: number;
  text: string;
  dateText?: string;
}

export interface NeighborhoodItem {
  name: string;
  zone: string;
  taxNote?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'atendimento' | 'pagamento' | 'preparo' | 'urgencias';
}
