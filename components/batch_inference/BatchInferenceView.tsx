import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const BatchInferenceView: React.FC = () => {
    const jobs = [
        { id: 'job_20240720_01', status: 'Succeeded', model: 'BFSI Fraud Detection v2', input: 'gs://zafast-data/transactions_july.csv', output: 'gs://zafast-results/predictions_july.json', created: '1 day ago' },
        { id: 'job_20240721_01', status: 'Running', model: 'Retail Customer Churn v1', input: 'gs://zafast-data/customer_list_q2.csv', output: 'gs://zafast-results/churn_predictions_q2.json', created: '2 hours ago' },
        { id: 'job_20240719_01', status: 'Failed', model: 'Indic Language Chatbot v4', input: 'gs://zafast-data/support_tickets.csv', output: 'gs://zafast-results/ticket_analysis.json', created: '3 days ago' },
        { id: 'job_20240718_02', status: 'Succeeded', model: 'BFSI Fraud Detection v1', input: 'gs://zafast-data/transactions_june.csv', output: 'gs://zafast-results/predictions_june.json', created: '4 days ago' },
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Succeeded':
                return <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">{status}</span>;
            case 'Running':
                return <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">{status}</span>;
            case 'Failed':
                return <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-400">{status}</span>;
            default:
                return <span className="px-2 py-1 text-xs rounded-full bg-base-300">{status}</span>;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-content-strong">Batch Inference Jobs</h1>
                    <p className="text-content mt-1">Run and monitor inference jobs on large datasets.</p>
                </div>
                <Button variant="primary">Create Batch Job</Button>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b border-base-300 text-sm text-content">
                            <tr>
                                <th className="py-2 px-4">Job ID</th>
                                <th className="py-2 px-4">Status</th>
                                <th className="py-2 px-4">Model Used</th>
                                <th className="py-2 px-4">Input Source</th>
                                <th className="py-2 px-4">Created</th>
                            </tr>
                        </thead>
                        <tbody className="text-content-strong">
                            {jobs.map(job => (
                                <tr key={job.id} className="border-b border-base-300 last:border-b-0 hover:bg-base-300/50">
                                    <td className="py-3 px-4 font-mono text-sm">{job.id}</td>
                                    <td className="py-3 px-4">{getStatusBadge(job.status)}</td>
                                    <td className="py-3 px-4">{job.model}</td>
                                    <td className="py-3 px-4 font-mono text-xs">{job.input}</td>
                                    <td className="py-3 px-4">{job.created}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default BatchInferenceView;