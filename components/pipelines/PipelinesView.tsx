import React from 'react';
import Card from '../ui/Card';

const PipelinesView: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-content-strong">Pipelines</h1>
      <p className="text-content mt-1">Automate your MLOps workflows.</p>
      <Card className="mt-6 text-center p-12">
        <p className="text-content-strong font-semibold">Feature Not Implemented</p>
        <p className="text-content mt-2">Create, manage, and monitor automated pipelines for data processing, model training, and deployment.</p>
      </Card>
    </div>
  );
};

export default PipelinesView;
