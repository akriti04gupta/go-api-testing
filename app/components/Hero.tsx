export default function Hero() {
  return (
    <section className="relative mb-14 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card-bg)]">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--orange) 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--orange-light) 0%, transparent 70%)",
        }}
      />

      <div className="relative px-6 py-10 sm:px-10 sm:py-14">
        {/* Main heading */}
        <h1 className="!mb-5 !max-w-4xl !text-4xl !leading-[1.08] sm:!text-5xl lg:!text-[3.7rem]">
          From real API traffic
          <br />
          to automated tests.
        </h1>

        {/* Description */}
        <p className="!mb-7 !max-w-2xl !text-base sm:!text-lg">
          Turn real <strong>Go + Echo</strong> API interactions into repeatable
          tests with Keploy — including the PostgreSQL dependency behaviour
          your application relies on.
        </p>

        {/* CTA buttons */}
        <div className="mb-10 flex flex-wrap gap-3">
          <a
            href="#what-youll-build"
             className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-[var(--orange)] px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90 no-underline"
          >
            Start the tutorial
            <span aria-hidden="true">↓</span>
          </a>

          <a
            href="https://github.com/keploy/samples-go"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:bg-[var(--muted)]"
          >
            View sample repo
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Workflow */}
        <div className="grid gap-3 sm:grid-cols-3">
          <FlowCard
            number="01"
            title="Real traffic"
            description="Call your Go API like a normal client."
          />

          <FlowCard
            number="02"
            title="Keploy records"
            description="Capture API behaviour and dependencies."
            highlighted
          />

          <FlowCard
            number="03"
            title="Replay & verify"
            description="Turn the interaction into a repeatable test."
          />
        </div>
      </div>
    </section>
  );
}

function FlowCard({
  number,
  title,
  description,
  highlighted = false,
}: {
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 transition ${
        highlighted
          ? "border-[var(--callout-border)] bg-[var(--callout-bg)]"
          : "border-[var(--border)] bg-[var(--muted)]"
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-widest text-[var(--orange)]">
          {number}
        </span>

        {highlighted && (
          <span
            className="h-2 w-2 rounded-full bg-[var(--orange)]"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="text-sm font-semibold text-[var(--text)]">
        {title}
      </div>

      <div className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
        {description}
      </div>
    </div>
  );
}