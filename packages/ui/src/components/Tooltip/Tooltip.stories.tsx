import type { Meta, StoryObj } from "@storybook/react";
import { cx } from "class-variance-authority";
import { TooltipContentProps } from "@radix-ui/react-tooltip";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";
import { Button } from "../Button";

const meta = {
  title: "Components/Tooltip Content",
  component: TooltipContent,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
      defaultValue: "top",
      description:
        "Represents the preferred alignment of the content relative to the trigger.",
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      defaultValue: "top",
      description: "Sets the content alignment relative to the trigger.",
    },
    sideOffset: {
      control: "number",
      defaultValue: 0,
      description:
        "Represents the distance in pixels between the content and the trigger",
    },
  },
} satisfies Meta<typeof TooltipContent>;
export default meta;

type Story = StoryObj<typeof meta>;

const basicTooltipPropList: Array<TooltipContentProps> = [
  { align: "end", side: "bottom" },
  { align: "center", side: "bottom" },
  { align: "start", side: "bottom" },
  { align: "end", side: "right" },
  { align: "center", side: "top" },
  { align: "start", side: "left" },
  { align: "end", side: "top" },
  { align: "center", side: "top" },
  { align: "start", side: "top" },
];
export const Basic: Story = {
  render: args => (
    <div
      className={cx(
        "w-full h-[95vh] grid grid-cols-3 grid-rows-3",
        // Second column
        "[&>*:nth-child(3n+2)]:justify-center",
        // Third column
        "[&>*:nth-child(3n)]:justify-end",
        // First row
        "[&>:nth-child(-n+3)]:items-start",
        // Second row
        "[&>:nth-child(n+4):nth-child(-n+6)]:items-center",
        // Third row
        "[&>:nth-child(n+7)]:items-end"
      )}
    >
      {basicTooltipPropList.map((props, index) => (
        <div key={index} className="flex">
          <TooltipProvider delayDuration={500}>
            <Tooltip>
              <TooltipTrigger>Hover here</TooltipTrigger>
              <TooltipContent {...args} {...props}>
                This is a sample
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  ),
};

export const Complex: Story = {
  render: args => (
    <div className="w-full h-[95vh] mt-32 ml-32">
      <TooltipProvider delayDuration={500}>
        <Tooltip>
          <TooltipTrigger>Hover here</TooltipTrigger>
          <TooltipContent
            {...args}
            side="right"
            align="center"
            sideOffset={8}
            className="w-60"
          >
            <p>
              Currently, gas prices are high. It is preferable to perform the
              transaction after some time.
            </p>
            <div className="flex mt-4 justify-between">
              <Button variant="secondary">Learn more</Button>
              <Button>Got it</Button>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};
