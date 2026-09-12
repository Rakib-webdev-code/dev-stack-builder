import { FiStar } from "react-icons/fi";
import type { Technology } from "../Types/type";

export interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isAdded ? "border-[#d81b7e] bg-pink-50/30" : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-9 w-9 object-contain"
          />
        </div>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
          {technology.badge}
        </span>
      </div>

      <div className="mt-5 flex-1">
        <h3 className="text-xl font-bold text-slate-950">{technology.name}</h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {technology.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
          {technology.category}
        </span>

        <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 whitespace-nowrap text-sm font-bold text-slate-700">
          <FiStar className="text-amber-500" />
          {technology.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-4 w-full rounded-full px-4 py-3 text-sm font-bold shadow-sm transition-all duration-300 ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "brand-gradient text-white hover:-translate-y-0.5 hover:shadow-lg"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
