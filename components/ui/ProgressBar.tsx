
import React from 'react';

interface ProgressBarProps {
  progress: number;
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div>
        {label && <div className="text-sm font-medium text-content mb-1">{label}</div>}
        <div className="w-full bg-base-300 rounded-full h-2.5">
            <div
                className="bg-brand-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${clampedProgress}%` }}
            ></div>
        </div>
    </div>
  );
};

export default ProgressBar;
