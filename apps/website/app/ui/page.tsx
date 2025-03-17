"use client";

import { Fragment, useState } from "react";

import {
  Icon,
  IconName,
  iconMap,
  Input,
  Logo,
  LogoSizeProp,
  LogoPair,
  LogoPairVariant,
  Tag,
  TagColorSchemeProp,
  ToggleGroup,
  ToggleGroupOption,
  ToggleOptionSizeProp,
} from "@swapr/ui";

import { Section, ThemeSwitch } from "@/components";
import {
  ButtonSection,
  ButtonLinkSection,
  ChipButtonsSection,
  ColorsSection,
  IconButtonSection,
  TabsSection,
  ToastSection,
  TooltipSection,
  PopoverSection,
} from "@/app/ui/sections";
import { ModalSection } from "@/app/ui/sections/ModalSection";

interface LogoListProps {
  variant?: LogoPairVariant;
  size?: LogoSizeProp;
}

const logoList: Array<LogoListProps> = [
  { size: "xl" },
  { size: "lg" },
  { size: "md" },
  { size: "sm" },
  { size: "xs" },
];

const logoPairList: Array<Array<LogoListProps>> = [
  [
    { size: "xl" },
    { size: "lg" },
    { size: "md" },
    { size: "sm" },
    { size: "xs" },
  ],
  [
    { size: "xl", variant: "highlight" },
    { size: "lg", variant: "highlight" },
    { size: "md", variant: "highlight" },
    { size: "sm", variant: "highlight" },
    { size: "xs", variant: "highlight" },
  ],
];

const toggleGroupOptionSizes: ToggleOptionSizeProp[] = ["xs", "sm", "md", "lg"];

const TagColorSchemes = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "success",
  "danger",
  "info",
];

