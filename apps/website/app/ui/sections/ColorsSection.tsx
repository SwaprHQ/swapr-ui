import { Card, Section } from "@/components";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";

const colorsKeysBanList = [
  "transparent",
  "inherit",
  "elevation-shadow", // todo: fix appearing 20 versions when is just a color
  "transparent_inverse", // todo: fix appearing 20 versions when is just a color
];
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

export const ColorsSection = () => (
  <Section title="Colors">
    <div className="space-y-6 divide-y divide-surface-surface-smoke-gray">
      {Object.keys(tailwindColors).map(key => (
        <Card key={key} className="">
          <p className="pb-12 text-lg font-semibold capitalize">{key}</p>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
            {tailwindColors[key].map(color => (
              <div key={color} className="flex space-x-4">
                <div
                  className={`bg-${key}-${color} w-20 h-10 rounded-6 border border-surface-surface-2`}
                />
                <p className="text-sm text-text-med-em">{`${key}-${color}`}</p>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </Section>
);
