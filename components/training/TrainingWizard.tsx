import React, { useState, useCallback, useMemo } from 'react';
import type { TrainingConfig, AIModel, GpuCluster, DataType, ImageObjective } from '../../types';
import { ModelType } from '../../types';
import { MODELS, GPU_CLUSTERS, REGIONS, IconSingleLabel, IconMultiLabel, IconObjectDetection, IconSegmentation } from '../../constants';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';

// Step 1: Create Dataset
const Step1CreateDataset: React.FC<{ config: TrainingConfig, updateConfig: (update: Partial<TrainingConfig>) => void }> = ({ config, updateConfig }) => {
    const objectives: { id: ImageObjective; title: string; description: string; icon: React.ReactNode; }[] = [
        { id: 'Single-label classification', title: 'Single-label classification', description: 'Predict a single label for an image.', icon: <IconSingleLabel /> },
        { id: 'Multi-label classification', title: 'Multi-label classification', description: 'Predict one or more labels for an image.', icon: <IconMultiLabel /> },
        { id: 'Object detection', title: 'Object detection', description: 'Predict objects in an image with a label and location (bounding box).', icon: <IconObjectDetection /> },
        { id: 'Segmentation', title: 'Segmentation', description: 'Predict per-pixel areas of an image with a label.', icon: <IconSegmentation /> },
    ];
    
    return (
        <div className="space-y-6">
            <div>
                <label htmlFor="dataset-name" className="block text-sm font-medium text-content mb-1">Data set name *</label>
                <input
                    type="text"
                    id="dataset-name"
                    value={config.datasetName}
                    onChange={(e) => updateConfig({ datasetName: e.target.value })}
                    className="block w-full bg-base-200 border-base-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm p-2"
                    maxLength={124}
                />
                <p className="mt-1 text-xs text-content">Can use up to 124 characters.</p>
            </div>
            
            <div>
                <h3 className="text-lg font-medium text-content-strong">Select a data type and objective</h3>
                <p className="text-content text-sm mt-1">First, select the type of data that your dataset will contain. Then select an objective, which is the outcome that you want to achieve with the trained model.</p>
                <div className="mt-4">
                    {/* Tabs */}
                    <div className="border-b border-base-300">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {(['Image', 'Tabular', 'Text', 'Video'] as DataType[]).map((tab) => (
                                <button
                                key={tab}
                                onClick={() => updateConfig({ dataType: tab })}
                                className={`${
                                    config.dataType === tab
                                    ? 'border-brand-primary text-brand-primary'
                                    : 'border-transparent text-content hover:text-content-strong hover:border-base-300'
                                } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}
                                >
                                {tab}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content for Image Tab */}
                    {config.dataType === 'Image' && (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {objectives.map(obj => (
                                <div key={obj.id} onClick={() => updateConfig({ imageObjective: obj.id })} className={`rounded-lg border p-4 cursor-pointer transition-all ${config.imageObjective === obj.id ? 'bg-base-300 ring-2 ring-brand-primary' : 'bg-base-200 border-base-300 hover:border-brand-secondary'}`}>
                                    <div className="flex items-start">
                                        <input
                                            type="radio"
                                            name="image-objective"
                                            checked={config.imageObjective === obj.id}
                                            onChange={() => updateConfig({ imageObjective: obj.id })}
                                            className="h-4 w-4 mt-1 text-brand-primary border-gray-500 focus:ring-brand-primary"
                                        />
                                        <div className="ml-3 text-sm flex-1">
                                            <label className="font-medium text-content-strong">{obj.title}</label>
                                            <p className="text-content text-xs mt-1">{obj.description}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 h-24 bg-base-100 rounded flex items-center justify-center overflow-hidden">
                                        {obj.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                     {(config.dataType === 'Tabular' || config.dataType === 'Text' || config.dataType === 'Video') && (
                        <div className="mt-6 text-center py-10 bg-base-200 rounded-lg">
                            <p className="text-content-strong">Objective selection for {config.dataType} is coming soon.</p>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="region" className="block text-sm font-medium text-content mb-1">Region</label>
                <select
                    id="region"
                    value={config.region}
                    onChange={(e) => updateConfig({ region: e.target.value })}
                    className="block w-full md:w-1/3 bg-base-200 border-base-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm p-2"
                >
                    {REGIONS.map(region => <option key={region.id} value={region.id}>{region.name}</option>)}
                </select>
            </div>
        </div>
    );
};

// Step 2: Upload Data Component
const Step2UploadData: React.FC<{ config: TrainingConfig, updateConfig: (update: Partial<TrainingConfig>) => void }> = ({ config, updateConfig }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateConfig({ dataset: e.target.files[0] });
    }
  };

  return (
    <Card>
      <h2 className="text-xl font-semibold text-content-strong mb-4">Step 2: Upload Dataset</h2>
      <p className="text-content mb-6">Upload your dataset for the objective '{config.imageObjective}'. Supported formats: CSV, JSON, or a ZIP of images.</p>
      <div className="border-2 border-dashed border-base-300 rounded-lg p-8 text-center">
        <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} accept=".csv, .json, .zip, image/*"/>
        <label htmlFor="file-upload" className="cursor-pointer text-brand-secondary font-semibold">
          {config.dataset ? `Selected: ${config.dataset.name}` : "Choose a file to upload"}
        </label>
        <p className="text-xs text-content mt-2">Max file size: 500MB</p>
      </div>
    </Card>
  );
};

// Step 3: Choose Model Component
const Step3ChooseModel: React.FC<{ config: TrainingConfig, updateConfig: (update: Partial<TrainingConfig>) => void }> = ({ config, updateConfig }) => (
    <Card>
      <h2 className="text-xl font-semibold text-content-strong mb-4">Step 3: Choose a Model</h2>
      <p className="text-content mb-6">Select a pre-trained model to fine-tune with your dataset. Models are filtered based on your dataset type.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MODELS.map(model => (
          <Card 
            key={model.id}
            onClick={() => updateConfig({ model })}
            isSelected={config.model?.id === model.id}
            className="cursor-pointer"
          >
            <h3 className="font-bold text-content-strong">{model.name}</h3>
            <p className="text-sm text-brand-primary font-semibold">{model.provider}</p>
            <p className="text-xs mt-2 text-content">{model.description}</p>
          </Card>
        ))}
      </div>
    </Card>
);

// Step 4: Configure Training Component
const Step4Configure: React.FC<{ config: TrainingConfig, updateConfig: (update: Partial<TrainingConfig>) => void }> = ({ config, updateConfig }) => {
    const estimatedCost = useMemo(() => {
        if (!config.gpuCluster) return 'N/A';
        return `₹${(config.gpuCluster.hourly_cost * 80.0 * 2).toFixed(2)} / hr (est.)`;
    }, [config.gpuCluster]);

    return (
        <Card>
            <h2 className="text-xl font-semibold text-content-strong mb-4">Step 4: Configure Training & Deployment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-semibold text-content-strong mb-4">Training Parameters</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-content">Epochs</label>
                            <input type="number" defaultValue={10} min="1" max="100" className="mt-1 block w-full bg-base-300 border-base-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-content">Learning Rate</label>
                            <input type="number" defaultValue={0.001} step="0.0001" className="mt-1 block w-full bg-base-300 border-base-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-content-strong mb-4">Compute & Cost</h3>
                     <div>
                        <label className="block text-sm font-medium text-content mb-1">Select GPU Cluster (India)</label>
                        <select
                            onChange={(e) => updateConfig({ gpuCluster: GPU_CLUSTERS.find(c => c.id === e.target.value) || null })}
                            className="mt-1 block w-full bg-base-300 border-base-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary p-2"
                        >
                            <option>Select a cluster...</option>
                            {GPU_CLUSTERS.map(cluster => (
                                <option key={cluster.id} value={cluster.id}>{cluster.name} - {cluster.location}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-4 bg-base-100 p-4 rounded-lg">
                        <p className="text-sm text-content">Estimated Cost</p>
                        <p className="text-lg font-bold text-brand-primary">{estimatedCost}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};


// Step 5: Train & Deploy Component
const Step5TrainDeploy: React.FC<{ config: TrainingConfig }> = ({ config }) => {
  const [status, setStatus] = useState('Queued');
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const statuses = ['Initializing', 'Training', 'Fine-tuning', 'Deploying', 'Completed'];
    let currentStatusIndex = 0;
    let currentProgress = 0;

    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 5;
        setProgress(currentProgress);

        if (currentProgress % 20 === 0 && currentStatusIndex < statuses.length - 1) {
          currentStatusIndex++;
          setStatus(statuses[currentStatusIndex]);
        }
      } else {
        setStatus('Completed');
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
      <Card className="text-center">
          <h2 className="text-2xl font-bold text-content-strong mb-4">Training in Progress...</h2>
          <p className="text-content mb-8">Your model <span className="font-semibold text-brand-primary">{config.model?.name}</span> is being trained on the <span className="font-semibold text-brand-secondary">{config.gpuCluster?.name}</span>.</p>
          <div className="max-w-xl mx-auto space-y-4">
              <ProgressBar progress={progress} />
              <p className="font-semibold text-lg text-content-strong">{status} ({progress}%)</p>
          </div>
          {status === 'Completed' && (
              <div className="mt-8 bg-base-100 p-6 rounded-lg max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold text-green-400">Deployment Successful!</h3>
                  <p className="mt-2 text-content">Your model is now available via the following API endpoint:</p>
                  <pre className="mt-4 bg-base-300 text-brand-primary p-3 rounded-md text-sm break-all">
                      https://api.zafast.ai/v1/deployments/proj_abc123/predict
                  </pre>
                  <Button variant="primary" className="mt-6">Go to Model Dashboard</Button>
              </div>
          )}
      </Card>
  );
};


// Main Wizard Component
const TrainingWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState<TrainingConfig>({
    datasetName: `untitled_${Date.now()}`,
    dataType: 'Image',
    imageObjective: 'Single-label classification',
    region: 'in-mumbai-1',
    dataset: null,
    model: null,
    gpuCluster: null,
    epochs: 10,
    learningRate: 0.001,
  });

  const updateConfig = useCallback((update: Partial<TrainingConfig>) => {
    setConfig(prev => ({ ...prev, ...update }));
  }, []);

  const isStepValid = useMemo(() => {
    switch(step) {
      case 1: return config.datasetName.trim() !== '' && !!config.imageObjective;
      case 2: return !!config.dataset;
      case 3: return !!config.model;
      case 4: return !!config.gpuCluster;
      default: return true;
    }
  }, [step, config]);

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));
  
  const steps = ["Create Dataset", "Upload Data", "Choose Model", "Configure", "Train & Deploy"];

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-4">
            <ol className="flex items-center w-full">
                {steps.map((stepName, index) => (
                    <li key={stepName} className={`flex w-full items-center ${index + 1 < steps.length ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-base-300 after:border-4 after:inline-block" : ""}`}>
                        <span className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${index + 1 <= step ? 'bg-brand-secondary text-white' : 'bg-base-200'}`}>
                            {index + 1}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
        <h1 className="text-2xl font-bold text-content-strong">Create New Project - {steps[step-1]}</h1>
      </div>

      <div>
        {step === 1 && <Step1CreateDataset config={config} updateConfig={updateConfig} />}
        {step === 2 && <Step2UploadData config={config} updateConfig={updateConfig} />}
        {step === 3 && <Step3ChooseModel config={config} updateConfig={updateConfig} />}
        {step === 4 && <Step4Configure config={config} updateConfig={updateConfig} />}
        {step === 5 && <Step5TrainDeploy config={config} />}
      </div>

      {step < 5 && (
        <div className="flex justify-between items-center mt-8">
          <Button variant="secondary" onClick={prevStep} disabled={step === 1}>
            Previous
          </Button>
          <Button variant="primary" onClick={nextStep} disabled={!isStepValid}>
            {step === 4 ? "Start Training" : "Next"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TrainingWizard;