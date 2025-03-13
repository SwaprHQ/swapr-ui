import { Section, SelectProp, Card } from "@/components";
import {
  Button,
  ButtonLink,
  ButtonLinkProps,
  ButtonProps,
  ButtonSize,
  ButtonWidth,
} from "@swapr/ui";
import { Fragment, PropsWithChildren, useState } from "react";

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

const getMainBtnCombos = (
  children: string = "Button"
): Array<ButtonListProps> => [
  ...getBaseBtnCombos(children),
  { children, variant: "neutral" },
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

const regularBtnCombos: Array<ButtonListProps | ButtonLinkListProps> =
  getMainBtnCombos();
const successBtnCombos: Array<ButtonListProps | ButtonLinkListProps> =
  extendBtnCombos(getBaseBtnCombos(), { colorScheme: "success" });
const dangerBtnCombos: Array<ButtonListProps | ButtonLinkListProps> =
  extendBtnCombos(getBaseBtnCombos(), { colorScheme: "danger" });

const buttonsList: {
  headers: Array<string>;
  comboNames: Array<string>;
  combos: Array<Array<ButtonListProps | ButtonLinkListProps>>;
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
  comboNames: ["main", "success", "danger"],
  combos: [regularBtnCombos, successBtnCombos, dangerBtnCombos],
};

export const ButtonsSections = () => (
  <>
    <ButtonsSection component={Button} btnList={buttonsList}>
      Buttons
    </ButtonsSection>
    <ButtonsSection component={ButtonLink} btnList={buttonsList}>
      ButtonLinks
    </ButtonsSection>
  </>
);

const ButtonsSection = ({
  children,
  btnList,
  component,
}: ButtonSectionProps) => {
  const Component = component;
  const [size, setSize] = useState<ButtonSize>("md");
  const [width, setWidth] = useState<ButtonWidth>("normal");

  return (
    <Section title={children?.toString()}>
      <div className="flex mb-4 space-x-3">
        <SelectProp
          name="btnSize"
          title="size"
          value={size}
          set={setSize}
          options={[
            { value: "xs", label: "xs" },
            { value: "sm", label: "sm" },
            { value: "md", label: "md" },
            { value: "lg", label: "lg" },
            { value: "xl", label: "xl" },
          ]}
        />
        <SelectProp
          name="btnWitdh"
          title="width"
          value={width}
          set={setWidth}
          options={[
            { value: "normal", label: "normal" },
            { value: "fit", label: "fit" },
            { value: "full", label: "full" },
          ]}
        />
      </div>

      <Card>
        <div className="hidden grid-cols-11 gap-2 mb-3 lg:grid">
          <div className="flex-col hidden text-xs divide-y lg:flex text-text-low-em">
            <div className="text-right">variant</div>
            <div>colorScheme</div>
          </div>
          {btnList.headers.map((header, colIndex) => (
            <div
              key={colIndex}
              className="col-span-1 text-sm text-center text-text-med-em"
            >
              {header}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-10 gap-2">
          {btnList.comboNames.map((combName, rowIndex) => (
            <Fragment key={rowIndex}>
              <div className="items-center hidden col-span-1 p-2 text-xs font-semibold text-center lowercase bg-gray-200 lg:flex">
                {combName}
              </div>
              <div className="col-span-9">
                <div className="grid gap-4 lg:grid-cols-10">
                  {btnList.combos[rowIndex].map((button, colIndex) => {
                    return (
                      <Component
                        {...button}
                        size={size}
                        width={width}
                        key={colIndex}
                      />
                    );
                  })}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </Card>
    </Section>
  );
};

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

interface ButtonListProps {
  children: string;
  disabled?: boolean;
  active?: boolean;
  variant?: ButtonProps["variant"];
  colorScheme?: ButtonProps["colorScheme"];
}

interface ButtonLinkListProps extends ButtonListProps {
  href: string;
  as?: any;
}
