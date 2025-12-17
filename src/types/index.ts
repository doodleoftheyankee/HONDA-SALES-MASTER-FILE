export interface SalesPerson {
  id: string;
  name: string;
  nickname: string;
  sales: number;
  newSales: number;
  usedSales: number;
  totalProfit: number;
  avgProfit: number;
  deals: Deal[];
}

export interface Deal {
  id: string;
  stockNumber: string;
  vehicle: string;
  saleDate: string;
  profit: number;
  frontGross: number;
  backGross: number;
  salesperson: string;
  isNew: boolean;
}

export interface MonthlyGoals {
  id: string;
  month: string;
  year: number;
  totalGoal: number;
  totalCurrent: number;
  newGoal: number;
  newCurrent: number;
  usedGoal: number;
  usedCurrent: number;
  totalGrossGoal: number;
  bonusPerPerson: number;
  minVehiclesForBonus: number;
  lastUpdated: string;
}

export interface SpiffCar {
  id: string;
  stockNumber: string;
  vehicle: string;
  age: number;
  spiffAmount: number;
  msrp: number;
  notes?: string;
}

export interface DashboardState {
  currentPage: 'sales' | 'goals' | 'spiffs';
  isAutoRotate: boolean;
  rotateInterval: number;
  isTVMode: boolean;
  lastRefresh: string;
}
