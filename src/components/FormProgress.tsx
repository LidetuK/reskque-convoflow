import React from "react";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgress: React.FC<FormProgressProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-12">
      <div className="step-indicator">
        STEP {currentStep} OF {totalSteps}
      </div>
      <div className="h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default FormProgress;