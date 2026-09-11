import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../Types/type";

interface TechnologiesProps {
  promise: Promise<Technology[]>;
}

export default function Technologies({ promise }: TechnologiesProps) {
  const technologies = use(promise);

  return (
    <section id="technologies" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))}
        </div>
      </div>
    </section>
  );
}
