"use client";

import React, { useEffect, useState } from "react";
import { fetchSalesData } from "@/lib/api/sales";
import { SalesData } from "@/types";
import { DashboardPanel } from "@/components/organisms/DashboardPanel";
import { Spinner } from "@/components/atoms/Spinner";

export default function DashboardPage() {
  const [data, setData] = useState<SalesData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeYear, setActiveYear] = useState<number>(2024);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchSalesData();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch sales data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <Spinner size={48} />
        <p className="mt-4 text-gray-500 font-medium animate-pulse">
          Loading dashboard data...
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500 font-medium">Failed to load data.</p>
      </div>
    );
  }

  const years = Object.keys(data).map(Number).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Sales Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              Analyze your yearly and monthly sales performance.
            </p>
          </div>
          
          {/* Year Selector */}
          <div className="flex bg-white rounded-lg shadow-sm border border-gray-100 p-1">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                  activeYear === year
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </header>

        <main>
          {data[activeYear] && (
            <DashboardPanel data={data[activeYear]} />
          )}
        </main>
      </div>
    </div>
  );
}
