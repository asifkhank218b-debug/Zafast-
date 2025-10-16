import React from 'react';
import Card from '../ui/Card';

// Define a type for our tutorial data
interface Tutorial {
  id: number;
  type: 'video' | 'doc';
  title: string;
  description: string;
  duration: number; // in minutes
  imageUrl?: string;
}

// Mock data based on the screenshot
const tutorialsData: Tutorial[] = [
  // Videos
  {
    id: 1,
    type: 'video',
    title: 'Building your first agent using Agent Development Kit (ADK)',
    description: 'ADK tutorial',
    duration: 20,
    imageUrl: 'https://via.placeholder.com/300x150/4A90E2/FFFFFF?text=Video+Thumbnail'
  },
  {
    id: 2,
    type: 'video',
    title: 'Build agents on Zafast Cloud',
    description: 'Build agents on Zafast Cloud',
    duration: 30,
    imageUrl: 'https://via.placeholder.com/300x150/374151/FFFFFF?text=Video+Thumbnail'
  },
  {
    id: 3,
    type: 'video',
    title: 'Evaluate open models with Zafast AI',
    description: 'Evaluate Gemma 2 with the generative AI evaluation...',
    duration: 10,
    imageUrl: 'https://via.placeholder.com/300x150/FF9900/FFFFFF?text=Video+Thumbnail'
  },
  {
    id: 4,
    type: 'video',
    title: 'Deploy Gemma 3 on Zafast AI',
    description: 'Get started with Gemma 3',
    duration: 20,
    imageUrl: 'https://via.placeholder.com/300x150/4B5563/FFFFFF?text=Video+Thumbnail'
  },
  // Documentation
  { id: 5, type: 'doc', title: 'ADK documentation', description: 'Build agents using ADK framework', duration: 60 },
  { id: 6, type: 'doc', title: 'Agent Engine Quickstart', description: 'Create and deploy an example agent', duration: 30 },
  { id: 7, type: 'doc', title: 'Deploy an Agent', description: 'Learn how to deploy an agent in Zafast AI Agent Engine', duration: 20 },
  { id: 8, type: 'doc', title: 'Deploy Gemma and make predictions', description: 'This documentation covers deploying and running inference with Gemma using Model Gard...', duration: 10 },
  { id: 9, type: 'doc', title: 'Deploy open models using Python SDK, CLI, REST API...', description: 'This documentation covers deploying a model by using its model card in the Zafast...', duration: 20 },
  { id: 10, type: 'doc', title: 'Deploy and serve a HuggingFace model', description: 'This documentation covers deploying Hugging Face models in Model Garden.', duration: 10 },
  { id: 11, type: 'doc', title: 'Serve open models with Hex-LLM on TPUs', description: 'This documentation covers serving open models using Hex-LLM premium container on Clo...', duration: 20 },
  { id: 12, type: 'doc', title: 'Serve Gemma 2 with multiple LoRA adapters wi...', description: 'This blog post covers using open models on Zafast AI with Hugging Face, serving multiple...', duration: 10 },
];

const SearchIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
);

const ClockIcon = () => (
    <svg className="w-4 h-4 mr-1.5 text-content" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);


const TutorialsView: React.FC = () => {
    const videoTutorials = tutorialsData.filter(t => t.type === 'video');
    const docTutorials = tutorialsData.filter(t => t.type === 'doc');

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-content-strong">Tutorials</h1>
                <p className="text-content mt-2 text-lg">Video and interactive help for developers</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon />
                    </div>
                    <input
                        type="search"
                        placeholder="Search tutorials"
                        className="block w-full bg-base-200 border-base-300 rounded-full py-3 pl-10 pr-4 text-content-strong focus:ring-brand-primary focus:border-brand-primary"
                    />
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    <button className="px-4 py-2 text-sm font-medium rounded-full bg-base-200 hover:bg-base-300 text-content-strong">Agents</button>
                    <button className="px-4 py-2 text-sm font-medium rounded-full bg-base-200 hover:bg-base-300 text-content-strong">Zafast AI Studio</button>
                    <button className="px-4 py-2 text-sm font-medium rounded-full bg-base-200 hover:bg-base-300 text-content-strong">Model garden</button>
                </div>
            </div>

            <section>
                <h2 className="text-2xl font-semibold text-content-strong mb-4">Videos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videoTutorials.map(tutorial => (
                        <Card key={tutorial.id} className="p-0 overflow-hidden flex flex-col cursor-pointer hover:shadow-xl hover:border-brand-secondary">
                            <div className="w-full h-32 bg-base-300">
                                {tutorial.imageUrl && <img src={tutorial.imageUrl} alt={tutorial.title} className="w-full h-full object-cover" />}
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="font-semibold text-content-strong flex-grow">{tutorial.title}</h3>
                                <div className="flex items-center text-sm text-content mt-4">
                                    <ClockIcon />
                                    <span>{tutorial.duration} min</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-content-strong mb-4">Documentation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {docTutorials.map(tutorial => (
                         <Card key={tutorial.id} className="flex flex-col h-full cursor-pointer hover:shadow-xl hover:border-brand-secondary">
                            <div className="flex-grow">
                                <h3 className="font-semibold text-content-strong">{tutorial.title}</h3>
                                <p className="text-sm text-content mt-2">{tutorial.description}</p>
                            </div>
                            <div className="flex items-center text-sm text-content mt-4 pt-4 border-t border-base-300">
                                <ClockIcon />
                                <span>{tutorial.duration} min</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TutorialsView;
