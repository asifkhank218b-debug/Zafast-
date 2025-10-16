
import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Spinner from '../ui/Spinner';
import { generateText, generateImage } from '../../services/geminiService';

type PlaygroundMode = 'text' | 'image';

const PlaygroundView: React.FC = () => {
  const [mode, setMode] = useState<PlaygroundMode>('text');
  const [prompt, setPrompt] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setOutput('');
    try {
      if (mode === 'text') {
        const result = await generateText(prompt);
        setOutput(result);
      } else {
        const imageUrl = await generateImage(prompt);
        setOutput(imageUrl);
      }
    } catch (error) {
      console.error(`Error during ${mode} generation:`, error);
      setOutput(`An error occurred. Please check the console for details.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const renderOutput = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-full">
          <Spinner size="lg" />
        </div>
      );
    }

    if (!output) {
      return <p className="text-content text-center">Your generated content will appear here.</p>;
    }

    if (mode === 'text') {
      return <div className="prose prose-invert max-w-none whitespace-pre-wrap">{output}</div>;
    }

    if (mode === 'image') {
      return <img src={output} alt="Generated image" className="max-w-full max-h-[70vh] mx-auto rounded-lg" />;
    }

    return null;
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-100px)]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-content-strong">Playground</h1>
          <p className="text-content mt-1">Experiment with Google's generative AI models.</p>
        </div>
      </div>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
        {/* Input Panel */}
        <Card className="flex flex-col">
          <div className="flex items-center border-b border-base-300 mb-4">
            <button
              onClick={() => setMode('text')}
              className={`py-2 px-4 font-semibold ${mode === 'text' ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-content'}`}
            >
              Text Generation
            </button>
            <button
              onClick={() => setMode('image')}
              className={`py-2 px-4 font-semibold ${mode === 'image' ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-content'}`}
            >
              Image Generation
            </button>
          </div>
          <div className="flex-grow flex flex-col">
            <label htmlFor="prompt" className="text-lg font-semibold text-content-strong mb-2">
              Enter your prompt
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={handlePromptChange}
              placeholder={mode === 'text' ? 'e.g., Write a poem about a robot learning to paint.' : 'e.g., A futuristic cityscape at sunset, with flying cars.'}
              className="w-full flex-grow bg-base-100 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <Button onClick={handleGenerate} disabled={isLoading || !prompt.trim()} className="mt-4 w-full">
              {isLoading ? 'Generating...' : 'Generate'}
            </Button>
          </div>
        </Card>

        {/* Output Panel */}
        <Card className="overflow-auto">
          <h2 className="text-lg font-semibold text-content-strong mb-4">Output</h2>
          <div className="bg-base-100 p-4 rounded-md min-h-[200px] flex items-center justify-center">
            {renderOutput()}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlaygroundView;
