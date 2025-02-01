import React, { useState } from "react";
import FormProgress from "@/components/FormProgress";
import OptionCard from "@/components/OptionCard";
import { motion } from "framer-motion";

const Index = () => {
  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options = [
    { id: "mindset", label: "Mindset", description: "Personal growth and development" },
    { id: "health", label: "Health", description: "Physical and mental wellbeing" },
    { id: "business", label: "Business", description: "Strategy and operations" },
    { id: "wealth", label: "Wealth", description: "Financial growth and management" },
    { id: "relationships", label: "Relationships", description: "Personal and professional connections" },
    { id: "leadership", label: "Leadership", description: "Team and organizational guidance" },
  ];

  const toggleOption = (id: string) => {
    setSelectedOptions(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  return (
    <div className="form-container">
      <FormProgress currentStep={step} totalSteps={5} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <h1 className="form-heading">
          What areas of your life do you want to focus on?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map(option => (
            <OptionCard
              key={option.id}
              label={option.label}
              description={option.description}
              selected={selectedOptions.includes(option.id)}
              onClick={() => toggleOption(option.id)}
            />
          ))}
        </div>

        <button
          className="next-button"
          onClick={handleNext}
          disabled={selectedOptions.length === 0}
        >
          Next step
        </button>
      </motion.div>
    </div>
  );
};

export default Index;