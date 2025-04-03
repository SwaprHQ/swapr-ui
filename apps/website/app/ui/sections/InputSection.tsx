import { Card, Section, SelectProp } from "@/components";
import { Input, InputSizeProp, InputVariantProp } from "@swapr/ui";
import { useState } from "react";

const sizesOptions = [
  { value: "sm", label: "sm" },
  { value: "md", label: "md" },
  { value: "lg", label: "lg" },
  { value: "xl", label: "xl" },
];

const variantOptions = [
  { value: "secondary", label: "secondary" },
  { value: "primary", label: "primary" },
  { value: "ghost", label: "ghost" },
];

export const InputSection = () => {
  const [size, setSize] = useState<InputSizeProp>("md");
  const [variant, setVariant] = useState<InputVariantProp>("secondary");

  return (
    <Section title="Input" id="inputs">
      <div className="flex space-x-4">
        <SelectProp
          title="Size"
          name="inputSize"
          value={size}
          set={setSize}
          options={sizesOptions}
        />
        <SelectProp
          title="Variant"
          name="inputVariant"
          value={variant}
          set={setVariant}
          options={variantOptions}
        />
      </div>
      <Card className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Input
          label="Email"
          type="email"
          id="email"
          message="This is a message"
          placeholder="Input email here"
          variant={variant}
          size={size}
        />
        <Input
          label="with icons"
          type="email"
          id="email"
          placeholder="Input email here"
          leftIcon="search"
          rightIcon="chevron-down"
          variant={variant}
          size={size}
        />
        <Input
          label="Disabled"
          type="email"
          id="email-2"
          disabled
          message="This is a message"
          placeholder="Input email here"
          size={size}
          variant={variant}
        />
        <Input
          label="With error"
          type="email"
          id="email-3"
          message="There is an error"
          placeholder="Input email here"
          isInvalid={true}
          size={size}
          variant={variant}
        />
      </Card>
    </Section>
  );
};
