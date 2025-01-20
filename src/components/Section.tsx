interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 md:px-8 ${className}`}
    >
      {children}
    </section>
  );
}