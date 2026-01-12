export type Role = 'Broker' | 'Analyst' | 'Acquisitions' | 'Other';
export type DealVolume = '1-10' | '11-25' | '26-50' | '50+';
export type AssetClass = 'Multifamily' | 'Self Storage' | 'Industrial' | 'Office' | 'Retail' | 'Other';

export interface FormData {
  name: string;
  email: string;
  companyName: string;
  role: Role | '';
  volume: DealVolume | '';
  assetClasses: AssetClass[];
  companyUrl?: string;
  referralSource?: string;
}

export const ROLES: Role[] = ['Broker', 'Analyst', 'Acquisitions', 'Other'];
export const VOLUMES: DealVolume[] = ['1-10', '11-25', '26-50', '50+'];
export const ASSET_CLASSES: AssetClass[] = ['Multifamily', 'Self Storage', 'Industrial', 'Office', 'Retail', 'Other'];
