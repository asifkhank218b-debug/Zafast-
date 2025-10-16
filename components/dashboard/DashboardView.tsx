
import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import type { View } from '../../types';

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}
const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => (
    <Card>
        <div className="flex items-center">
            <div className="p-3 rounded-full bg-brand-primary/20 text-brand-primary">{icon}</div>
            <div className="ml-4">
                <p className="text-sm font-medium text-content">{title}</p>
                <p className="text-2xl font-semibold text-content-strong">{value}</p>
            </div>
        </div>
    </Card>
);

const DashboardView: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Projects" value="12" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>} />
        <StatCard title="Models Deployed" value="8" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" /></svg>} />
        <StatCard title="GPU Hours (Month)" value="1,240" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
        <StatCard title="Est. Cost (Month)" value="₹3,41,000" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 4h.01M18 12a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>} />
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-content-strong">Recent Projects</h2>
            <Button variant="secondary" onClick={() => setView('new-project')}>
                Create New Project
            </Button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="border-b border-base-300 text-sm text-content">
                    <tr>
                        <th className="py-2 px-4">Project Name</th>
                        <th className="py-2 px-4">Model</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Created At</th>
                    </tr>
                </thead>
                <tbody className="text-content-strong">
                    <tr className="border-b border-base-300">
                        <td className="py-3 px-4">BFSI Fraud Detection</td>
                        <td className="py-3 px-4">Zafast Regressor</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Deployed</span></td>
                        <td className="py-3 px-4">2 days ago</td>
                    </tr>
                    <tr className="border-b border-base-300">
                        <td className="py-3 px-4">Retail Customer Churn</td>
                        <td className="py-3 px-4">Zafast Regressor</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">Training</span></td>
                        <td className="py-3 px-4">1 hour ago</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-4">Indic Language Chatbot</td>
                        <td className="py-3 px-4">Krutrim</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-400">Error</span></td>
                        <td className="py-3 px-4">5 days ago</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </Card>
    </div>
  );
};

export default DashboardView;
