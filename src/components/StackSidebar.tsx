import type { Technology } from "../Types/type";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-slate-950">Your Stack</h2>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">
          {stack.length} Selected
        </span>
      </div>

      {stack.length > 0 && (
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onRemoveAll}
            className="text-xs font-bold text-red-500 transition-colors hover:text-red-700"
          >
            Remove All
          </button>
        </div>
      )}

      {stack.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center">
          <p className="text-sm font-medium text-slate-600">
            Your stack is empty
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
            >
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="h-9 w-9 object-contain"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold text-slate-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-slate-500">{technology.category}</p>
              </div>

              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
