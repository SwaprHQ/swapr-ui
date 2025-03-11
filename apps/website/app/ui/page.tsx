"use client";

import { Fragment, PropsWithChildren, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";

import {
  Button,
  ButtonProps,
  ChipButton,
  ChipButtonProps,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogBody,
  Icon,
  IconBadge,
  IconBadgeColorSchemeProp,
  IconBadgeVariantProp,
  IconButton,
  IconName,
  iconMap,
  Input,
  Logo,
  LogoSizeProp,
  LogoPair,
  LogoPairVariant,
  TabBody,
  TabGroup,
  TabHeader,
  TabPanel,
  TabStyled,
  Tag,
  TagColorSchemeProp,
  ToggleGroup,
  ToggleGroupOption,
  ToggleOptionSizeProp,
  toast,
  errorToast,
  successToast,
  warningToast,
  Dialog,
  DialogClose,
  DialogFooter,
  ButtonLink,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  DialogTitle,
  DialogDescription,
  VisuallyHidden,
  ButtonLinkProps,
} from "@swapr/ui";

import { PopoverSection, Section, ThemeSwitch } from "@/components";

const colorsKeysBanList = ["transparent", "inherit"];
const fullConfig = resolveConfig(tailwindConfig);

function extractStringValuesFromObject(object: any): string[] {
  const keys = [];

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];

      if (typeof value === "string") {
        keys.push(key);
      } else if (typeof value === "object" && value) {
        const nestedKeys = extractStringValuesFromObject(value);
        keys.push(...nestedKeys.map(nestedKey => `${key}-${nestedKey}`));
      }
    }
  }

  return keys;
}

const tailwindColors: { [key: string]: Array<string> } = Object.keys(
  fullConfig.theme.colors
).reduce(
  (acc, key) =>
    colorsKeysBanList.some(colorName => colorName === key)
      ? acc
      : {
          ...acc,
          [key]: extractStringValuesFromObject(fullConfig.theme.colors[key]),
        },
  {}
);

interface ButtonListProps {
  children: string;
  disabled?: boolean;
  active?: boolean;
  variant?: ButtonProps["variant"];
  colorScheme?: ButtonProps["colorScheme"];
}

interface ButtonLinkListProps {
  active?: boolean;
  as?: any;
  children: string;
  colorScheme?: ButtonProps["colorScheme"];
  disabled?: boolean;
  variant?: ButtonProps["variant"];
}

const getMainBtnCombos = (
  children: string = "Button"
): Array<ButtonListProps> => [
  ...getBaseBtnCombos(children),
  { children, variant: "neutral" },
];

const getBaseBtnCombos = (
  children: string = "Button"
): Array<ButtonListProps> => [
  { children },
  { children, variant: "secondary" },
  { children, variant: "light" },
  { children, variant: "tertiary" },
  { children, variant: "ghost" },
  { children, active: true },
  { children, disabled: true },
  { children, variant: "ghost", disabled: true },
];

type ExtendedButtonProps = Omit<ButtonListProps, "children">;
type ExtendedButtonLinkProps = Omit<ButtonLinkListProps, "children">;
const extendBtnCombos = (
  btnPropsList: Array<ButtonListProps>,
  newProp: ExtendedButtonProps | ExtendedButtonLinkProps
): Array<ButtonListProps> =>
  btnPropsList.map(buttonProps => ({
    ...buttonProps,
    ...newProp,
  }));

const regularBtnCombos: Array<ButtonLinkListProps> = getMainBtnCombos();
const successBtnCombos: Array<ButtonLinkListProps> = extendBtnCombos(
  getBaseBtnCombos(),
  { colorScheme: "success" }
);
const dangerBtnCombos: Array<ButtonLinkListProps> = extendBtnCombos(
  getBaseBtnCombos(),
  { colorScheme: "danger" }
);

const buttonsList: {
  headers: Array<string>;
  comboNames: Array<string>;
  combos: Array<Array<ButtonLinkListProps>>;
} = {
  headers: [
    "primary",
    "secondary",
    "light",
    "tertiary",
    "Ghost",
    "Active",
    "Disabled",
    "Disabled 👻",
    "neutral",
  ],
  comboNames: ["Main", "Success", "Danger"],
  combos: [regularBtnCombos, successBtnCombos, dangerBtnCombos],
};

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

const ChipBittonChildren = (
  <>
    <Icon name="plus" />
    <span>Chip Button</span>
    <Icon name="cross" />
  </>
);

const toggleGroupOptionSizes: ToggleOptionSizeProp[] = ["xs", "sm", "md", "lg"];

const chipButtonList: Array<Array<ChipButtonProps>> = [
  [
    {
      children: ChipBittonChildren,
    },
    { size: "sm", children: ChipBittonChildren },
    { children: ChipBittonChildren, active: true },
    { children: ChipBittonChildren, disabled: true },
  ],
  [
    { colorScheme: "primary", children: ChipBittonChildren },
    { colorScheme: "primary", size: "sm", children: ChipBittonChildren },
    { colorScheme: "primary", children: ChipBittonChildren, active: true },
    { colorScheme: "primary", children: ChipBittonChildren, disabled: true },
  ],
];

