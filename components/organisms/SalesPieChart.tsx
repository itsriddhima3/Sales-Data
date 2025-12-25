import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { YearlyTotal } from '@/data/salesData';

interface SalesPieChartProps {
  data: YearlyTotal[];
}

const SalesPieChart: React.FC<SalesPieChartProps> = ({ data }) => {
  const chartData: any[] = data.map((item) => ({
    ...item,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="total"
          nameKey="year"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label={(entry: any) => `${entry.year}: $${(entry.total / 1000).toFixed(0)}K`}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value: any) => value ? `$${value.toLocaleString()}` : '-'} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesPieChart;