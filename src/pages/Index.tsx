import React, { useState } from "react";
import FormProgress from "@/components/FormProgress";
import OptionCard from "@/components/OptionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";

const Index = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Understanding Your Needs
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
    serviceType: "",
    serviceRecipient: "",
    impactSize: "",
    
    // Context and Challenges
    currentChallenges: "",
    obstacles: "",
    urgencyLevel: "",
    urgencyReason: "",
    priorExperience: "",
    priorExperienceDetails: "",
    noExperienceReason: "",
    
    // Goals and Expectations
    successDefinition: "",
    focusArea: "",
    impactMeasurement: "",
    keyTakeaways: "",
    
    // Logistics and Preferences
    timeframe: "",
    eventDate: "",
    presentationType: "",
    specificTopics: "",
    eventRequirements: "",
    deliveryLocation: "",
    venueDetails: "",
    deliveryFormat: "",
    annualRevenue: "",
    budget: "",
    customization: "",
    resultsTimeframe: "",
    
    // Final Thoughts
    additionalNotes: "",
    followUpCall: "",
    callTime: "",
    timezone: "",
  });

  const totalSteps = 7; // Welcome, 5 sections, and Thank you

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOptionSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
          <Label>Select the age range of your group</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["14-25", "26-39", "40-55", "56-71", "72+"].map((range) => (
              <OptionCard
                key={range}
                label={range}
                selected={formData.ageRange === range}
                onClick={() => handleOptionSelect("ageRange", range)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>What service are you most interested in exploring with Resk'Que?</Label>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                label: "Group Training",
                description: "Leadership development, team empowerment"
              },
              {
                label: "Speaking Engagement",
                description: "Keynote speaker, motivational talks"
              },
              {
                label: "Business Consultation",
                description: "Strategy, scaling, culture-building"
              }
            ].map((service) => (
              <OptionCard
                key={service.label}
                label={service.label}
                description={service.description}
                selected={formData.serviceType === service.label}
                onClick={() => handleOptionSelect("serviceType", service.label)}
              />
            ))}
          </div>
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

  const ContextAndChallenges = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="form-heading">Context and Challenges</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="currentChallenges">What are the biggest challenges your group is currently facing?</Label>
          <Textarea
            id="currentChallenges"
            name="currentChallenges"
            value={formData.currentChallenges}
            onChange={handleInputChange}
            placeholder="e.g., Our team lacks clear communication, We need a high-energy speaker for our annual conference"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="obstacles">What obstacles have prevented you from addressing this issue so far?</Label>
          <Textarea
            id="obstacles"
            name="obstacles"
            value={formData.obstacles}
            onChange={handleInputChange}
            placeholder="e.g., Limited resources, Lack of expertise, Unclear direction"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label>On a scale of 1-10, how urgent is it for you to address this issue?</Label>
          <RadioGroup
            value={formData.urgencyLevel}
            onValueChange={(value) => handleOptionSelect("urgencyLevel", value)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1-3" id="urgency-1" />
              <Label htmlFor="urgency-1">1-3 (Not very urgent)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4-6" id="urgency-2" />
              <Label htmlFor="urgency-2">4-6 (Moderately urgent)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="7-10" id="urgency-3" />
              <Label htmlFor="urgency-3">7-10 (Very urgent)</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.urgencyLevel === "7-10" && (
          <div className="space-y-2">
            <Label htmlFor="urgencyReason">What makes this issue time-sensitive?</Label>
            <Textarea
              id="urgencyReason"
              name="urgencyReason"
              value={formData.urgencyReason}
              onChange={handleInputChange}
              className="min-h-[100px]"
            />
          </div>
        )}
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

  const GoalsAndExpectations = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="form-heading">Goals and Expectations</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="successDefinition">What does success look like for you after engaging with Resk'Que's services?</Label>
          <Textarea
            id="successDefinition"
            name="successDefinition"
            value={formData.successDefinition}
            onChange={handleInputChange}
            placeholder="e.g., A more cohesive team, Increased employee morale, Higher event attendance/engagement"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label>Which of these areas do you want to focus on improving FIRST?</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Leadership skills",
              "Team dynamics/collaboration",
              "Communication effectiveness",
              "Motivation and inspiration",
              "Strategic planning",
              "Operational efficiency"
            ].map((area) => (
              <OptionCard
                key={area}
                label={area}
                selected={formData.focusArea === area}
                onClick={() => handleOptionSelect("focusArea", area)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="keyTakeaways">What are the key takeaways you want your audience to gain from Resk'Que's presentation?</Label>
          <Textarea
            id="keyTakeaways"
            name="keyTakeaways"
            value={formData.keyTakeaways}
            onChange={handleInputChange}
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

  const LogisticsAndPreferences = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="form-heading">Logistics and Preferences</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>When would you like this service to take place?</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "As soon as possible",
              "Within the next 1-3 months",
              "In 3-6 months",
              "Beyond 6 months"
            ].map((timeframe) => (
              <OptionCard
                key={timeframe}
                label={timeframe}
                selected={formData.timeframe === timeframe}
                onClick={() => handleOptionSelect("timeframe", timeframe)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Where will this service be delivered?</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: "In-person at a physical location",
                description: "Traditional face-to-face setting"
              },
              {
                label: "Virtually (online platform)",
                description: "Remote video conferencing"
              },
              {
                label: "Hybrid (combination of in-person and virtual)",
                description: "Mix of both delivery methods"
              }
            ].map((location) => (
              <OptionCard
                key={location.label}
                label={location.label}
                description={location.description}
                selected={formData.deliveryLocation === location.label}
                onClick={() => handleOptionSelect("deliveryLocation", location.label)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>What's your budget range for this service?</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Under $1,000",
              "$1,000–$5,000",
              "$5,000–$10,000",
              "Over $10,000"
            ].map((budget) => (
              <OptionCard
                key={budget}
                label={budget}
                selected={formData.budget === budget}
                onClick={() => handleOptionSelect("budget", budget)}
              />
            ))}
          </div>
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

  const FinalThoughts = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="form-heading">Final Thoughts</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="additionalNotes">Is there anything else you'd like Resk'Que to know about your organization, event, or project before moving forward?</Label>
          <Textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label>Would you like to schedule a follow-up call with Resk'Que or his team to discuss your requirements further?</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Yes", "No"].map((option) => (
              <OptionCard
                key={option}
                label={option}
                selected={formData.followUpCall === option}
                onClick={() => handleOptionSelect("followUpCall", option)}
              />
            ))}
          </div>
        </div>

        {formData.followUpCall === "Yes" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="callTime">When would be the best time for the follow-up call?</Label>
              <Input
                type="datetime-local"
                id="callTime"
                name="callTime"
                value={formData.callTime}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">What time zone are you located in?</Label>
              <Input
                id="timezone"
                name="timezone"
                value={formData.timezone}
                onChange={handleInputChange}
                placeholder="e.g., EST, PST, GMT"
              />
            </div>
          </div>
        )}
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
          Submit
        </Button>
      </div>
    </motion.div>
  );

  const ThankYouScreen = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
        Thank You!
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Thank you for sharing your thoughts and insights! We truly appreciate your honesty and openness. Based on your responses, we'll prepare personalized recommendations to ensure Resk'Que delivers exceptional value to you and your audience. {formData.followUpCall === "Yes" && "Expect to hear from us shortly to finalize everything."} Have a great day ahead!
      </p>
    </motion.div>
  );

  const renderStep = () => {
    switch (step) {
      case 0:
        return <WelcomeScreen />;
      case 1:
        return <UnderstandingNeeds />;
      case 2:
        return <ContextAndChallenges />;
      case 3:
        return <GoalsAndExpectations />;
      case 4:
        return <LogisticsAndPreferences />;
      case 5:
        return <FinalThoughts />;
      case 6:
        return <ThankYouScreen />;
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