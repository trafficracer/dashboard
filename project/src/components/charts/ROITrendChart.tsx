import { ChartCard } from './ChartCard';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const roiData = [
  { month: 'Jan', roi: 12 },
  { month: 'Feb', roi: 15 },
  { month: 'Mar', roi: 14 },
  { month: 'Apr', roi: 16 },
  { month: 'May', roi: 18 },
  { month: 'Jun', roi: 17 },
];

export function ROITrendChart() {
  return (
    <ChartCard title="ROI Trend" id="roi-trend-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={roiData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" padding={{ left: 0, right: 0 }} />
          <YAxis padding={{ top: 20, bottom: 20 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="roi"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}