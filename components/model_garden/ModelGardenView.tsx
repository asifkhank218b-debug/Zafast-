import React, { useState } from 'react';
import { MODELS, MODEL_COLLECTIONS, TASKS, IconGridView, IconListView, IconSparkle } from '../../constants';
import type { AIModel } from '../../types';
import Button from '../ui/Button';
import Card from '../ui/Card';


const ModelDetailPage: React.FC<{ model: AIModel, onBack: () => void }> = ({ model, onBack }) => (
    <div>
        <button onClick={onBack} className="text-sm text-brand-secondary mb-4">&larr; Back to Model Garden</button>
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-4xl font-bold text-content-strong">{model.name}</h1>
                <p className="mt-2 text-content">{model.description}</p>
            </div>
            <div className="flex space-x-2">
                <Button variant="primary">Deploy model</Button>
                <Button variant="secondary">Fine tune</Button>
            </div>
        </div>
        
        <div className="mt-6 border-b border-base-300">
            <nav className="flex space-x-8">
                {['Overview', 'Use cases', 'Documentation', 'License'].map(tab => (
                    <a key={tab} href="#" className="py-3 px-1 border-b-2 border-brand-primary text-brand-primary font-medium">{tab}</a>
                ))}
            </nav>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-semibold text-content-strong">Overview</h2>
                <p>The {model.name} models are a family of lightweight, state-of-the-art open models built from the same research and technology used to create the Gemini models. They are text-to-text, decoder-only large language models, available in English, with open weights for both pre-trained variants and instruction-tuned variants.</p>
                <h2 className="text-2xl font-semibold text-content-strong">Use cases</h2>
                <ul className="list-disc pl-5 space-y-2 text-content">
                    <li><strong>Content Creation and Communication:</strong> Text Generation, Text Summarization, Research and Education.</li>
                    <li><strong>Natural Language Processing (NLP) Research:</strong> These models can serve as a foundation for research and education in NLP.</li>
                </ul>
            </div>
            <div>
                <Card>
                    <h3 className="text-lg font-semibold text-content-strong">Try out {model.name}</h3>
                    <div className="mt-4 space-y-3">
                        <div>
                            <label className="text-sm">Region</label>
                            <select className="w-full bg-base-100 p-2 rounded mt-1"><option>us-west1 (Oregon)</option></select>
                        </div>
                        <div>
                            <label className="text-sm">Endpoint</label>
                            <select className="w-full bg-base-100 p-2 rounded mt-1"><option>Demo playground (Free)</option></select>
                        </div>
                        <div>
                            <label className="text-sm">Prompt</label>
                            <textarea rows={4} className="w-full bg-base-100 p-2 rounded mt-1" defaultValue="What is 10+924+2.734+1.0001"></textarea>
                        </div>
                        <Button variant="primary" className="w-full">Submit</Button>
                    </div>
                </Card>
            </div>
        </div>
    </div>
);

const ModelGardenGallery: React.FC<{ onSelectModel: (model: AIModel) => void }> = ({ onSelectModel }) => {
    const featuredModels = MODELS.filter(m => m.featuredImageUrl);
    const foundationModels = MODELS.filter(m => !m.featuredImageUrl && m.category === 'google');
    
    return (
    <div className="flex">
        {/* Left Filter Sidebar */}
        <aside className="w-64 pr-8 space-y-8">
            <div>
                <h3 className="font-semibold text-content-strong mb-2">Model collections</h3>
                <ul className="space-y-1">
                    {MODEL_COLLECTIONS.map(col => (
                        <li key={col.name} className="flex justify-between items-center text-sm p-1 rounded hover:bg-base-200 cursor-pointer">
                            <span className="text-content">{col.name}</span>
                            <span className="text-xs text-gray-400">{col.count}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-content-strong mb-2">Tasks</h3>
                <ul className="space-y-1">
                     {TASKS.slice(0, 12).map(task => (
                        <li key={task.name} className="flex justify-between items-center text-sm p-1 rounded hover:bg-base-200 cursor-pointer">
                            <span className="text-content">{task.name}</span>
                            <span className="text-xs text-gray-400">{task.count}</span>
                        </li>
                    ))}
                    <li className="text-sm text-brand-secondary p-1 cursor-pointer">Show all...</li>
                </ul>
            </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
            <div className="flex justify-between items-center">
                <div className="relative w-full max-w-lg">
                    <input type="search" placeholder="Search models" className="w-full bg-base-200 p-2 pl-10 rounded-md border border-base-300 focus:ring-brand-primary" />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-md bg-base-200"><IconGridView /></button>
                    <button className="p-2 rounded-md hover:bg-base-200"><IconListView /></button>
                </div>
            </div>

            <section className="mt-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-content-strong">What's new in Model Garden</h2>
                    <a href="#" className="text-sm text-brand-secondary">Release notes &rarr;</a>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Placeholder cards */}
                    {['Managed Tuning for Gemma, Qwen, Llama models', 'DeepSeek-V3.2-Exp available on Zafast', 'Model Garden toolkit (SDK, CLI, API)'].map(title => (
                        <div key={title} className="p-4 bg-base-200 rounded-lg hover:bg-base-300 cursor-pointer">
                            <p className="font-semibold text-content-strong text-sm">{title}</p>
                            <p className="text-xs text-content mt-1">Managed Supervised Fine-Tuning is now supporting Open...</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-8">
                 <p className="text-content">Browse, customize, and deploy machine learning models with Model Garden. Choose from models created by Google and other providers.</p>
                 <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                     {featuredModels.map(model => (
                         <div key={model.id} className="h-40 rounded-lg bg-gray-700 flex flex-col justify-end p-4 text-white font-bold cursor-pointer" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'}} onClick={() => onSelectModel(model)}>
                             <h3 className="text-2xl">{model.name}</h3>
                             <p className="text-sm font-normal">{model.description}</p>
                         </div>
                     ))}
                 </div>
            </section>

            <section className="mt-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-content-strong">Foundation models</h2>
                    <a href="#" className="text-sm text-brand-secondary">Show all ({foundationModels.length}) &rarr;</a>
                </div>
                <p className="text-content mt-1 text-sm">Pre-trained multi-task models that can be further tuned or customized for specific tasks.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {foundationModels.slice(0, 8).map(model => (
                        <Card key={model.id} className="cursor-pointer" onClick={() => onSelectModel(model)}>
                            <div className="flex items-start space-x-3">
                                <IconSparkle/>
                                <div>
                                    <h3 className="font-semibold text-content-strong">{model.name}</h3>
                                    <p className="text-xs text-content mt-1">{model.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    </div>
    );
};


const ModelGardenView: React.FC = () => {
    const [selectedModel, setSelectedModel] = useState<AIModel | null>(null);

    if (selectedModel) {
        return <ModelDetailPage model={selectedModel} onBack={() => setSelectedModel(null)} />;
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-content-strong">Model Garden</h1>
            </div>
             <div className="mt-2 text-sm space-x-6 border-b border-base-300 pb-2 mb-6">
                <a href="#" className="text-brand-secondary font-medium">&larr; Explore generative AI</a>
                <a href="#" className="text-brand-secondary font-medium">View my endpoints and models</a>
                <a href="#" className="text-brand-secondary font-medium">Learn more about Model Garden</a>
            </div>

            <ModelGardenGallery onSelectModel={setSelectedModel} />
        </div>
    );
};

export default ModelGardenView;
