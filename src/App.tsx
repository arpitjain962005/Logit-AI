/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Plus } from "./pages/Plus";
import { Minus } from "./pages/Minus";
import { Targets } from "./pages/Targets";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="plus" element={<Plus />} />
          <Route path="minus" element={<Minus />} />
          <Route path="targets" element={<Targets />} />
          {/* Placeholder routes for other nav items */}
          <Route path="shipments" element={<div className="p-8 text-slate-400">Shipments (Coming Soon)</div>} />
          <Route path="demand" element={<div className="p-8 text-slate-400">Demand Intelligence (Coming Soon)</div>} />
          <Route path="transporters" element={<div className="p-8 text-slate-400">Transporters (Coming Soon)</div>} />
          <Route path="warehouses" element={<div className="p-8 text-slate-400">Warehouses (Coming Soon)</div>} />
          <Route path="reports" element={<div className="p-8 text-slate-400">Reports (Coming Soon)</div>} />
          <Route path="settings" element={<div className="p-8 text-slate-400">Settings (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

