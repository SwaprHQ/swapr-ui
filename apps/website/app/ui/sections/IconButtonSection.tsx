import { Card, Section, SelectProp } from "@/components";
import {
  ButtonColorScheme,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
  IconButton,
  IconName,
} from "@swapr/ui";
import { useState } from "react";

interface IconListProps {
  name: IconName;
  disabled?: boolean;
  active?: boolean;
  variant?: ButtonProps["variant"];
  colorScheme?: ButtonProps["colorScheme"];
  size?: ButtonProps["size"];
}

const iconButtonList: Array<Array<IconListProps>> = [
  [
    { name: "activity", variant: "primary", size: "xs" },
    { name: "lock", variant: "light", size: "sm" },
    { name: "download", variant: "secondary", size: "md" },
    { name: "bitcoin", variant: "tertiary", size: "lg" },
    { name: "add-fill", variant: "ghost", size: "lg" },
  ],
  [
    { name: "lock", disabled: true },
    { name: "user-fill", active: true },
    { name: "farm", colorScheme: "success" },
  ],
];

const btnVariantOptions = [
  { value: "primary", label: "primary" },
  { value: "secondary", label: "secondary" },
  { value: "light", label: "light" },
  { value: "tertiary", label: "tertiary" },
  { value: "ghost", label: "ghost" },
  { value: "neutral", label: "neutral" },
];

const btnColorSchemeOptions = [
  { value: "main", label: "main" },
  { value: "success", label: "success" },
  { value: "danger", label: "danger" },
];

const btnSizesOptions = [
  { value: "xs", label: "xs" },
  { value: "sm", label: "sm" },
  { value: "md", label: "md" },
  { value: "lg", label: "lg" },
  { value: "xl", label: "xl" },
];

const btnNameOptions = [
  { value: "farm", label: "farm" },
  { value: "send-fill", label: "send-fill" },
  { value: "night", label: "night" },
  { value: "download", label: "download" },
  { value: "coin-swap", label: "coin-swap" },
  { value: "chevron-left", label: "chevron-left" },
  { value: "gas", label: "gas" },
  { value: "exclamation-fill", label: "exclamation-fill" },
  { value: "notification", label: "notification" },
  { value: "copy-fill", label: "copy-fill" },
];

export const IconButtonSection = () => {
  const [size, setSize] = useState<ButtonSize>("md");
  const [colorScheme, setColorScheme] = useState<ButtonColorScheme>("main");
  const [variant, setVariant] = useState<ButtonVariant>("primary");
  const [iconName, setIconName] = useState<IconName>("farm");

  return (
    <Section title="Icon Buttons">
      <p className="mb-6">
        Icons support all the buttons props, like color scheme and variant.
      </p>
      <div className="md:flex md:space-x-4 md:mb-4">
        <SelectProp
          title="Variant"
          name="iconBtnVariant"
          value={variant}
          set={setVariant}
          options={btnVariantOptions}
        />
        <SelectProp
          title="Color scheme"
          name="iconBtnColorScheme"
          value={colorScheme}
          set={setColorScheme}
          options={btnColorSchemeOptions}
        />

        <SelectProp
          name="iconbtnSize"
          title="size"
          value={size}
          set={setSize}
          options={btnSizesOptions}
        />
        <SelectProp
          name="iconbtnName"
          title="name"
          value={iconName}
          set={setIconName}
          options={btnNameOptions}
        />
      </div>
      <div className="md:flex md:space-y-0 space-y-4 md:space-x-6 mt-4 md:mt-0">
        <Card className="md:w-36 flex items-center justify-center">
          <IconButton
            colorScheme={colorScheme}
            variant={variant}
            size={size}
            name={iconName}
          />
        </Card>
        <Card className="md:w-1/2">
          <div className="space-y-2">
            {iconButtonList.map((row, i) => (
              <div key={i} className="flex space-x-2">
                {row.map((button, j) => (
                  <IconButton colorScheme="main" {...button} key={j} />
                ))}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};
