import React from 'react';
import {PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend,} from 'recharts';
import { YearlyTotal } from '@/data/salesData';

interface SalesPieChartProps {
  data: YearlyTotal[];
}

const SalesPieChart: React.FC<SalesPieChartProps> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[300px]">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data as any}
              dataKey="total"
              nameKey="year"
              cx="50%"
              cy="45%"
              innerRadius={0}
              outerRadius="60%"
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
                formatter={(value: number | undefined) => value ? `$${value.toLocaleString()}` : '-'}
            />
            <Legend 
              verticalAlign="bottom" 
              height={60}
              wrapperStyle={{ 
                paddingTop: '10px',
                fontSize: '14px'
              }}
              formatter={(value, entry: any) => `${value}: ${(entry.payload.total / 1000).toFixed(0)}K`}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesPieChart;