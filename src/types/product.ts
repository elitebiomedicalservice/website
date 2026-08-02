export interface ProductSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface ProductFeature {
  number?: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  brand: 'Oxymed' | 'Evox' | 'BMC';
  category: 'Oxygen Concentrators' | 'Sleep & Respiratory Therapy' | 'Portable Oxygen';
  series?: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  warranty: string;
  image: string;
  flowRate?: string;
  purity?: string;
  noiseLevel?: string;
  weight?: string;
  powerDraw?: string;
  flightApproved?: boolean;
  bluetoothEnabled?: boolean;
  modes?: string[];
  specs: ProductSpec[];
  features: ProductFeature[];
  highlights: string[];
  packageIncludes: string[];
  idealFor: string[];
}
