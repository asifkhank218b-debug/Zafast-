import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

// Mock data for the list view
const monitoringJobs = [
    { id: 'mon-bfsi-prod', name: 'BFSI Fraud - Production Drift', model: 'BFSI Fraud Detection v2', status: 'Active', created: '2 days ago' },
    { id: 'mon-indic-chat-skew', name: 'Indic Chat - Skew Detection', model: 'Indic Language Chatbot v4', status: 'Active', created: '5 days ago' },
    { id: 'mon-churn-retrain', name: 'Retail Churn - Retraining Trigger', model: 'Retail Churn v1', status: 'Inactive', created: '3 weeks ago' },
];

// Reusable Input Component for the form
const FormInput: React.FC<{ label: string, id: string, type?: string, children?: React.ReactNode, description?: string, required?: boolean }> = ({ label, id, type = 'text', children, description, required = false }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-content mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        {children || <input type={type} id={id} className="block w-full bg-base-200 border-base-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm p-2" />}
        {description && <p className="mt-1 text-xs text-content">{description}</p>}
    </div>
);

// The detailed configuration form component
const ConfigureMonitoring: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [step, setStep] = useState(1);
    const [inputFeatures, setInputFeatures] = useState<{name: string, type: string}[]>([]);
    const [outputInferences, setOutputInferences] = useState<{name: string, type: string, repeated: string}[]>([{name: '', type: 'String', repeated: 'False'}]);

    const addInputFeature = () => setInputFeatures([...inputFeatures, {name: '', type: 'String'}]);
    const addOutputInference = () => setOutputInferences([...outputInferences, {name: '', type: 'String', repeated: 'False'}]);

    return (
        <div>
            <button onClick={onBack} className="text-sm text-brand-secondary mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                Back to Monitoring Jobs
            </button>
            <h1 className="text-3xl font-bold text-content-strong">Configure monitoring</h1>
            
            <div className="mt-6 flex flex-col md:flex-row gap-8">
                {/* Left Step Navigator */}
                <aside className="w-full md:w-1/4">
                    <ol className="space-y-4">
                        <li>
                            <button onClick={() => setStep(1)} className={`w-full text-left p-3 rounded-lg flex items-center space-x-3 ${step === 1 ? 'bg-base-300' : 'hover:bg-base-200'}`}>
                                <span className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${step >= 1 ? 'bg-brand-secondary text-white' : 'bg-base-200'}`}>1</span>
                                <div>
                                    <p className="font-semibold text-content-strong">Model details</p>
                                </div>
                            </button>
                        </li>
                         <li>
                            <button onClick={() => setStep(2)} className={`w-full text-left p-3 rounded-lg flex items-center space-x-3 ${step === 2 ? 'bg-base-300' : 'hover:bg-base-200'}`}>
                                <span className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${step >= 2 ? 'bg-brand-secondary text-white' : 'bg-base-200'}`}>2</span>
                                <div>
                                    <p className="font-semibold text-content-strong">Configure objectives</p>
                                </div>
                            </button>
                        </li>
                    </ol>
                </aside>

                {/* Right Form Content */}
                <main className="flex-1">
                    <Card className="p-8">
                        {step === 1 && (
                            <div className="space-y-6">
                                <FormInput label="Model" id="model-select">
                                    <select id="model-select" className="block w-full bg-base-200 border-base-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm p-2">
                                        <option>Select a model...</option>
                                        <option>BFSI Fraud Detection v2</option>
                                        <option>Indic Language Chatbot v4</option>
                                    </select>
                                </FormInput>
                                <FormInput label="Version" id="model-version">
                                    <select id="model-version" className="block w-full bg-base-200 border-base-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm p-2">
                                        <option>Select a version...</option>
                                        <option>2 (latest)</option>
                                        <option>1</option>
                                    </select>
                                </FormInput>
                                
                                <div className="space-y-2">
                                    <h3 className="font-medium text-content-strong">Schema</h3>
                                    <p className="text-sm text-content">Define the data that you would like to monitor. This information helps model monitoring know how to correctly parse the request and response payload for your served model.</p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-medium text-content-strong">Input features</h4>
                                    <p className="text-sm text-content">Required if you would like to monitor input feature drift.</p>
                                    {/* Dynamic inputs would go here */}
                                    <Button variant="secondary" onClick={addInputFeature}>+ Add item</Button>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-medium text-content-strong">Output inferences</h4>
                                    <p className="text-sm text-content">Required if you would like to monitor output inference drift.</p>
                                    {outputInferences.map((inf, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <input type="text" placeholder="Field name" className="flex-1 bg-base-200 p-2 rounded-md" />
                                            <select className="bg-base-200 p-2 rounded-md"><option>String</option><option>Number</option><option>Boolean</option></select>
                                            <select className="bg-base-200 p-2 rounded-md"><option>False</option><option>True</option></select>
                                        </div>
                                    ))}
                                    <Button variant="secondary" onClick={addOutputInference}>+ Add item</Button>
                                </div>

                                 <div className="space-y-4">
                                    <h4 className="font-medium text-content-strong">Ground truth</h4>
                                    <p className="text-sm text-content">Required if you would like to continuously re-evaluate model performance.</p>
                                    <div className="flex items-center gap-2">
                                        <input type="text" placeholder="Field name" className="flex-1 bg-base-200 p-2 rounded-md" />
                                        <select className="bg-base-200 p-2 rounded-md"><option>String</option><option>Number</option></select>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-medium text-content-strong">Data source</h4>
                                    <div className="flex items-center">
                                        <input id="training-data-source" type="checkbox" className="h-4 w-4 rounded border-gray-500 text-brand-primary focus:ring-brand-primary" defaultChecked/>
                                        <label htmlFor="training-data-source" className="ml-2 block text-sm text-content-strong">Training data source</label>
                                    </div>
                                    <p className="text-sm text-content">Required for calculating serving distribution drift from a training data baseline (i.e. training-serving skew).</p>
                                    <FormInput label="Training data source" id="training-source-select">
                                        <select id="training-source-select" className="block w-full bg-base-200 p-2 rounded-md">
                                            <option>Zafast Cloud Bucket</option>
                                        </select>
                                    </FormInput>
                                    <FormInput label="Training data location" id="training-location" required>
                                         <div className="relative">
                                            <input type="text" id="training-location" className="block w-full bg-base-200 p-2 rounded-md pr-20" />
                                            <button className="absolute inset-y-0 right-0 px-4 text-sm font-semibold text-brand-secondary">Browse</button>
                                         </div>
                                    </FormInput>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="text-center p-10">
                                <h2 className="text-xl font-bold text-content-strong">Configure Objectives</h2>
                                <p className="text-content mt-2">Configuration options for drift thresholds, alert notifications, and retraining triggers would be set here.</p>
                            </div>
                        )}
                    </Card>

                     <div className="mt-6 flex justify-end items-center gap-4">
                        <div className="bg-base-200 p-4 rounded-lg flex items-center gap-3 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-content">The serving data source will be specified in the configuration of a monitoring run.</span>
                        </div>
                        <Button variant="secondary" onClick={onBack}>Cancel</Button>
                        <Button variant="primary" onClick={onBack}>Set up</Button>
                    </div>
                </main>
            </div>
        </div>
    );
};

// Main view component
const MonitoringView: React.FC = () => {
  const [viewState, setViewState] = useState<'list' | 'configure'>('list');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">{status}</span>;
      case 'Inactive':
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-400">{status}</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-base-300">{status}</span>;
    }
  };

  if (viewState === 'configure') {
    return <ConfigureMonitoring onBack={() => setViewState('list')} />;
  }
  
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-content-strong">Model Monitoring</h1>
            <p className="text-content mt-1">Track the performance and health of your models in production.</p>
        </div>
        <Button variant="primary" onClick={() => setViewState('configure')}>Configure Monitoring Job</Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="border-b border-base-300 text-sm text-content">
                    <tr>
                        <th className="py-2 px-4">Job Name</th>
                        <th className="py-2 px-4">Model</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Created</th>
                    </tr>
                </thead>
                <tbody className="text-content-strong">
                    {monitoringJobs.map(job => (
                        <tr key={job.id} className="border-b border-base-300 last:border-b-0 hover:bg-base-300/50">
                            <td className="py-3 px-4 font-semibold">{job.name}</td>
                            <td className="py-3 px-4">{job.model}</td>
                            <td className="py-3 px-4">{getStatusBadge(job.status)}</td>
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

export default MonitoringView;
