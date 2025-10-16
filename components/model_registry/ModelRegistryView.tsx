import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ModelRegistryView: React.FC = () => {
  const models = [
    { id: 'proj_bfsi_fraud_v2', name: 'BFSI Fraud Detection', version: '2', status: 'Deployed', created: '2 days ago' },
    { id: 'proj_bfsi_fraud_v1', name: 'BFSI Fraud Detection', version: '1', status: 'Archived', created: '1 month ago' },
    { id: 'proj_retail_churn_v1', name: 'Retail Customer Churn', version: '1', status: 'Training', created: '1 hour ago' },
    { id: 'proj_indic_chat_v4', name: 'Indic Language Chatbot', version: '4', status: 'Deployed', created: '5 days ago' },
    { id: 'proj_indic_chat_v3', name: 'Indic Language Chatbot', version: '3', status: 'Archived', created: '2 weeks ago' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Deployed':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">{status}</span>;
      case 'Training':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">{status}</span>;
      case 'Archived':
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-400">{status}</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-base-300">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-content-strong">Model Registry</h1>
            <p className="text-content mt-1">Discover, manage, and version your trained models.</p>
        </div>
        <Button variant="primary">Register Model</Button>
      </div>
      
      <Card>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="border-b border-base-300 text-sm text-content">
                    <tr>
                        <th className="py-2 px-4">Model ID</th>
                        <th className="py-2 px-4">Display Name</th>
                        <th className="py-2 px-4">Version</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Created Date</th>
                    </tr>
                </thead>
                <tbody className="text-content-strong">
                    {models.map(model => (
                        <tr key={model.id} className="border-b border-base-300 last:border-b-0 hover:bg-base-300/50">
                            <td className="py-3 px-4 font-mono text-sm">{model.id}</td>
                            <td className="py-3 px-4">{model.name}</td>
                            <td className="py-3 px-4">{model.version}</td>
                            <td className="py-3 px-4">{getStatusBadge(model.status)}</td>
                            <td className="py-3 px-4">{model.created}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </Card>
    </div>
  );
};

export default ModelRegistryView;