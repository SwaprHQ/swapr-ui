"use client";

import { Fragment, useState } from "react";

import {
  Button,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogBody,
  Icon,
  IconBadge,
  IconBadgeColorSchemeProp,
  IconBadgeVariantProp,
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
  Dialog,
  DialogClose,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  VisuallyHidden,
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

interface IconBadgeListProps {
  colorScheme?: IconBadgeColorSchemeProp;
  variant?: IconBadgeVariantProp;
  size?: "lg";
}

const iconBadgeList: Array<Array<IconBadgeListProps>> = [
  [
    { size: "lg" },
    {},
    { size: "lg", variant: "pastel" },
    { variant: "pastel" },
    { size: "lg", variant: "outline" },
    { variant: "outline" },
    { size: "lg", variant: "ghost" },
    { variant: "ghost" },
  ],
  [
    { size: "lg", colorScheme: "secondary" },
    { colorScheme: "secondary" },
    { size: "lg", variant: "pastel", colorScheme: "secondary" },
    { variant: "pastel", colorScheme: "secondary" },
    { size: "lg", variant: "outline", colorScheme: "secondary" },
    { variant: "outline", colorScheme: "secondary" },
    { size: "lg", variant: "ghost", colorScheme: "secondary" },
    { variant: "ghost", colorScheme: "secondary" },
  ],
  [
    { size: "lg", colorScheme: "danger" },
    { colorScheme: "danger" },
    { size: "lg", variant: "pastel", colorScheme: "danger" },
    { variant: "pastel", colorScheme: "danger" },
    { size: "lg", variant: "outline", colorScheme: "danger" },
    { variant: "outline", colorScheme: "danger" },
    { size: "lg", variant: "ghost", colorScheme: "danger" },
    { variant: "ghost", colorScheme: "danger" },
  ],
  [
    { size: "lg", colorScheme: "success" },
    { colorScheme: "success" },
    { size: "lg", variant: "pastel", colorScheme: "success" },
    { variant: "pastel", colorScheme: "success" },
    { size: "lg", variant: "outline", colorScheme: "success" },
    { variant: "outline", colorScheme: "success" },
    { size: "lg", variant: "ghost", colorScheme: "success" },
    { variant: "ghost", colorScheme: "success" },
  ],
];

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
  const [openModal, setOpenModal] = useState(false);
  const [slipage, setSlipage] = useState("auto"); // radioGroup eg

  const closeModal = () => {
    setOpenModal(false);
  };

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
        <ModalSection />
        <ButtonSection />
        <IconButtonSection />
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
        <Section title="Modal">
          <div className="flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open basic</Button>
              </DialogTrigger>
              <DialogContent append="bottom">
                <DialogHeader>
                  <DialogTitle>Hi I'm a Modal title</DialogTitle>
                </DialogHeader>
                <VisuallyHidden asChild>
                  <DialogDescription className="px-4">
                    Here a really long text will be displayed.
                  </DialogDescription>
                </VisuallyHidden>
                <DialogBody>
                  <ul>
                    {Array(15)
                      .fill("")
                      .map((_, i) => (
                        <li key={i}>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </li>
                      ))}
                  </ul>
                </DialogBody>
              </DialogContent>
            </Dialog>
            <Dialog open={openModal} onOpenChange={setOpenModal}>
              <DialogTrigger asChild>
                <Button>Open modal with actions</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="flex items-center">
                  <DialogClose>
                    <Icon size={18} name="arrow-left" />
                  </DialogClose>
                  <DialogTitle>Confirm Tx</DialogTitle>
                </DialogHeader>
                <VisuallyHidden asChild>
                  <DialogDescription className="px-4">
                    Here we display a Modal with actions
                  </DialogDescription>
                </VisuallyHidden>
                <DialogBody>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogBody>
                <DialogFooter>
                  <Button
                    width="full"
                    colorScheme="main"
                    variant="primary"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    width="full"
                    colorScheme="success"
                    variant="primary"
                    onClick={closeModal}
                  >
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open success modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <VisuallyHidden asChild>
                    <DialogTitle className="px-4">
                      Transaction Modal
                    </DialogTitle>
                  </VisuallyHidden>
                </DialogHeader>
                <VisuallyHidden asChild>
                  <DialogDescription className="px-4">
                    Here we display a Transaction information
                  </DialogDescription>
                </VisuallyHidden>
                <DialogBody className="mx-auto mb-8 w-full max-w-fit space-y-2 md:mx-0 md:max-w-[496px]">
                  <div className="flex flex-col items-center w-full space-y-12">
                    <>
                      <IconBadge name="tick" colorScheme="success" />
                      <div className="flex flex-col items-center space-y-2">
                        <p className="text-2xl font-semibold">
                          Transaction successful!
                        </p>
                        <p className="font-semibold text-center text-md text-text-low-em">
                          The transaction has been completed.
                          <br />
                          You can close this window now.
                        </p>
                      </div>
                    </>
                  </div>
                </DialogBody>
                <DialogFooter>
                  <a
                    href="#"
                    target="_blank"
                    className="w-full"
                    rel="noopener noreferrer"
                  >
                    <Button
                      width="full"
                      colorScheme="main"
                      variant="primary"
                      size="lg"
                    >
                      <>
                        View in explorer <Icon name="arrow-top-right" />
                      </>
                    </Button>
                  </a>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
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
        <Section>
          <h2 className="text-2xl font-semibold">Icon Badges</h2>
          <div className="space-y-4">
            {iconBadgeList.map((row, i) => (
              <div key={i} className="flex items-center space-x-4">
                {row.map((iconBadge, j) => (
                  <IconBadge name="bar-graph-fill" {...iconBadge} key={j} />
                ))}
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
