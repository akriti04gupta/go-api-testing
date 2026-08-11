import type { ReactNode } from "react";
import {
  CheckCircle2,
  CircleAlert,
  Info,
  type LucideIcon,
} from "lucide-react";

type ResultType = "success" | "info" | "warning";

type ResultCardProps = {
  type?: ResultType;
  title: string;
  value?: string;
  description?: string;
  children?: ReactNode;
};

type ResultStyle = {
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
  border: string;
};

const styles: Record<ResultType, ResultStyle> = {
  success: {
    icon: CheckCircle2,
    iconColor: "text-[#6f9f5d]",
    iconBackground:
      "bg-[#edf6e9] border-[#cfe3c7] dark:bg-[#273421] dark:border-[#405438]",
    border: "border-[#d8e6d2] dark:border-[#405438]",
  },

  info: {
    icon: Info,
    iconColor: "text-[var(--orange)]",
    iconBackground:
      "bg-[var(--callout-bg)] border-[var(--callout-border)]",
    border: "border-[var(--border)]",
  },

  warning: {
    icon: CircleAlert,
    iconColor: "text-[#b86b18]",
    iconBackground:
      "bg-[#fff1d9] border-[#edcf9f] dark:bg-[#40301e] dark:border-[#6a4d2c]",
    border: "border-[#ead8c0] dark:border-[#5a4530]",
  },
};

export default function ResultCard({
  type = "success",
  title,
  value,
  description,
  children,
}: ResultCardProps) {
  const style = styles[type];
  const Icon = style.icon;

  return (
    <div
      className={`my-6 rounded-2xl border bg-[var(--card-bg)] p-5 shadow-sm ${style.border}`}
    >
      <div className="flex gap-4">
        {/* Status icon */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${style.iconBackground}`}
        >
          <Icon
            size={19}
            className={style.iconColor}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-[var(--text)]">
            {title}
          </div>

          {value && (
            <div className="mt-2 break-all font-mono text-sm font-medium text-[var(--orange)]">
              {value}
            </div>
          )}

          {description && (
            <p className="mt-2 mb-0 text-sm leading-6 text-[var(--text-muted)]">
              {description}
            </p>
          )}

          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </div>
  );
}