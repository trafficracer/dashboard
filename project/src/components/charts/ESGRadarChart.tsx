import { ChartCard } from './ChartCard';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

const esgData = [
  { subject: 'Environmental', A: 90, fullMark: 100 },
  { subject: 'Social', A: 85, fullMark: 100 },
  { subject: 'Governance', A: 88, fullMark: 100 },
  { subject: 'Innovation', A: 82, fullMark: 100 },
  { subject: 'Compliance', A: 95, fullMark: 100 },
];

export function ESGRadarChart() {
  return (
    <ChartCard title="ESG Breakdown" id="esg-radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={esgData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="ESG Score"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}