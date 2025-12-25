import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../atoms/Card';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, trend }) => {
  return (
    <Card className="flex items-start space-x-4">
      <div className="p-3 bg-blue-50 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {trend && <p className="text-sm text-green-600 mt-1">{trend}</p>}
      </div>
    </Card>
  );
};

export default StatCard;