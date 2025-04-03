import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  title?: string;
  id?: string;
}
export const Section = ({ children, title, id }: SectionProps) => (
  <section className="py-12 border-b" id={id}>
    <h2 className="mb-4 text-2xl font-bold md:mb-6">{title}</h2>
    {children}
  </section>
);
