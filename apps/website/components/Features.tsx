"use client";

import { Button, IconName, Icon } from "@swapr/ui";
import { useTheme } from "next-themes";
import { useState } from "react";
import { cx } from "class-variance-authority";
import Link from "next/link";

export const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-[900px] gap-4 px-4">
      {features.map(feature => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </div>
  );
};

interface BentoCardProps {
  background: React.ReactNode;
  iconName: IconName;
  name: string;
  description: string;
  className?: string;
}

const BentoCard = ({
  name,
  className = "",
  background,
  iconName,
  description,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cx(
      "group relative flex flex-col justify-between overflow-hidden rounded-16",
      "bg-background transform-gpu",
      "shadow-3 hover:shadow-focus-primary",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon
        name={iconName}
        className="size-6 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="max-w-lg text-text-med-em">{description}</p>
    </div>

    <div
      className={cx(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Link href="/ui" className="block">
        <Button
          onClick={() => console.log("hey")}
          className="pointer-events-auto"
          variant="tertiary"
          size="sm"
        >
          Explore components
        </Button>
      </Link>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300" />
  </div>
);

const ShowButtons = () => {
  return (
    <div className="w-full h-full items-center py-24 bg-surface-surface-smoke-gray">
      <div className="py-1 flex justify-center  space-x-2">
        <Button className="hover:scale-110">I</Button>
        <Button
          variant="primary"
          colorScheme="danger"
          className="hover:scale-110"
        >
          Love
        </Button>
        <Button
          variant="primary"
          colorScheme="success"
          className="hover:scale-110"
        >
          Buttons
        </Button>
      </div>
    </div>
  );
};

const ShowCode = () => {
  const code = `
        <Button size="xs">
    Confirm
</Button>

`;

  return (
    <div className="py-14 bg-surface-surface-smoke-gray flex justify-center">
      <pre className=" bg-surface-surface-1 text-text-primary-med-em p-4 rounded-6 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-900 text-text-inverse-white-neutral py-2">
      <div className="inline-block animate-marquee">
        {text} &nbsp;•&nbsp; {text} &nbsp;•&nbsp; {text}
      </div>
    </div>
  );
};

const ShowLightDarkMode = () => {
  const { resolvedTheme } = useTheme();
  const defaultTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <div
      data-theme={theme}
      className={`${theme} bg-surface-surface-smoke-gray`}
    >
      <div className="py-14 space-y-2 flex flex-col items-center">
        <Button
          variant="light"
          colorScheme="danger"
          onClick={() => setTheme("light")}
          className="space-x-2"
        >
          <p>light mode</p>
          <Icon name="day" />
        </Button>

        <Button
          variant="light"
          onClick={() => setTheme("dark")}
          className="space-x-2"
        >
          <p>dark mode</p>
          <Icon name="night" />
        </Button>
      </div>
      <div>
        <Marquee text={`${theme} mode ready`} />
      </div>
    </div>
  );
};

const features = [
  {
    iconName: "play" as IconName,
    name: "Multiple components",
    description:
      "From toasts, modals, buttons, tabs, all ready to use out of the box",
    background: <ShowButtons />,
  },
  {
    iconName: "night" as IconName,
    name: "Light/Dark theme ready",
    description:
      "We spent an incredible amount of time tweaking the theme to make it look good on both.",
    background: <ShowLightDarkMode />,
  },
  {
    iconName: "code" as IconName,
    name: "Code",
    description: "Our components have a simplify API to be easy to use.",
    background: <ShowCode />,
  },
];
