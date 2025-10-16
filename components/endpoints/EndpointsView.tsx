import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const EndpointsView: React.FC = () => {
  const endpoints = [
    { id: 'ep-bfsi-fraud-prod', name: 'BFSI Fraud - Production', model: 'BFSI Fraud Detection v2', health: 'Healthy', traffic: '100%', created: '2 days ago' },
    { id: 'ep-indic-chat-prod', name: 'Indic Chatbot - Production', model: 'Indic Language Chatbot v4', health: 'Healthy', traffic: '100%', created: '5 days ago' },
    { id: 'ep-image-gen-staging', name: 'Image Generation - Staging', model: 'Imagen 4', health: 'Error', traffic: '100%', created: '1 day ago' },
    { id: 'ep-churn-canary', name: 'Retail Churn - Canary', model: 'Retail Churn v1 (10%), v2 (90%)', health: 'Healthy', traffic: '10% / 90%', created: '3 hours ago' },
  ];

  const getHealthStatus = (health: string) => {
    return (
      <div className="flex items-center space-x-2">
        <span className={`h-2.5 w-2.5 rounded-full ${health === 'Healthy' ? 'bg-green-500' : 'bg-red-500'}`}></span>
        <span>{health}</span>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-content-strong">Endpoints</h1>
            <p className="text-content mt-1">Monitor and manage your deployed model endpoints.</p>
        </div>
        <Button variant="primary">Create Endpoint</Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="border-b border-base-300 text-sm text-content">
                    <tr>
                        <th className="py-2 px-4">Endpoint Name</th>
                        <th className="py-2 px-4">Model(s)</th>
                        <th className="py-2 px-4">Health Status</th>
                        <th className="py-2 px-4">Traffic Split</th>
                        <th className="py-2 px-4">Created</th>
                    </tr>
                </thead>
                <tbody className="text-content-strong">
                    {endpoints.map(ep => (
                        <tr key={ep.id} className="border-b border-base-300 last:border-b-0 hover:bg-base-300/50">
                            <td className="py-3 px-4 font-semibold">{ep.name}</td>
                            <td className="py-3 px-4">{ep.model}</td>
                            <td className="py-3 px-4">{getHealthStatus(ep.health)}</td>
                            <td className="py-3 px-4">{ep.traffic}</td>
                            <td className="py-3 px-4">{ep.created}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </Card>
    </div>
  );
};

export default EndpointsView;