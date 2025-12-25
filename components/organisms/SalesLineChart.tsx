import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { SalesDataItem } from '@/data/salesData';

interface SalesLineChartProps {
  data: SalesDataItem[];
  threshold: number | null;
}

const SalesLineChart: React.FC<SalesLineChartProps> = ({ data, threshold }) => {
  const filteredData = threshold
    ? data.map((item) => ({
        ...item,
        '2022': item['2022'] >= threshold ? item['2022'] : null,
        '2023': item['2023'] >= threshold ? item['2023'] : null,
        '2024': item['2024'] >= threshold ? item['2024'] : null,
      }))
    : data;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
          }}
          formatter={(value: any) =>
            value ? `$${value.toLocaleString()}` : 'N/A'
          }
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="2022"
          stroke="#8b5cf6"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="2023"
          stroke="#06b6d4"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="2024"
          stroke="#10b981"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;