import { ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <a
          href="/"
          aria-label="Keploy Go Tutorial home"
          className="flex items-center gap-3 no-underline"
        >
          <div className="flex h-9 w-auto items-center">
  <img
    src="/keploy_logo.svg"
    alt="Keploy"
    className="h-8 w-auto"
  />
</div>

        </a>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/keploy/samples-go"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-muted)] no-underline transition hover:bg-[var(--muted)] hover:text-[var(--text)] sm:flex"
          >
            <span>Sample repo</span>
            <ExternalLink size={13} />
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}