import { SalesData } from "@/types";

const mockSalesData: SalesData = {
  2022: {
    year: 2022,
    totalSales: 845000,
    monthlyData: [
      { month: "Jan", sales: 65000 },
      { month: "Feb", sales: 59000 },
      { month: "Mar", sales: 80000 },
      { month: "Apr", sales: 81000 },
      { month: "May", sales: 56000 },
      { month: "Jun", sales: 55000 },
      { month: "Jul", sales: 40000 },
      { month: "Aug", sales: 75000 },
      { month: "Sep", sales: 60000 },
      { month: "Oct", sales: 85000 },
      { month: "Nov", sales: 90000 },
      { month: "Dec", sales: 99000 },
    ],
  },
  2023: {
    year: 2023,
    totalSales: 985000,
    monthlyData: [
      { month: "Jan", sales: 75000 },
      { month: "Feb", sales: 69000 },
      { month: "Mar", sales: 95000 },
      { month: "Apr", sales: 88000 },
      { month: "May", sales: 76000 },
      { month: "Jun", sales: 85000 },
      { month: "Jul", sales: 60000 },
      { month: "Aug", sales: 85000 },
      { month: "Sep", sales: 70000 },
      { month: "Oct", sales: 95000 },
      { month: "Nov", sales: 110000 },
      { month: "Dec", sales: 77000 },
    ],
  },
  2024: {
    year: 2024,
    totalSales: 1150000,
    monthlyData: [
      { month: "Jan", sales: 90000 },
      { month: "Feb", sales: 85000 },
      { month: "Mar", sales: 110000 },
      { month: "Apr", sales: 105000 },
      { month: "May", sales: 95000 },
      { month: "Jun", sales: 100000 },
      { month: "Jul", sales: 80000 },
      { month: "Aug", sales: 115000 },
      { month: "Sep", sales: 90000 },
      { month: "Oct", sales: 120000 },
      { month: "Nov", sales: 130000 },
      { month: "Dec", sales: 30000 }, // Partial year mock or varying
    ],
  },
};

/**
 * Simulates fetching sales data from an API
 * @returns Promise resolving to SalesData
 */
export async function fetchSalesData(): Promise<SalesData> {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(mockSalesData);
    }, 1500);
  });
}
