import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { YearlyTotal } from '@/data/salesData';

interface SalesPieChartProps {
  data: YearlyTotal[];
}

const SalesPieChart: React.FC<SalesPieChartProps> = ({ data }) => {
  // Custom label renderer with correct typing
  const renderCustomLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, index } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    
    const entry = data[index];
    
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize="14"
        fontWeight="bold"
      >
        {`${entry.year}: ${(entry.total / 1000).toFixed(0)}K`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="total"
          nameKey="year"
          cx="50%"
          cy="50%"
          outerRadius={160}
          label={renderCustomLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value: number | undefined) => value ? `$${value.toLocaleString()}` : '-'}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesPieChart;