import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { KPICard } from '@/components/dashboard/KPICard';
import { ProjectsTable } from '@/components/dashboard/ProjectsTable';
import {
  ROITrendChart,
  ESGRadarChart,
  AllocationChart,
} from '@/components/charts';
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Wallet,
} from 'lucide-react';

function App() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid gap-6">
            {/* KPI Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <KPICard
                title="Total ESG Score"
                value="88/100"
                icon={BarChart3}
                trend={5.2}
              />
              <KPICard
                title="Current ROI"
                value="15.4%"
                icon={TrendingUp}
                trend={2.1}
              />
              <KPICard
                title="Risk Level"
                value="Medium"
                icon={AlertTriangle}
                description="Based on market volatility"
              />
              <KPICard
                title="Portfolio Value"
                value="$2.4M"
                icon={Wallet}
                trend={3.8}
              />
            </div>

            {/* Charts */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ROITrendChart />
              <ESGRadarChart />
              <AllocationChart />
            </div>

            {/* Projects Table */}
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <h2 className="text-lg font-semibold">Active Projects</h2>
                <ProjectsTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;