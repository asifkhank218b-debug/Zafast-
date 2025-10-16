import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { MODELS, REGIONS } from '../../constants';

const QuestionIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.79 4 4 0 1.152-.468 2.196-1.23 2.963-.751.751-1.783 1.29-2.77 1.635V17m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const FineTuningView: React.FC = () => {
    const [step, setStep] = useState(1);

    const StepButton: React.FC<{ stepNumber: number; label: string; currentStep: number }> = ({ stepNumber, label, currentStep }) => (
        <div className="flex items-center space-x-3">
            <span className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${currentStep >= stepNumber ? 'bg-brand-secondary text-white' : 'bg-base-200'}`}>
                {stepNumber}
            </span>
            <span className={`font-semibold ${currentStep === stepNumber ? 'text-content-strong' : 'text-content'}`}>
                {label}
            </span>
        </div>
    );

    return (
        <div>
            <div className="flex items-center space-x-2 mb-6">
                 <button className="text-sm text-brand-secondary flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    Back
                </button>
                <h1 className="text-3xl font-bold text-content-strong">Create a tuned model</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Step Navigator */}
                <aside className="w-full md:w-1/4">
                    <div className="space-y-4">
                        <StepButton stepNumber={1} label="Model details" currentStep={step} />
                        <StepButton stepNumber={2} label="Tuning dataset" currentStep={step} />
                    </div>
                    <div className="mt-8">
                        <Button variant="secondary" disabled>Start tuning</Button>
                    </div>
                </aside>

                {/* Right Form Content */}
                <main className="flex-1">
                    {step === 1 && (
                        <div className="space-y-6">
                            <div>
                                <p className="text-content">
                                    Supervised fine-tuning customises a large model to your tasks and can improve the model's quality and efficiency. <a href="#" className="text-brand-secondary">Learn more</a>
                                </p>
                                <p className="text-content mt-4">
                                    Supervised fine-tuning is a good option when you have a well-defined task with available labelled data. For example, it can improve model performance for the following types of tasks:
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-content">
                                    <li>Classification</li>
                                    <li>Summarisation</li>
                                    <li>Extractive question answering</li>
                                    <li>Chat</li>
                                </ul>
                            </div>

                            <div className="border-t border-base-300 pt-6">
                                <h2 className="text-lg font-semibold text-content-strong">Model details</h2>
                                <div className="space-y-6 mt-4">
                                    <div>
                                        <label htmlFor="tuned-model-name" className="block text-sm font-medium text-content mb-1">Tuned model name *</label>
                                        <div className="relative">
                                            <input type="text" id="tuned-model-name" className="w-full bg-base-200 p-2 rounded-md border border-base-300 pr-10" />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"><QuestionIcon /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="base-model" className="block text-sm font-medium text-content mb-1">Base model</label>
                                         <div className="relative">
                                            <select id="base-model" className="w-full bg-base-200 p-2 rounded-md border border-base-300 appearance-none pr-10">
                                                <option value="gemini-2.5-flash-lite">gemini-2.5-flash-lite</option>
                                                {MODELS.filter(m => m.type === 'Text' || m.type === 'Multimodal').map(model => (
                                                    <option key={model.id} value={model.id}>{model.name}</option>
                                                ))}
                                            </select>
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"><QuestionIcon /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="region" className="block text-sm font-medium text-content mb-1">Region</label>
                                        <div className="relative">
                                            <select id="region" className="w-full bg-base-200 p-2 rounded-md border border-base-300 appearance-none pr-10">
                                                <option value="us-central1">us-central1 (Iowa)</option>
                                                {REGIONS.map(region => (
                                                    <option key={region.id} value={region.id}>{region.name}</option>
                                                ))}
                                            </select>
                                             <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"><QuestionIcon /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="text-sm text-brand-secondary flex items-center">
                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                            Advanced options
                                        </button>
                                    </div>
                                </div>
                            </div>
                             <div className="flex justify-end pt-6">
                                <Button variant="secondary" onClick={() => setStep(2)} disabled>Continue</Button>
                            </div>
                        </div>
                    )}
                     {step === 2 && (
                        <Card className="text-center p-12">
                            <h2 className="text-xl font-semibold text-content-strong">Tuning Dataset</h2>
                            <p className="text-content mt-2">
                                The interface for selecting or uploading your tuning dataset would be displayed here.
                            </p>
                        </Card>
                    )}
                </main>
            </div>
        </div>
    );
};

export default FineTuningView;
