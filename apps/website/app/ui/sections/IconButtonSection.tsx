import { Section } from "@/components";
import { ButtonProps, IconButton, IconName } from "@swapr/ui";

interface IconListProps {
  name: IconName;
  disabled?: boolean;
  active?: boolean;
  variant?: ButtonProps["variant"];
  colorScheme?: ButtonProps["colorScheme"];
  size?: ButtonProps["size"];
}

const iconButtonList: Array<Array<IconListProps>> = [
  [
    { name: "activity", variant: "primary", size: "xs" },
    { name: "lock", variant: "light", size: "sm" },
    { name: "download", variant: "secondary", size: "md" },
    { name: "bitcoin", variant: "tertiary", size: "lg" },
    { name: "add-fill", variant: "ghost", size: "lg" },
  ],
  [
    { name: "lock", disabled: true },
    { name: "user-fill", active: true },
    { name: "farm", colorScheme: "success" },
  ],
];

export const IconButtonSection = () => {
  return (
    <Section title="Icon Buttons">
      <p className="mb-6">
        Icons support all the buttons props, like color scheme and variant.
      </p>
      <div className="space-y-2">
        {iconButtonList.map((row, i) => (
          <div key={i} className="flex space-x-2">
            {row.map((button, j) => (
              <IconButton colorScheme="main" {...button} key={j} />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};
