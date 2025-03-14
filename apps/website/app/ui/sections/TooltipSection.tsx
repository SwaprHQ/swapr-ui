import {
  Button,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@swapr/ui";
import { Card, Section } from "@/components";

export const TooltipSection = () => {
  return (
    <Section title="Tooltips">
      <Card className="grid items-center space-y-2.5 lg:space-y-0 lg:grid-cols-2 lg:gap-4">
        <div className="hidden text-xs font-semibold text-center uppercase bg-gray-200 lg:block">
          Basic
        </div>
        <div className="hidden text-xs font-semibold text-center uppercase bg-gray-200 lg:block">
          Complex
        </div>
        <div className="flex items-center justify-center">
          <TooltipProvider delayDuration={500}>
            <Tooltip>
              <TooltipTrigger>here</TooltipTrigger>
              <TooltipContent side="right">This is a sample</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center justify-center">
          <TooltipProvider delayDuration={500}>
            <Tooltip>
              <TooltipTrigger>here</TooltipTrigger>
              <TooltipContent
                side="right"
                align="center"
                sideOffset={8}
                className="w-60"
              >
                <p>
                  Currently, gas prices are high. It is preferable to perform
                  the transaction after some time.
                </p>
                <div className="flex justify-between mt-4">
                  <Button variant="secondary">Learn more</Button>
                  <Button>Got it</Button>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
    </Section>
  );
};