export default function UI() {
  const [slipage, setSlipage] = useState("auto"); // radioGroup eg

  return (
    <main className="max-w-screen-xl px-5 mx-auto my-10 overflow-auto">
      <ThemeSwitch />
      <div className="pb-12 my-12 space-y-12 divide-y divide-surface-surface-smoke-gray-em">
        <div className="space-y-4">
          <h1 className="text-[42px] font-bold mb-8">Swapr UI</h1>
          <div className="max-w-2xl space-y-2">
            <p>
              Create create awesome user interfaces without the hussle of
              rebuild the same component all over again.
            </p>
            <p>
              Inspired by{" "}
              <a
                href="https://atomizedesign.com/"
                className=" text-text-primary-med-em hover:text-text-primary-high-em"
              >
                Atomize Design System
              </a>
            </p>
          </div>
        </div>
        <ButtonSection />
        <IconButtonSection />
        <ModalSection />
        <ToastSection />
        <ChipButtonsSection />
        <PopoverSection />
        <TooltipSection />
        <TabsSection />
        <Section title="ToggleGroup">
          <p>
            Based on Radio Group component from Headless ui,{" "}
            <a
              className="text-surface-primary-main hover:underline"
              href="https://headlessui.com/react/radio-group"
            >
              check their docs
            </a>
            .
          </p>
          <div className="flex items-center space-x-5 divide-x divide-surface-surface-2">
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
          </div>
          <div>Selected: {slipage}</div>
        </Section>

        <Section title="Tag">
          <div className="flex space-x-6">
            {TagColorSchemes.map(color => (
              <Fragment key={color}>
                <Tag colorScheme={color as TagColorSchemeProp} size="sm">
                  Tag
                </Tag>
                <Tag colorScheme={color as TagColorSchemeProp}>Tag</Tag>
              </Fragment>
            ))}
          </div>
        </Section>
        <Section title="Input">
          <div className="flex flex-col space-y-4 w-[200px]">
            <Input
              label="Email"
              type="email"
              id="email"
              message="This is a message"
              placeholder="Input email here"
            />
            <Input
              label="Solid"
              type="email"
              id="email"
              placeholder="Input email here"
              variant="solid"
            />
            <Input
              label="Pastel"
              type="email"
              id="email"
              placeholder="Input email here"
              variant="pastel"
            />
            <Input
              label="Ghost"
              type="email"
              id="email"
              placeholder="Input email here"
              variant="ghost"
            />
            <Input
              label="Large (lg)"
              type="email"
              id="email"
              placeholder="Input email here"
              leftIcon="search"
              rightIcon="chevron-down"
              size="lg"
            />
            <Input
              label="Medium (md) - default"
              type="email"
              id="email"
              placeholder="Input email here"
              leftIcon="search"
              rightIcon="chevron-down"
              size="md"
            />
            <Input
              label="Small (sm)"
              type="email"
              id="email"
              placeholder="Input email here"
              leftIcon="search"
              rightIcon="chevron-down"
              size="sm"
            />
            <Input
              label="Disabled"
              type="email"
              id="email-2"
              disabled
              message="This is a message"
              placeholder="Input email here"
            />
            <Input
              label="With error"
              type="email"
              id="email-3"
              message="There is an error"
              placeholder="Input email here"
              isInvalid={true}
            />
          </div>
        </Section>
        <Section title="Icons">
          <div className="flex flex-wrap space-x-4 space-y-2 md:space-y-0">
            {Object.keys(iconMap).map(iconName => (
              <div
                className="flex flex-col items-center space-y-2"
                key={iconName}
              >
                <Icon name={iconName as IconName} size={24} />
                <div className="p-1 rounded-lg bg-surface-75">
                  <p>{iconName}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Logos">
          <div className="space-y-4">
            <div className="flex space-x-2">
              {logoList.map((iconBadge, i) => (
                <Logo
                  src="https://assets.smold.app/api/token/100/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/logo-128.png"
                  alt="xdai token"
                  {...iconBadge}
                  key={i}
                />
              ))}
            </div>
            {logoPairList.map((row, i) => (
              <div key={i} className="flex space-x-2">
                {row.map((iconBadge, j) => (
                  <LogoPair
                    logoASrc="https://assets.smold.app/api/token/100/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/logo-128.png"
                    logoBSrc="https://assets.smold.app/api/token/1/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo-128.png"
                    alt="xdai token"
                    {...iconBadge}
                    key={j}
                  />
                ))}
              </div>
            ))}
          </div>
        </Section>
        <Section title="Font sizes">
          <div className="space-y-2">
            <p>
              9. <span className="text-3xl">Font size 3xl</span>
            </p>
            <p>
              8. <span className="text-2xl">Font size 2xl</span>
            </p>
            <p>
              7. <span className="text-xl">Font size xl</span>
            </p>
            <p>
              6. <span className="text-lg">Font size lg</span>
            </p>
            <p>
              5. <span className="text-md">Font size md</span>
            </p>
            <p>
              4. <span className="text-base">Font size base</span>
            </p>
            <p>
              3. <span className="text-sm">Font size sm</span>
            </p>
            <p>
              2. <span className="text-xs">Font size xs</span>
            </p>
            <p>
              1. <span className="text-2xs">Font size 2xs</span>
            </p>
          </div>
        </Section>
        <Section title="Box Shadows">
          <div className="space-y-2">
            <div className="bg-surface-disabled-low-em rounded-16 shadow-1 w-[900px] h-[600px]">
              <div className="bg-surface-disabled-med-em rounded-16 shadow-2 w-[800px] h-[500px]">
                <div className="bg-surface-disabled-high-em rounded-16 shadow-3 w-[700px] h-[400px]">
                  <div className="bg-surface-disabled-high-em rounded-16 shadow-4 w-[600px] h-[300px]">
                    <div className="bg-surface-disabled-high-em rounded-16 shadow-5 w-[500px] h-[200px]">
                      <div className="bg-surface-disabled-high-em rounded-16 shadow-6 w-[400px] h-[100px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <ColorsSection />
        <ButtonLinkSection />
      </div>
    </main>
  );
}
