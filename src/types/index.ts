export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'bird' | 'rabbit' | 'other';
  breed: string;
  age: number;
  ageUnit: 'days' | 'months' | 'years';
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  color: string;
  healthStatus: string[];
  vaccinated: boolean;
  neutered: boolean;
  description: string;
  personality: string[];
  imageUrls: string[];
  shelterId: string;
  createdAt: string;
  status: 'available' | 'pending' | 'adopted';
}

export interface Shelter {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  description: string;
  logoUrl?: string;
  websiteUrl?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'shelter' | 'adopter';
}

export interface AdoptionApplication {
  id: string;
  petId: string;
  userId: string;
  status: 'pending' | 'reviewing' | 'approved' | 'rejected';
  applicationDate: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  questionnaire: {
    livingArrangement: string;
    hasChildren: boolean;
    hasOtherPets: boolean;
    petExperience: string;
    reasonForAdoption: string;
  };
  notes?: string;
}

export interface FilterOptions {
  species?: string[];
  ageRange?: { min: number; max: number };
  gender?: string[];
  size?: string[];
  vaccinated?: boolean;
  neutered?: boolean;
  city?: string[];
}