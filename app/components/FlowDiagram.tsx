export default function FlowDiagram() {
  return (
    <div className="my-8">
      <div className="grid gap-3 md:grid-cols-3">
        {/* Step 1 */}
        <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              01
            </span>

            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
              Record
            </span>
          </div>

          <h3 className="font-semibold text-slate-900 dark:text-white">
            Real API traffic
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            You send a real request to your Go application while Keploy
            observes the interaction.
          </p>

          <div className="mt-4 rounded-lg bg-slate-50 px-3 py-2 font-mono text-xs text-slate-600 dark:bg-slate-950 dark:text-slate-400">
            POST /url
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              02
            </span>

            <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-600 dark:bg-violet-950/50 dark:text-violet-400">
              Capture
            </span>
          </div>

          <h3 className="font-semibold text-slate-900 dark:text-white">
            Tests + mocks
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Keploy turns the observed request and dependency interactions into
            reusable testcases and mocks.
          </p>

          <div className="mt-4 flex gap-2">
            <span className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-xs text-slate-600 dark:bg-slate-950 dark:text-slate-400">
              test.yaml
            </span>

            <span className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-xs text-slate-600 dark:bg-slate-950 dark:text-slate-400">
              mocks.yaml
            </span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/20">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-500">
              03
            </span>

            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              Replay
            </span>
          </div>

          <h3 className="font-semibold text-slate-900 dark:text-white">
            Regression test
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Keploy replays the recorded workflow and checks whether the
            application's behaviour still matches.
          </p>

          <div className="mt-4 rounded-lg bg-emerald-100 px-3 py-2 font-mono text-xs text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            3/3 passed ✓
          </div>
        </div>
      </div>

      {/* Connecting line */}
      <div className="mt-4 hidden items-center justify-center gap-2 text-xs text-slate-400 md:flex">
        <span>real request</span>
        <span>→</span>
        <span>captured behaviour</span>
        <span>→</span>
        <span>repeatable test</span>
      </div>
    </div>
  );
}