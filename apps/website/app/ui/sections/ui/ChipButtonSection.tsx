import { Card, Section, SelectProp } from "@/components";
import {
  ChipButton,
  ChipButtonsColorScheme,
  ChipButtonsSizes,
} from "@swapr/ui";
import { useState } from "react";

const chipButtons = [
  { key: "sports", label: "Sports & Fitness" },
  { key: "education", label: "Education & Learning" },
  { key: "finance", label: "Finance & Investment" },
  { key: "realState", label: "Real Estate" },
  { key: "food", label: "Food & Cooking" },
  { key: "tech", label: "Technology & Innovation" },
  { key: "legal", label: "Legal services" },
  { key: "arts", label: "Arts & Culture" },
  { key: "lifestyle", label: "Lifestyle" },
  { key: "travel", label: "Travel" },
  { key: "gaming", label: "Gaming" },
];

const sizeOptions = [
  { value: "xs", label: "xs" },
  { value: "sm", label: "sm" },
  { value: "md", label: "md" },
];

export const ChipButtonsSection = () => {
  const [chipActiveKey, setShipActiveKey] = useState("tech");
  const [chipButtonSize, setChipButtonSize] = useState<ChipButtonsSizes>("md");
  const [chipButtonColorScheme, setChipButtonColorScheme] =
    useState<ChipButtonsColorScheme>("main");

  return (
    <Section title="Chip Buttons" id="chip-buttons">
      <div className="flex mb-4 space-x-3">
        <SelectProp
          title="color scheme"
          name="chipButtonColorScheme"
          value={chipButtonColorScheme}
          set={setChipButtonColorScheme}
          options={[
            { value: "main", label: "main" },
            { value: "neutral", label: "neutral" },
          ]}
        />
        <SelectProp
          title="size"
          name="chipButtonSize"
          value={chipButtonSize}
          set={setChipButtonSize}
          options={sizeOptions}
        />
      </div>

      <Card className="md:w-1/2">
        <p className="mb-4 font-medium">What topics interest you?</p>

        <div className="flex flex-wrap gap-2">
          {chipButtons.map(({ key, label }) => (
            <ChipButton
              key={key}
              onClick={() => setShipActiveKey(key)}
              active={key === chipActiveKey}
              size={chipButtonSize}
              colorScheme={chipButtonColorScheme}
            >
              {label}
            </ChipButton>
          ))}
        </div>
      </Card>
    </Section>
  );
};
