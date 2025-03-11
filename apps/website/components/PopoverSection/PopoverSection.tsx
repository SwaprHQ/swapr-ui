import { Section } from "@/components";
import {
  PopoverBasic,
  PopoverSlippageSettings,
  PopoverWithHeader,
} from "./examples";

interface PopoverList {
  headers: Array<string>;
  examples: Array<() => JSX.Element>;
}

const popoverList: PopoverList = {
  headers: ["Basic", "With Header", "Settings example"],
  examples: [PopoverBasic, PopoverWithHeader, PopoverSlippageSettings],
};

export const PopoverSection = () => (
  <Section title="Popovers">
    <div className="grid items-center space-y-2.5 lg:space-y-0 lg:grid-cols-3 lg:gap-4">
      {popoverList.headers.map((header, index) => (
        <div
          key={index}
          className="hidden text-xs font-semibold text-center uppercase bg-gray-200 lg:block"
        >
          {header}
        </div>
      ))}
      {popoverList.examples.map((Example, index) => (
        <div key={index} className="flex items-center justify-center">
          <Example />
        </div>
      ))}
    </div>
  </Section>
);
