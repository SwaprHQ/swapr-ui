import type { Meta, StoryFn } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Basic: StoryFn<typeof Button> = args => <Button {...args} />;
Basic.args = {
  children: "Button",
};

export type ButtonMainVariant =
  | "primary"
  | "light"
  | "secondary"
  | "tertiary"
  | "neutral"
  | "ghost";

const variants: ButtonMainVariant[] = [
  "primary",
  "light",
  "secondary",
  "tertiary",
  "neutral",
  "ghost",
];

export const AllMainVariants: StoryFn<typeof Button> = args => (
  <div className="flex space-x-2">
    {variants.map(variant => (
      <Button key={variant} {...args} variant={variant}>
        {variant}
      </Button>
    ))}
  </div>
);

AllMainVariants.args = {
  children: "Button",
};

export type ButtonDangerVariant = Exclude<ButtonMainVariant, "neutral">;

const dangerVariants: ButtonDangerVariant[] = [
  "primary",
  "light",
  "secondary",
  "tertiary",
  "ghost",
];

export const AllDangerVariants: StoryFn<typeof Button> = args => (
  <div className="flex space-x-2">
    {dangerVariants.map(variant => (
      <Button key={variant} {...args} variant={variant} colorScheme="danger">
        {variant}
      </Button>
    ))}
  </div>
);

AllDangerVariants.args = {
  children: "Button",
};

export const AllSuccessVariants: StoryFn<typeof Button> = args => (
  <div className="flex space-x-2">
    {dangerVariants.map(variant => (
      <Button key={variant} {...args} variant={variant} colorScheme="success">
        {variant}
      </Button>
    ))}
  </div>
);

AllSuccessVariants.args = {
  children: "Button",
};