const TagColorSchemes = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "success",
  "danger",
  "info",
];

interface IconListProps {
  name: IconName;
  disabled?: boolean;
  active?: boolean;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

const iconButtonList: Array<Array<IconListProps>> = [
  [
    { name: "add-fill", size: "xs" },
    { name: "add-fill", disabled: true, size: "xs" },
    { name: "add-fill", active: true, size: "xs" },
    { name: "add-fill", variant: "primary", size: "xs" },
    { name: "add-fill", variant: "tertiary", size: "xs" },
    { name: "add-fill", variant: "ghost", size: "xs" },
  ],
  [
    { name: "add-fill", size: "sm" },
    { name: "add-fill", disabled: true, size: "sm" },
    { name: "add-fill", active: true, size: "sm" },
    { name: "add-fill", variant: "primary", size: "sm" },
    { name: "add-fill", variant: "tertiary", size: "sm" },
    { name: "add-fill", variant: "ghost", size: "sm" },
  ],
  [
    { name: "add-fill" },
    { name: "add-fill", disabled: true },
    { name: "add-fill", active: true },
    { name: "add-fill", variant: "primary" },
    { name: "add-fill", variant: "tertiary" },
    { name: "add-fill", variant: "ghost" },
  ],
  [
    { name: "add-fill", size: "lg" },
    { name: "add-fill", disabled: true, size: "lg" },
    { name: "add-fill", active: true, size: "lg" },
    { name: "add-fill", variant: "primary", size: "lg" },
    { name: "add-fill", variant: "tertiary", size: "lg" },
    { name: "add-fill", variant: "ghost", size: "lg" },
  ],
];

export default function UI() {
  const [openModal, setOpenModal] = useState(false);
  const [slipage, setSlipage] = useState("auto"); // radioGroup eg

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <main className="px-5 mx-auto my-10 max-w-screen-xl overflow-auto">
      <ThemeSwitch />
      <div className="pb-12 my-12 space-y-5 divide-y divide-outline-primary-low-em">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Swapr UI</h1>
          <p>A set of components to build apps faster.</p>
        </div>
        <ButtonsSection component={Button} btnList={buttonsList}>
          Buttons
        </ButtonsSection>
        <ButtonsSection component={ButtonLink} btnList={buttonsList}>
          ButtonLinks
        </ButtonsSection>
        <Section>
          <h2 className="text-2xl font-semibold">Chip Buttons</h2>
          {chipButtonList.map((row, i) => (
            <div key={i} className="flex space-x-2">
              {row.map((button, j) => (
                <ChipButton {...button} key={j} />
              ))}
            </div>
          ))}
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Icon Buttons</h2>
          {iconButtonList.map((row, i) => (
            <div key={i} className="flex space-x-2">
              {row.map((button, j) => (
                <IconButton {...button} key={j} />
              ))}
            </div>
          ))}
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Toast</h2>
          <div className="flex space-x-4">
            <Button onClick={() => toast({ children: "Default Toast" })}>
              Open Default Toast
            </Button>
            <Button
              colorScheme="danger"
              onClick={() =>
                errorToast({ children: "Error Toast", colorScheme: "error" })
              }
            >
              Open Error Toast
            </Button>
            <Button
              colorScheme="success"
              onClick={() =>
                successToast({
                  children: "Success Toast",
                  colorScheme: "success",
                })
              }
            >
              Open Success Toast
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                warningToast({
                  children: "Warning Toast",
                  colorScheme: "warning",
                })
              }
            >
              Open Warning Toast
            </Button>
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Modal</h2>
          <div className="flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open</Button>
              </DialogTrigger>
              <DialogContent append="bottom">
                <DialogHeader>
                  <DialogTitle>Select a token</DialogTitle>
                </DialogHeader>
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
                <Button>Open</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader size="xl" className="text-center">
                  <DialogClose>
                    <Icon name="arrow-left" />
                  </DialogClose>
                  <DialogTitle>Confirm Swap</DialogTitle>
                </DialogHeader>
                <DialogBody>
                  This action cannot be undone. This will permanently delete as
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
                    variant="secondary"
                    onClick={closeModal}
                  >
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Section>
        <PopoverSection />
        <Section>
          <h2 className="text-2xl font-semibold">Tooltips</h2>
          <div className="grid items-center space-y-2.5 lg:space-y-0 lg:grid-cols-2 lg:gap-4">
            <div className="hidden uppercase text-xs lg:block font-semibold bg-gray-200 text-center">
              Basic
            </div>
            <div className="hidden uppercase text-xs lg:block font-semibold bg-gray-200 text-center">
              Complex
            </div>
            <div className="flex items-center justify-center">
              <TooltipProvider delayDuration={500}>
                <Tooltip>
                  <TooltipTrigger>Hover here</TooltipTrigger>
                  <TooltipContent side="right">This is a sample</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center justify-center">
              <TooltipProvider delayDuration={500}>
                <Tooltip>
                  <TooltipTrigger>Hover here</TooltipTrigger>
                  <TooltipContent
                    side="right"
                    align="center"
                    sideOffset={8}
                    className="w-60"
                  >
                    <p>
                      Currently, gas prices are high. It is preferable to
                      perform the transaction after some time.
                    </p>
                    <div className="flex mt-4 justify-between">
                      <Button variant="secondary">Learn more</Button>
                      <Button>Got it</Button>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold">Tabs</h2>
          <div className="space-y-5">
            <p>
              Tabs is based on{" "}
              <a
                className="text-text-primary-main hover:underline"
                href="https://headlessui.com/react/tabs"
              >
                headlessui tabs
              </a>
              , check out their docs for usage.
            </p>
            <div className="w-full max-w-md px-2 sm:px-0">
              <TabGroup
                onChange={(index: number) =>
                  console.log("Changed selected tab to:", index)
                }
              >
                <TabHeader>
                  <TabStyled>All bets</TabStyled>
                  <TabStyled>
                    Active
                    <div className="bg-surface-surface-0 text-2xs border border-outline-low-em rounded-6 p-1 px-1.5 ml-2">
                      01
                    </div>
                  </TabStyled>
                  <TabStyled>Unredeemed</TabStyled>
                  <TabStyled>Complete</TabStyled>
                </TabHeader>
                <TabBody className="mt-2">
                  <TabPanel>
                    <div className="bg-surface-primary-accent-1 p-5 rounded-4">
                      All bets
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="bg-surface-primary-accent-1 p-5 rounded-4">
                      Active
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="bg-surface-danger-accent-1 p-5 rounded-4">
                      Unredeemed
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="bg-surface-warning-accent-1 p-5 rounded-4">
                      Complete
                    </div>
                  </TabPanel>
                </TabBody>
              </TabGroup>
            </div>
          </div>
        </Section>
        <Section>
          <div className="text-2xl font-semibold">ToggleGroup</div>
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
          <div className="divide-x divide-surface-surface-2 flex items-center space-x-5">
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
        <Section>
          <h2 className="text-2xl font-semibold">Modal</h2>
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
                  <div className="flex w-full flex-col items-center space-y-12">
                    <>
                      <IconBadge name="tick" colorScheme="success" />
                      <div className="flex flex-col items-center space-y-2">
                        <p className="text-2xl font-semibold">
                          Transaction successful!
                        </p>
                        <p className="text-center text-md font-semibold text-text-low-em">
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
        <Section>
          <h2 className="text-2xl font-semibold">Tag</h2>
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
        <Section>
          <h2 className="text-2xl font-semibold">Input</h2>
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
        <Section>
          <h2 className="text-2xl font-semibold">Icons</h2>
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
              <div key={i} className="flex space-x-4 items-center">
                {row.map((iconBadge, j) => (
                  <IconBadge name="bar-graph-fill" {...iconBadge} key={j} />
                ))}
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Logos</h2>
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
        <Section>
          <h2 className="text-2xl font-semibold">Font sizes</h2>
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
        <Section>
          <h2 className="text-2xl font-semibold">Box Shadows</h2>
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
        <Section>
          <h2 className="text-2xl font-semibold">Colors</h2>
          <div className="space-y-3 divide-y divide-outline-primary-base-em">
            {Object.keys(tailwindColors).map(key => (
              <div key={key} className="space-y-2.5 py-2">
                <p className="text-xl capitalize">{key}</p>
                <div className="space-y-2 lg:grid lg:grid-cols-3">
                  {tailwindColors[key].map(color => (
                    <div key={color} className="flex space-x-4">
                      <div
                        className={`bg-${key}-${color} w-20 h-10 rounded-6`}
                      />
                      <p>{`${key}-${color}`}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
interface ButtonSectionProps extends PropsWithChildren {
  component:
    | React.ComponentType<ButtonProps>
    | React.ComponentType<ButtonLinkProps<any>>;
  btnList: {
    headers: Array<string>;
    comboNames: Array<string>;
    combos: Array<Array<ButtonListProps | ButtonLinkListProps>>;
  };
}

const ButtonsSection = ({
  children,
  btnList,
  component,
}: ButtonSectionProps) => {
  const Component = component;
  return (
    <Section>
      <h2 className="text-2xl font-semibold">{children}</h2>
      <div className="">
        <div className="lg:grid hidden grid-cols-11 gap-2 mb-3">
          <div className="text-xs hidden lg:flex flex-col divide-y text-text-low-em">
            <div className="text-right">variant</div>
            <div>colorScheme</div>
          </div>
          {btnList.headers.map((header, colIndex) => (
            <div
              key={colIndex}
              className="col-span-1 text-center text-sm text-text-med-em"
            >
              {header}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-10 gap-2">
          {btnList.comboNames.map((combName, rowIndex) => (
            <Fragment key={rowIndex}>
              <div className="hidden lowercase lg:flex items-center text-xs font-semibold bg-gray-200 p-2 text-center col-span-1">
                {combName}
              </div>
              <div className="col-span-9">
                <div className="grid lg:grid-cols-10 gap-4">
                  {btnList.combos[rowIndex].map((button, colIndex) => {
                    return <Component {...button} key={colIndex} />;
                  })}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};
