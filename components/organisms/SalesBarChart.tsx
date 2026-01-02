import React from 'react';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,} from 'recharts';
import { SalesDataItem } from '@/data/salesData';

interface SalesBarChartProps {
  data: SalesDataItem[];
  threshold: number | null;
}

const SalesBarChart: React.FC<SalesBarChartProps> = ({ data, threshold }) => {
  const filteredData = threshold
    ? data.map((item) => ({
        ...item,
        '2022': item['2022'] >= threshold ? item['2022'] : 0,
        '2023': item['2023'] >= threshold ? item['2023'] : 0,
        '2024': item['2024'] >= threshold ? item['2024'] : 0,
      }))
    : data;

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px]">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
              formatter={(value: number | undefined) => value ? `$${value.toLocaleString()}` : '-'}
            />
            <Legend />
            <Bar dataKey="2022" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            <Bar dataKey="2023" fill="#06b6d4" radius={[8, 8, 0, 0]} />
            <Bar dataKey="2024" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesBarChart;