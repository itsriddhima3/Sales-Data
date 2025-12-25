'use client';

import { useState } from 'react';
import { Filter, TrendingUp, DollarSign, ShoppingCart } from 'lucide-react';
import Card from '../components/atoms/Card';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import StatCard from '@/components/molecules/StatCard';
import SalesBarChart from '@/components/organisms/SalesBarChart';
import SalesLineChart from '@/components/organisms/SalesLineChart';
import SalesPieChart from '@/components/organisms/SalesPieChart';
import { salesData, yearlyTotals } from '@/data/salesData';

export default function Dashboard() {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [threshold, setThreshold] = useState<string>('');

  const thresholdValue = threshold ? parseInt(threshold) : null;
  const totalSales2024 = salesData.reduce((sum, item) => sum + item['2024'], 0);
  const avgMonthlySales = Math.round(totalSales2024 / 12);
  const growthRate = (
    ((yearlyTotals[2].total - yearlyTotals[1].total) / yearlyTotals[1].total) *
    100
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Sales Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Monitor your sales performance across years
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={DollarSign}
            label="Total Sales 2024"
            value={`$${(totalSales2024 / 1000).toFixed(0)}K`}
            trend={`+${growthRate}% from 2023`}
          />
          <StatCard
            icon={TrendingUp}
            label="Average Monthly Sales"
            value={`$${(avgMonthlySales / 1000).toFixed(0)}K`}
          />
          <StatCard
            icon={ShoppingCart}
            label="Best Month 2024"
            value="December"
            trend="$105K in sales"
          />
        </div>

        {/* Filter Section */}
        <Card>
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <Input
                label="Filter by Sales Threshold"
                type="number"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                placeholder="Enter minimum sales amount (e.g., 70000)"
              />
            </div>
            <Button onClick={() => setThreshold('')} className="mb-0">
              <Filter className="w-4 h-4 inline mr-2" />
              Clear Filter
            </Button>
          </div>
          {threshold && (
            <p className="text-sm text-gray-600 mt-3">
              Showing sales above ${parseInt(threshold).toLocaleString()}
            </p>
          )}
        </Card>

        {/* Chart Type Selector */}
        <div className="flex gap-3">
          <Button
            active={chartType === 'bar'}
            onClick={() => setChartType('bar')}
          >
            Bar Chart
          </Button>
          <Button
            active={chartType === 'line'}
            onClick={() => setChartType('line')}
          >
            Line Chart
          </Button>
          <Button
            active={chartType === 'pie'}
            onClick={() => setChartType('pie')}
          >
            Pie Chart
          </Button>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Monthly Sales Comparison (2022-2024)
            </h3>
            {chartType === 'bar' && (
              <SalesBarChart data={salesData} threshold={thresholdValue} />
            )}
            {chartType === 'line' && (
              <SalesLineChart data={salesData} threshold={thresholdValue} />
            )}
            {chartType === 'pie' && <SalesPieChart data={yearlyTotals} />}
          </Card>

          {chartType !== 'pie' && (
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Yearly Total Sales
              </h3>
              <SalesPieChart data={yearlyTotals} />
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}