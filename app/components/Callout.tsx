"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

type CalloutType = "info" | "tip" | "warning" | "error";

type CalloutProps = {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
};

type CalloutStyle = {
  icon: LucideIcon;
  label: string;
  container: string;
  iconContainer: string;
  iconColor: string;
  titleColor: string;
  textColor: string;
};

const styles: Record<CalloutType, CalloutStyle> = {
  info: {
    icon: Info,
    label: "Info",
    container:
      "border-[var(--border)] bg-[var(--muted)]",
    iconContainer:
      "bg-[var(--callout-bg)] border-[var(--callout-border)]",
    iconColor: "text-[var(--orange)]",
    titleColor: "text-[var(--text)]",
    textColor: "text-[var(--text-muted)]",
  },

  tip: {
    icon: Lightbulb,
    label: "Tip",
    container:
      "border-[var(--border)] bg-[var(--muted)]",
    iconContainer:
      "bg-[#fff3e8] border-[#ffd0b8] dark:bg-[#3a261d] dark:border-[#704532]",
    iconColor: "text-[var(--orange)]",
    titleColor: "text-[var(--text)]",
    textColor: "text-[var(--text-muted)]",
  },

  warning: {
    icon: AlertTriangle,
    label: "Warning",
    container:
      "border-[#ead8c0] bg-[#fffaf3] dark:border-[#5a4530] dark:bg-[#30261c]",
    iconContainer:
      "bg-[#fff1d9] border-[#edcf9f] dark:bg-[#40301e] dark:border-[#6a4d2c]",
    iconColor: "text-[#b86b18]",
    titleColor: "text-[var(--text)]",
    textColor: "text-[var(--text-muted)]",
  },

  error: {
    icon: AlertTriangle,
    label: "Error",
    container:
      "border-[#e8c8bd] bg-[#fff7f4] dark:border-[#603b31] dark:bg-[#321f1b]",
    iconContainer:
      "bg-[#ffe8df] border-[#efc1b1] dark:bg-[#43271f] dark:border-[#704136]",
    iconColor: "text-[#d64f2b]",
    titleColor: "text-[var(--text)]",
    textColor: "text-[var(--text-muted)]",
  },
};

export default function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  const style = styles[type];
  const Icon = style.icon;

  return (
    <aside
      role="note"
      className={`my-7 flex gap-4 rounded-2xl border p-5 shadow-sm ${style.container}`}
    >
      {/* Icon */}
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${style.iconContainer}`}
        aria-hidden="true"
      >
        <Icon size={18} className={style.iconColor} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center gap-2">
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${style.iconColor}`}
          >
            {style.label}
          </span>

          {title && (
            <>
              <span className="text-[var(--border)]">·</span>

              <span
                className={`font-semibold ${style.titleColor}`}
              >
                {title}
              </span>
            </>
          )}
        </div>

        <div
          className={`text-sm leading-6 ${style.textColor}`}
        >
          {children}
        </div>
      </div>
    </aside>
  );
}