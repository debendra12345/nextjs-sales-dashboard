import React from "react";
import { ChartType } from "@/types";
import { BarChart, LineChart, PieChart } from "lucide-react";

interface ChartTypeToggleProps {
  activeType: ChartType;
  onChange: (type: ChartType) => void;
}

export const ChartTypeToggle: React.FC<ChartTypeToggleProps> = ({
  activeType,
  onChange,
}) => {
  const options: { type: ChartType; icon: React.ReactNode; label: string }[] = [
    { type: "bar", icon: <BarChart size={18} />, label: "Bar" },
    { type: "line", icon: <LineChart size={18} />, label: "Line" },
    { type: "pie", icon: <PieChart size={18} />, label: "Pie" },
  ];

  return (
    <div className="flex bg-gray-100 p-1 rounded-lg">
      {options.map((option) => (
        <button
          key={option.type}
          onClick={() => onChange(option.type)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeType === option.type
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {option.icon}
          <span className="hidden sm:inline">{option.label}</span>
        </button>
      ))}
    </div>
  );
};
