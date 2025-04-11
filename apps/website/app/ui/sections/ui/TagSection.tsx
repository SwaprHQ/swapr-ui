import { Card, Section, SelectProp } from "@/components";
import { Tag, TagColorSchemeProp, TagSizeProp } from "@swapr/ui";
import { useState } from "react";

const TagColorSchemes = [
  "primary",
  "light",
  "outline",
  "secondary",
  "tertiary",
  "success",
  "danger",
  "warning",
  "info",
];

const sizesOptions = [
  { value: "xs", label: "xs" },
  { value: "sm", label: "sm" },
  { value: "md", label: "md" },
];

export const TagSection = () => {
  const [size, setSize] = useState<TagSizeProp>("xs");

  return (
    <Section title="Tag" id="tags">
      <SelectProp
        title="Variant"
        name="iconBtnVariant"
        value={size}
        set={setSize}
        options={sizesOptions}
      />
      <Card className="flex space-x-6">
        {TagColorSchemes.map(color => (
          <div key={color}>
            <Tag colorScheme={color as TagColorSchemeProp} size={size}>
              {color}
            </Tag>
          </div>
        ))}
      </Card>
    </Section>
  );
};
