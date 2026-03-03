import { PageTransition } from "../components/PageTransition";
import { KPIStrip } from "../components/KPIStrip";
import { LiveUpdates } from "../components/LiveUpdates";
import { MapWidget } from "../components/MapWidget";
import { AnalyticsTabs } from "../components/AnalyticsTabs";

export function Dashboard() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto space-y-6 pb-20">
        <KPIStrip />
        <LiveUpdates />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MapWidget />
          </div>
          <div className="lg:col-span-1">
            <AnalyticsTabs />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
