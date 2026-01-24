
export enum RepairStatus {
  DITERIMA = 'Diterima',
  DIBAIKI = 'Sedang Dibaiki',
  SIAP = 'Siap & Hantar'
}

export interface RepairRecord {
  id: string;
  cawangan: string;
  customerName: string;
  phoneNumber: string;
  timestamp: string;
  status: RepairStatus;
  divination?: string; // Sienna's insight
}

export enum AppTab {
  DAFTAR = 'daftar',
  SEMAK = 'semak',
  MANAGEMENT = 'management'
}
