import React, { useMemo, useState } from "react";
import { YearlySales, ChartType } from "@/types";
import { Card } from "../atoms/Card";
import { FilterInput } from "../molecules/FilterInput";
import { ChartTypeToggle } from "../molecules/ChartTypeToggle";
import { SalesChart } from "./SalesChart";
import { TrendingUp, DollarSign, Calendar } from "lucide-react";

interface DashboardPanelProps {
  data: YearlySales;
}

export const DashboardPanel: React.FC<DashboardPanelProps> = ({ data }) => {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [minSales, setMinSales] = useState<number>(0);

  const filteredData = useMemo(() => {
    return data.monthlyData.filter((item) => item.sales >= minSales);
  }, [data, minSales]);

  const filteredTotal = useMemo(() => {
    return filteredData.reduce((acc, curr) => acc + curr.sales, 0);
  }, [filteredData]);

  return (
    <div className="flex flex-col gap-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Year</p>
            <h3 className="text-2xl font-bold text-gray-900">{data.year}</h3>
          </div>
        </Card>
        
        <Card className="p-6 flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-full">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Sales (Original)</p>
            <h3 className="text-2xl font-bold text-gray-900">
              ${data.totalSales.toLocaleString()}
            </h3>
          </div>
        </Card>

        <Card className="p-6 flex items-center gap-4">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Filtered Sales</p>
            <h3 className="text-2xl font-bold text-gray-900">
              ${filteredTotal.toLocaleString()}
            </h3>
          </div>
        </Card>
      </div>

      {/* Main Chart Card */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Monthly Performance</h2>
            <p className="text-sm text-gray-500">
              Viewing data for {data.year}. {filteredData.length} months meet the criteria.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
            <FilterInput onFilter={setMinSales} />
            <div className="hidden sm:block h-8 w-px bg-gray-200"></div>
            <ChartTypeToggle activeType={chartType} onChange={setChartType} />
          </div>
        </div>

        <SalesChart data={filteredData} type={chartType} />
      </Card>
    </div>
  );
};
