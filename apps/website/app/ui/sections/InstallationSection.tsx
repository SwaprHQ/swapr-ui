import { Section } from "@/components";
import { Icon } from "@swapr/ui";
import { useState } from "react";

export const InstallationSection = () => (
  <Section title="Getting started" id="install">
    <div className="space-y-4">
      <p>
        To install the{" "}
        <code className="text-text-med-em font-mono">@swapr/ui</code> package
        run the following command on your terminal.
      </p>
      <CommandSwitcher />
    </div>
  </Section>
);

const packageManagers = ["bun", "pnpm", "npm", "yarn"] as const;

const commands = {
  bun: "bun add @swapr/ui",
  pnpm: "pnpm install @swapr/ui",
  npm: "npm install @swapr/ui",
  yarn: "yarn add @swapr/ui",
};

export default function CommandSwitcher() {
  const [selectedPM, setSelectedPM] =
    useState<(typeof packageManagers)[number]>("bun");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[selectedPM]).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-surface-surface-1 rounded-16 p-2 w-96">
      <div className="flex justify-between items-center bg-surface-2 rounded-6 px-4 py-2">
        <div className="flex space-x-3">
          {packageManagers.map(pm => (
            <button
              key={pm}
              onClick={() => setSelectedPM(pm)}
              className={`text-sm font-mono font-medium ${
                selectedPM === pm
                  ? "text-text-high-em"
                  : "text-neutral-inverse-white-alpha-32"
              } transition-colors`}
            >
              {pm}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className="text-text-med-em hover:text-text-high-em"
        >
          {copied ? (
            <Icon name="tick" size={18} className="text-text-primary-high-em" />
          ) : (
            <Icon name="copy" size={18} />
          )}
        </button>
      </div>
      <div className="bg-surface-surface-2 p-4 mt-2 rounded-16 text-text-inverse-white-neutral font-mono text-sm">
        {commands[selectedPM]}
      </div>
    </div>
  );
}
