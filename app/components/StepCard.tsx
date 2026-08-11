import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type StepCardProps = {
  step: number;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function StepCard({
  step,
  title,
  description,
  children,
}: StepCardProps) {
  return (
    <section className="my-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-sm">
      <div className="flex gap-4">
        {/* Step number */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--orange)] text-sm font-bold text-white shadow-sm">
          {step}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="m-0 text-lg font-semibold text-[var(--text)]">
              {title}
            </h3>

            <ArrowRight
              size={15}
              className="hidden text-[var(--orange)] sm:block"
              aria-hidden="true"
            />
          </div>

          {description && (
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              {description}
            </p>
          )}

          {children && (
            <div className="mt-5">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}