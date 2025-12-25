# Sales Dashboard 2022-2024

A modern, interactive sales analytics dashboard built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates atomic design principles and provides comprehensive sales visualization tools.

## 📋 Features

- **📊 Multiple Chart Types**: Switch between Bar, Line, and Pie charts for different data visualizations
- **🔍 Custom Filtering**: Filter sales data by custom threshold values
- **📈 Real-time Statistics**: Display key metrics including total sales, averages, and growth rates
- **🎨 Clean UI Design**: Simple, professional interface with responsive layout
- **⚛️ Atomic Architecture**: Organized component structure following atomic design principles
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```
sales-dashboard/
├── app/
│   ├── page.tsx              # Main dashboard page
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles and Tailwind imports
├── components/
│   ├── atoms/                # Basic building blocks
│   │   ├── Card.tsx         # Reusable card container
│   │   ├── Button.tsx       # Button component
│   │   └── Input.tsx        # Input field component
│   ├── molecules/            # Combination of atoms
│   │   └── StatCard.tsx     # Statistics card with icon
│   └── organisms/            # Complex components
│       ├── SalesBarChart.tsx    # Bar chart visualization
│       ├── SalesLineChart.tsx   # Line chart visualization
│       └── SalesPieChart.tsx    # Pie chart visualization
├── data/
│   └── salesData.ts         # Mock sales data and types
├── package.json
├── tsconfig.json
├── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sales-dashboard.git
   cd sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 💡 What This Project Does

This sales dashboard application provides:

1. **Visual Sales Analysis**: Three different chart types (Bar, Line, Pie) to visualize monthly sales data from 2022-2024
2. **Interactive Filtering**: Users can set custom sales thresholds to filter and focus on specific data ranges
3. **Key Metrics Display**: Statistics cards showing total sales, averages, and growth percentages
4. **Yearly Comparison**: Easy comparison of sales performance across multiple years
5. **Responsive Design**: Optimized viewing experience across all device sizes

### Data Source

The current implementation uses mock sales data that simulates typical e-commerce seasonal patterns. The data structure supports:
- Monthly sales figures for years 2022, 2023, and 2024
- Yearly totals and growth calculations
- Seasonal trends (higher sales during holiday periods)

## 🎯 Key Components Explained

### Atomic Design Structure

**Atoms** (Basic UI elements):
- `Card`: Container component with consistent styling
- `Button`: Interactive button with active states
- `Input`: Form input with label support

**Molecules** (Simple component groups):
- `StatCard`: Combines icon, label, value, and trend display

**Organisms** (Complex sections):
- `SalesBarChart`: Interactive bar chart with filtering
- `SalesLineChart`: Line graph showing trends over time
- `SalesPieChart`: Pie chart for yearly totals comparison

## 🔄 Future Enhancements

- [ ] **API Integration**: Connect to real sales data from external APIs
- [ ] **Export Functionality**: Download reports as PDF or CSV
- [ ] **Date Range Selection**: Custom date range filtering
- [ ] **User Authentication**: Secure access with user accounts
- [ ] **Dark Mode**: Theme toggle for better accessibility
- [ ] **Real-time Updates**: WebSocket integration for live data
- [ ] **Advanced Analytics**: Predictive analysis and forecasting
- [ ] **Multi-currency Support**: Display sales in different currencies

## 📝 Development Notes

### Customizing the Data

To use your own sales data:

1. Navigate to `data/salesData.ts`
2. Replace the mock data with your actual sales figures
3. Maintain the same data structure for compatibility
4. Update yearly totals accordingly

### Adding New Chart Types

To add additional chart types:

1. Create a new component in `components/organisms/`
2. Import the necessary Recharts components
3. Add the chart type to the selector in `app/page.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name - [Riddhima Singh](https://github.com/itsriddhima3)

## 🙏 Acknowledgments

- Design inspiration from modern dashboard interfaces
- Mock data patterns based on typical e-commerce sales trends
- Built as part of a front-end development assessment

---

