
import React, { useState } from 'react';
import type { View } from './types';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardView from './components/dashboard/DashboardView';
import TrainingWizard from './components/training/TrainingWizard';
import ModelGardenView from './components/model_garden/ModelGardenView';
import ModelRegistryView from './components/model_registry/ModelRegistryView';
import EndpointsView from './components/endpoints/EndpointsView';
import BatchInferenceView from './components/batch_inference/BatchInferenceView';
import FineTuningView from './components/fine_tuning/FineTuningView';
import PlaygroundView from './components/playground/PlaygroundView';
import MonitoringView from './components/monitoring/MonitoringView';
import ProvisionedThroughputView from './components/provisioned_throughput/ProvisionedThroughputView';
import PipelinesView from './components/pipelines/PipelinesView';
import TutorialsView from './components/tutorials/TutorialsView';

const App: React.FC = () => {
  const [view, setView] = useState<View>('dashboard');

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <DashboardView setView={setView} />;
      case 'new-project':
        return <TrainingWizard />;
      case 'model-garden':
        return <ModelGardenView />;
      case 'model-registry':
          return <ModelRegistryView />;
      case 'endpoints':
          return <EndpointsView />;
      case 'batch-inference':
          return <BatchInferenceView />;
      case 'fine-tuning':
          return <FineTuningView />;
      case 'playground':
          return <PlaygroundView />;
      case 'monitoring':
          return <MonitoringView />;
      case 'provisioned-throughput':
          return <ProvisionedThroughputView />;
      case 'pipelines':
          return <PipelinesView />;
      case 'tutorials':
          return <TutorialsView />;
      default:
        return <DashboardView setView={setView} />;
    }
  };

  return (
    <div className="flex h-screen bg-base-100 text-content">
      <Sidebar view={view} setView={setView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
