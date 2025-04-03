import { Card, Section } from "@/components";
import { Icon, iconMap, IconName } from "@swapr/ui";

export const IconSection = () => (
  <Section title="Icons" id="icons">
    <Card className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
      {Object.keys(iconMap).map(iconName => (
        <div className="flex flex-col items-center space-y-2" key={iconName}>
          <Icon name={iconName as IconName} size={24} />
          <div className="p-1 rounded-lg bg-surface-75">
            <p className="text-xs text-text-med-em">{iconName}</p>
          </div>
        </div>
      ))}
    </Card>
  </Section>
);
