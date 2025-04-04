import { Card, Section } from "@/components";
import { Logo, LogoSizeProp, LogoPair, LogoPairVariant } from "@swapr/ui";

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

export const LogoSection = () => (
  <Section title="Logos" id="logos">
    <Card className="space-y-4">
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
    </Card>
  </Section>
);
