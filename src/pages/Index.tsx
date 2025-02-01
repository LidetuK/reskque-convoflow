import React, { useState } from "react";
import FormProgress from "@/components/FormProgress";
import OptionCard from "@/components/OptionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Index = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    industry: "",
    businessDuration: "",
    businessGoals: "",
    groupType: "",
    trainingTopics: "",
    preferredFormat: "",
    additionalInfo: "",
    eventTheme: "",
    ageRange: "",
  });

  const totalSteps = 6; // Including welcome and thank you screens

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => Math.max(0, prev - 1));
  };

  const WelcomeScreen = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
        Welcome to Resk'Que Speaker / Consulting Form
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Thank you for reaching out to Resk'Que's team! Whether you're looking to empower your team through group training, host an inspiring speaking engagement, or seek expert business consultation, we're here to help. This short questionnaire will guide us in understanding your unique needs and crafting a solution that aligns with your vision.
      </p>
      <Button onClick={handleNext} className="next-button">
        Let's Get Started
      </Button>
    </motion.div>
  );

  const UnderstandingNeeds = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="form-heading">Understanding Your Needs</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">What's your name?</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Your organization name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry">What industry are you in?</Label>
          <Input
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            placeholder="e.g., Technology, Healthcare, Education"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessDuration">How long have you been in business?</Label>
          <Input
            id="businessDuration"
            name="businessDuration"
            value={formData.businessDuration}
            onChange={handleInputChange}
            placeholder="e.g., 2 years, 5+ years"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessGoals">What are your current business goals?</Label>
          <Textarea
            id="businessGoals"
            name="businessGoals"
            value={formData.businessGoals}
            onChange={handleInputChange}
            placeholder="e.g., revenue growth, market expansion, brand building"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="groupType">What type of group are you looking to train?</Label>
          <Input
            id="groupType"
            name="groupType"
            value={formData.groupType}
            onChange={handleInputChange}
            placeholder="e.g., Executive team, Sales department"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="trainingTopics">What topics or skills are most important for this training?</Label>
          <Textarea
            id="trainingTopics"
            name="trainingTopics"
            value={formData.trainingTopics}
            onChange={handleInputChange}
            placeholder="e.g., leadership, communication, sales, mindset"
            className="min-h-[100px]"
          />
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <Button
          onClick={handleBack}
          variant="outline"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="next-button"
        >
          Next step
        </Button>
      </div>
    </motion.div>
  );

  const renderStep = () => {
    switch (step) {
      case 0:
        return <WelcomeScreen />;
      case 1:
        return <UnderstandingNeeds />;
      default:
        return <div>More sections coming soon...</div>;
    }
  };

  return (
    <div className="form-container">
      {step > 0 && step < totalSteps - 1 && (
        <FormProgress currentStep={step} totalSteps={totalSteps - 2} />
      )}
      {renderStep()}
    </div>
  );
};

export default Index;