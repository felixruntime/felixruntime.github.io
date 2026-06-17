import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 px-4 md:px-8", className)}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
