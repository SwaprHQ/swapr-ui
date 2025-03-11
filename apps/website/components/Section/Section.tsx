import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  title?: string;
}
export const Section = ({ children, title }: SectionProps) => (
  <section className="py-12 border-b">
    <h2 className="mb-4 text-2xl font-bold md:mb-6">{title}</h2>
    {children}
  </section>
);
