import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Database,
  FileCheck2,
  Globe2,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type ArchitectureDiagramProps = {
  mode?: "record" | "test";
};

export default function ArchitectureDiagram({
  mode = "record",
}: ArchitectureDiagramProps) {
  const isRecord = mode === "record";

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] shadow-sm">
      {/* Header */}
      <div className="border-b border-[var(--border)] px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-[var(--text)]">
              {isRecord ? "Recording flow" : "Replay flow"}
            </div>

            <div className="mt-1 text-xs text-[var(--text-muted)]">
              {isRecord
                ? "How Keploy captures your real API interaction"
                : "How Keploy replays the recorded test with mocks"}
            </div>
          </div>

          <span className="rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1 text-xs font-medium text-[var(--orange)]">
            {isRecord ? "record" : "test"}
          </span>
        </div>
      </div>

      {/* Diagram */}
      <div className="p-5 sm:p-7">
        {isRecord ? <RecordFlow /> : <TestFlow />}
      </div>
    </div>
  );
}

function RecordFlow() {
  return (
    <div className="flex flex-col items-center gap-3">
      <DiagramNode
        icon={Globe2}
        title="HTTP client"
        description="curl / browser"
      />

      <VerticalArrow />

      <DiagramNode
        icon={ShieldCheck}
        title="Keploy"
        description="observes the request"
        highlighted
      />

      <HorizontalFlow />

      <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2">
        <DiagramNode
          icon={Server}
          title="Go + Echo"
          description="handles the API request"
        />

        <DiagramNode
          icon={Database}
          title="PostgreSQL"
          description="application dependency"
        />
      </div>

      <VerticalArrow />

      <DiagramNode
        icon={FileCheck2}
        title="Recorded test case + mock"
        description="stored under the keploy/ directory"
        highlighted
      />
    </div>
  );
}

function TestFlow() {
  return (
    <div className="flex flex-col items-center gap-3">
      <DiagramNode
        icon={FileCheck2}
        title="Recorded test case"
        description="request + expected response"
      />

      <VerticalArrow />

      <DiagramNode
        icon={ShieldCheck}
        title="Keploy"
        description="replays the interaction"
        highlighted
      />

      <HorizontalFlow />

      <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2">
        <DiagramNode
          icon={Server}
          title="Go + Echo"
          description="runs the application"
        />

        <DiagramNode
          icon={Database}
          title="PostgreSQL mock"
          description="returns recorded dependency data"
        />
      </div>

      <VerticalArrow />

      <DiagramNode
        icon={CheckCircle2}
        title="Response comparison"
        description="actual response vs expected response"
        highlighted
      />
    </div>
  );
}

function DiagramNode({
  icon: Icon,
  title,
  description,
  highlighted = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex w-full max-w-xl items-center gap-3 rounded-xl border p-4 ${
        highlighted
          ? "border-[var(--callout-border)] bg-[var(--callout-bg)]"
          : "border-[var(--border)] bg-[var(--muted)]"
      }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
          highlighted
            ? "border-[var(--callout-border)] bg-[var(--card-bg)]"
            : "border-[var(--border)] bg-[var(--card-bg)]"
        }`}
      >
        <Icon
          size={17}
          className="text-[var(--orange)]"
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0">
        <div className="text-sm font-semibold text-[var(--text)]">
          {title}
        </div>

        <div className="mt-0.5 text-xs text-[var(--text-muted)]">
          {description}
        </div>
      </div>
    </div>
  );
}

function VerticalArrow() {
  return (
    <ArrowDown
      size={18}
      className="text-[var(--orange)]"
      aria-hidden="true"
    />
  );
}

function HorizontalFlow() {
  return (
    <div className="hidden h-5 w-full items-center justify-center sm:flex">
      <ArrowRight
        size={18}
        className="text-[var(--border)]"
        aria-hidden="true"
      />
    </div>
  );
}