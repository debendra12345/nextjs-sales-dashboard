import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MonthlySales, ChartType } from "@/types";

interface SalesChartProps {
  data: MonthlySales[];
  type: ChartType;
}

const COLORS = [
  "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe",
  "#1d4ed8", "#1e40af", "#1e3a8a", "#172554", "#0f172a", "#334155"
];

const formatCurrency = (value: number) => `$${(value / 1000).toFixed(0)}k`;

export const SalesChart: React.FC<SalesChartProps> = ({ data, type }) => {
  if (data.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center text-gray-500">
        No data available for the selected filter.
      </div>
    );
  }

  const renderChart = () => {
    switch (type) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis tickFormatter={formatCurrency} stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value: any) => [`$${Number(value).toLocaleString()}`, "Sales"]}
                contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              />
              <Legend />
              <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={50} />
            </RechartsBarChart>
          </ResponsiveContainer>
        );
      case "line":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RechartsLineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis tickFormatter={formatCurrency} stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value: any) => [`$${Number(value).toLocaleString()}`, "Sales"]}
                contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8 }} />
            </RechartsLineChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RechartsPieChart>
              <Tooltip
                formatter={(value: any) => [`$${Number(value).toLocaleString()}`, "Sales"]}
                contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              />
              <Legend />
              <Pie
                data={data}
                dataKey="sales"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={150}
                innerRadius={80}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return <div className="w-full">{renderChart()}</div>;
};
