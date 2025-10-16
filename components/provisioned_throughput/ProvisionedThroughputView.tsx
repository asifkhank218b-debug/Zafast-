import React from 'react';
import Card from '../ui/Card';

const ProvisionedThroughputView: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-content-strong">Provisioned Throughput</h1>
      <p className="text-content mt-1">Manage dedicated inference capacity for your models.</p>
      <Card className="mt-6 text-center p-12">
        <p className="text-content-strong font-semibold">Feature Not Implemented</p>
        <p className="text-content mt-2">Manage guaranteed performance levels for your most critical models by provisioning dedicated GPU instances.</p>
      </Card>
    </div>
  );
};

export default ProvisionedThroughputView;
