import { Card, Section } from "@/components";
import {
  ToggleGroup,
  ToggleGroupOption,
  ToggleOptionSizeProp,
} from "@swapr/ui";
import { useState } from "react";

const toggleGroupOptionSizes: ToggleOptionSizeProp[] = ["xs", "sm", "md", "lg"];

export const ToggleGroupSection = () => {
  const [slipage, setSlipage] = useState("auto");

  return (
    <Section title="ToggleGroup">
      <div className="space-y-3">
        <p>
          Based on Radio Group component from{" "}
          <a
            className="text-text-primary-med-em hover:underline"
            href="https://headlessui.com/react/radio-group"
          >
            Headless ui
          </a>
          .
        </p>
        <div>
          Selected:{" "}
          <span className="rounded-4 bg-surface-surface-2 p-1">{slipage}</span>
        </div>

        <Card className="flex items-center space-x-5 divide-x divide-surface-surface-2">
          {toggleGroupOptionSizes.map(size => (
            <div key={size} className="pl-4">
              <p>Size: {size}</p>
              <ToggleGroup value={slipage} onChange={setSlipage}>
                <ToggleGroupOption value="auto" size={size}>
                  auto
                </ToggleGroupOption>
                <ToggleGroupOption value="0.1" size={size}>
                  0.1%
                </ToggleGroupOption>
                <ToggleGroupOption value="0.5" size={size}>
                  0.5%
                </ToggleGroupOption>
              </ToggleGroup>
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
};
