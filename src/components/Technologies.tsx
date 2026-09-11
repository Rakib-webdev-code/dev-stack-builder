import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../Types/type";

interface TechnologiesProps {
  promise: Promise<Technology[]>;
}

export default function Technologies({ promise }: TechnologiesProps) {
  const technologies = use(promise);

  return (
    <section>
      <div>
        <div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#ff5722] to-[#d81b7e] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <div>
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}