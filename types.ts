
export type View =
  | 'dashboard'
  | 'new-project' // This is the training wizard
  | 'model-garden'
  | 'model-registry'
  | 'endpoints'
  | 'batch-inference'
  | 'fine-tuning'
  | 'playground'
  | 'monitoring'
  | 'provisioned-throughput'
  | 'pipelines'
  | 'tutorials';

export enum ModelType {
  MULTIMODAL = 'Multimodal',
  IMAGE = 'Image',
  TEXT = 'Text',
}

export interface AIModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  type: ModelType;
  category: 'google' | 'partner';
  tasks: string[];
  featuredImageUrl?: string;
}

export interface GpuCluster {
  id: string;
  name: string;
  location: string;
  gpu_type: string;
  hourly_cost: number;
}

export type DataType = 'Image' | 'Tabular' | 'Text' | 'Video';

export type ImageObjective =
  | 'Single-label classification'
  | 'Multi-label classification'
  | 'Object detection'
  | 'Segmentation';

export interface TrainingConfig {
  datasetName: string;
  dataType: DataType;
  imageObjective: ImageObjective;
  region: string;
  dataset: File | null;
  model: AIModel | null;
  gpuCluster: GpuCluster | null;
  epochs: number;
  learningRate: number;
}
