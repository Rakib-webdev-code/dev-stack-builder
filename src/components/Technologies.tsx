import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";
import type { Technology } from "../Types/type";

interface TechnologiesProps {
  promise: Promise<Technology[]>;
  stack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function Technologies({
  promise,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologiesProps) {
  const technologies = use(promise);

  return (
    <section
      id="technologies"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
        <div className="mb-10 text-center sm:mb-12 lg:text-left">
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#5b21b6] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base lg:mx-0">
            Discover modern technologies and choose the right tools for your
            next project.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4 lg:items-start">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
                onAdd={onAdd}
              />
            ))}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <StackSidebar
              stack={stack}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
}