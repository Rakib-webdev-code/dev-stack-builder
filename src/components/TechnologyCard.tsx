import type { Technology } from "../Types/type";

export interface TechnologyCardProps {
  technology: Technology;
}

export default function TechnologyCard({
  technology,
}: TechnologyCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
          {technology.badge}
        </span>
      </div>

      {/* Technology Info */}
      <div className="mt-5">
        <h3 className="text-xl font-bold text-slate-950">
          {technology.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {technology.description}
        </p>
      </div>

      {/* Meta Information */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {technology.category}
        </span>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
          {technology.difficulty}
        </span>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-slate-700">
          ⭐ {technology.rating}
        </span>

        <button
          type="button"
          className="rounded-full bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#5b21b6] px-4 py-2 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
}