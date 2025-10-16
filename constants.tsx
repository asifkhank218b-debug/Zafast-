import React from 'react';
import { ModelType, AIModel, GpuCluster } from './types';

export const MODELS: AIModel[] = [
  // Featured Models
  {
    id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'Google', description: 'Most capable model for complex reasoning and code.', type: ModelType.MULTIMODAL, category: 'google', tasks: ['Text generation', 'Text understanding'],
    featuredImageUrl: 'https://lh3.googleusercontent.com/g0sCc3wIm2-4n3RH4_2rg2K-KGQdI2j5s2-0922-l2t-e-qOq4L-L-k-j-k=w1024-h512-rw'
  },
  {
    id: 'imagen-4', name: 'Imagen 4', provider: 'Google', description: 'Generate images with text prompts.', type: ModelType.IMAGE, category: 'google', tasks: ['Image generation'],
    featuredImageUrl: 'https://lh3.googleusercontent.com/g0sCc3wIm2-4n3RH4_2rg2K-KGQdI2j5s2-0922-l2t-e-qOq4L-L-k-j-k=w1024-h512-rw'
  },
  {
    id: 'veo-3', name: 'Veo 3', provider: 'Google', description: 'Generate multimodal videos.', type: ModelType.MULTIMODAL, category: 'google', tasks: ['Video generation'],
    featuredImageUrl: 'https://lh3.googleusercontent.com/g0sCc3wIm2-4n3RH4_2rg2K-KGQdI2j5s2-0922-l2t-e-qOq4L-L-k-j-k=w1024-h512-rw'
  },
  {
    id: 'llama-4', name: 'Llama 4', provider: 'Meta', description: 'Leading intelligence. Unrivaled speed and efficiency.', type: ModelType.TEXT, category: 'partner', tasks: ['Text generation'],
    featuredImageUrl: 'https://lh3.googleusercontent.com/g0sCc3wIm2-4n3RH4_2rg2K-KGQdI2j5s2-0922-l2t-e-qOq4L-L-k-j-k=w1024-h512-rw'
  },
  // Foundation Models
  { id: 'gemini-2.5-flash-lite-preview', name: 'Gemini 2.5 Flash-Lite Preview', provider: 'Google', description: 'Most balanced Gemini model for low latency use cases.', type: ModelType.MULTIMODAL, category: 'google', tasks: ['Text generation', 'Image understanding'] },
  { id: 'gemini-2.5-flash-preview', name: 'Gemini 2.5 Flash Preview', provider: 'Google', description: 'Strong overall performance and low latency.', type: ModelType.MULTIMODAL, category: 'google', tasks: ['Text generation', 'Image understanding'] },
  { id: 'gemini-2.5-flash-lite', name: 'Gemini 2.5 Flash-Lite', provider: 'Google', description: 'Most balanced Gemini model for low latency use cases.', type: ModelType.MULTIMODAL, category: 'google', tasks: ['Text generation', 'Image understanding'] },
  { id: 'gemini-2.5-pro-details', name: 'Gemini 2.5 Pro', provider: 'Google', description: 'Strongest model quality, especially for code & complex prompts.', type: ModelType.MULTIMODAL, category: 'google', tasks: ['Text generation', 'Image understanding', 'Code generation'] },
  { id: 'gemini-2.5-flash-speed', name: 'Gemini 2.5 Flash', provider: 'Google', description: 'Best for balancing reasoning and speed.', type: ModelType.MULTIMODAL, category: 'google', tasks: ['Text generation', 'Image understanding'] },
  { id: 'gemini-2.0-flash-lite', name: 'Gemini 2.0 Flash-Lite', provider: 'Google', description: 'Our cost-effective Gemini model to support high throughput.', type: ModelType.MULTIMODAL, category: 'google', tasks: ['Text generation', 'Image understanding'] },
  { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', provider: 'Google', description: 'Workhorse model for all daily tasks. Strong overall performance.', type: ModelType.MULTIMODAL, category: 'google', tasks: ['Text generation', 'Image understanding'] },

  // Partner Models
  { id: 'claude-3.5-sonnet', name: 'Claude 3.5 Sonnet', provider: 'Anthropic', description: 'Ideal balance of intelligence and speed.', type: ModelType.TEXT, category: 'partner', tasks: ['Text generation'] },
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', description: 'Most advanced, multimodal model from OpenAI.', type: ModelType.MULTIMODAL, category: 'partner', tasks: ['Text generation', 'Image understanding'] },
];

export const MODEL_COLLECTIONS = [
    { name: 'Google models', count: 113 },
    { name: 'Partner models', count: 43 },
    { name: 'Self-deploy partner models', count: 9 },
];

export const TASKS = [
    { name: 'Image classification', count: 26 },
    { name: 'Object detection', count: 28 },
    { name: 'Text classification', count: 48 },
    { name: 'Entity extraction', count: 34 },
    { name: 'Image segmentation', count: 12 },
    { name: 'Image generation', count: 37 },
    { name: 'Text generation', count: 75 },
    { name: 'Image understanding', count: 24 },
    { name: 'Text embeddings', count: 15 },
    { name: 'Tabular classification', count: 13 },
    { name: 'Document processing', count: 18 },
    { name: 'Translation', count: 35 },
    { name: 'Image retrieval', count: 1 },
    { name: 'Video classification', count: 2 },
    { name: 'Open vocabulary detection', count: 2 },
    { name: 'Health and life sciences', count: 7 },
    { name: 'Video generation', count: 12 },
    { name: 'Multimodal generation', count: 24 },
    { name: 'Pathology', count: 3 },
    { name: 'Dermatology', count: 3 },
    { name: 'Audio generation', count: 9 },
];

export const GPU_CLUSTERS: GpuCluster[] = [
    { id: 'a100-sxm4-80gb-x1', name: '1x NVIDIA A100 80GB', location: 'Mumbai', gpu_type: 'A100', hourly_cost: 3.50 },
    { id: 'a100-sxm4-80gb-x8', name: '8x NVIDIA A100 80GB', location: 'Mumbai', gpu_type: 'A100', hourly_cost: 28.00 },
    { id: 'h100-pcie-80gb-x1', name: '1x NVIDIA H100 80GB', location: 'Hyderabad', gpu_type: 'H100', hourly_cost: 4.20 },
    { id: 'h100-pcie-80gb-x8', name: '8x NVIDIA H100 80GB', location: 'Hyderabad', gpu_type: 'H100', hourly_cost: 33.60 },
];

export const REGIONS = [
    { id: 'in-mumbai-1', name: 'India (Mumbai)' },
    { id: 'in-hyderabad-1', name: 'India (Hyderabad)' },
    { id: 'us-east-1', name: 'US (N. Virginia)' },
    { id: 'eu-west-1', name: 'Europe (Ireland)' },
];

// Placeholder Icons
export const IconSingleLabel = () => <div className="p-2 text-xs">🖼️ → 🏷️</div>;
export const IconMultiLabel = () => <div className="p-2 text-xs">🖼️ → 🏷️, 🏷️</div>;
export const IconObjectDetection = () => <div className="p-2 text-xs">🖼️ → [🏷️]</div>;
export const IconSegmentation = () => <div className="p-2 text-xs">🖼️ → 🎭</div>;

export const IconGridView = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
export const IconListView = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>;
export const IconSparkle = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L15 12l-1.293 1.293a1 1 0 01-1.414 0L10 10.414l-1.293 1.293a1 1 0 01-1.414 0L5 9.414 3.707 8.121a1 1 0 010-1.414L5 5m14 1l-2.293 2.293a1 1 0 01-1.414 0L14 7.414l-1.293 1.293a1 1 0 01-1.414 0L9 6.414 7.707 5.121a1 1 0 010-1.414L9 2m10 10l-2 2-2-2m4 0l-2-2 2-2" /></svg>;
export const IconModelGarden = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 18h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>;
