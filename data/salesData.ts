export interface SalesDataItem {
  month: string;
  '2022': number;
  '2023': number;
  '2024': number;
}

export interface YearlyTotal {
  year: string;
  total: number;
  color: string;
  [key: string]: string | number;
}

export const salesData: SalesDataItem[] = [
  { month: 'Jan', '2022': 45000, '2023': 52000, '2024': 61000 },
  { month: 'Feb', '2022': 52000, '2023': 58000, '2024': 68000 },
  { month: 'Mar', '2022': 48000, '2023': 61000, '2024': 72000 },
  { month: 'Apr', '2022': 61000, '2023': 69000, '2024': 78000 },
  { month: 'May', '2022': 55000, '2023': 65000, '2024': 75000 },
  { month: 'Jun', '2022': 67000, '2023': 74000, '2024': 85000 },
  { month: 'Jul', '2022': 72000, '2023': 79000, '2024': 91000 },
  { month: 'Aug', '2022': 68000, '2023': 76000, '2024': 88000 },
  { month: 'Sep', '2022': 58000, '2023': 71000, '2024': 82000 },
  { month: 'Oct', '2022': 63000, '2023': 78000, '2024': 89000 },
  { month: 'Nov', '2022': 78000, '2023': 89000, '2024': 98000 },
  { month: 'Dec', '2022': 85000, '2023': 95000, '2024': 105000 },
];


export const yearlyTotals: YearlyTotal[] = [
  { year: '2022', total: 752000, color: '#8b5cf6' },
  { year: '2023', total: 867000, color: '#06b6d4' },
  { year: '2024', total: 992000, color: '#10b981' },
];