import { Card, Section } from "@/components";

const sizes = [
  { size: "3xl", label: "Font size 3xl" },
  { size: "2xl", label: "Font size 2xl" },
  { size: "xl", label: "Font size xl" },
  { size: "lg", label: "Font size lg" },
  { size: "md", label: "Font size md" },
  { size: "base", label: "Font size base" },
  { size: "sm", label: "Font size sm" },
  { size: "xs", label: "Font size xs" },
  { size: "2xs", label: "Font size 2xs" },
];

export const FontsizeSection = () => {
  return (
    <Section title="Font sizes" id="fonts">
      <Card className="space-y-2">
        {sizes.map((size, index) => (
          <p key={size.size}>
            {9 - index}.{" "}
            <span className={`text-${size.size}`}>{size.label}</span>
          </p>
        ))}
      </Card>
    </Section>
  );
};
