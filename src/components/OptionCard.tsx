import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface OptionCardProps {
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({
  label,
  description,
  selected,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "option-card relative",
        selected && "selected"
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="font-medium text-lg">{label}</h3>
          {description && (
            <p className="text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <div
          className={cn(
            "w-5 h-5 rounded-full border-2 flex items-center justify-center",
            selected
              ? "border-accent bg-accent text-white"
              : "border-muted-foreground"
          )}
        >
          {selected && <Check className="w-3 h-3" />}
        </div>
      </div>
    </div>
  );
};

export default OptionCard;