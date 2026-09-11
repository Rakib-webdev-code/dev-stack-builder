import bannerStack from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="mx-auto max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:mx-0 lg:text-6xl">
              Build Your Ideal
              <span className="mt-2 block bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#5b21b6] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base lg:mx-0">
              Explore frontend, backend, database, and tooling options. Compare
              technologies side-by-side and put together the stack that fits
              your next project.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                className="w-full rounded-full bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#5b21b6] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
              >
                Explore Technologies
              </button>

              <button
                type="button"
                className="w-full rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 sm:w-auto"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={bannerStack}
              alt="Dev Stack technologies"
              className="w-full max-w-md object-contain sm:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
