export interface MonthlySales {
  month: string;
  sales: number;
}

export interface YearlySales {
  year: number;
  totalSales: number;
  monthlyData: MonthlySales[];
}

export interface SalesData {
  [year: number]: YearlySales;
}

export type ChartType = "bar" | "line" | "pie";
