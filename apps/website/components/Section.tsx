interface SectionProps {
  title?: string;
  id?: string;
  children: React.ReactNode;
}
export const Section = ({ children, title, id }: SectionProps) => (
  <section
    className="py-12 border-b border-surface-surface-smoke-gray-em"
    id={id}
  >
    <h2 className="mb-4 text-[22px] font-bold md:mb-6">{title}</h2>
    {children}
  </section>
);
