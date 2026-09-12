import logo from "../assets/logo-text.png";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">

        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Dev Stack logo"
              className="h-10 w-auto"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/Rakib-webdev-code"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
              >
                <FaXTwitter className="text-base" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
              >
                <FaLinkedin className="text-base" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
              Product
            </h2>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-slate-500 transition-colors hover:text-violet-600"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="text-sm text-slate-500 transition-colors hover:text-violet-600"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-slate-500 transition-colors hover:text-violet-600"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
              Company
            </h2>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-500 transition-colors hover:text-violet-600"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-500 transition-colors hover:text-violet-600"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition-colors hover:text-violet-600"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
              Legal
            </h2>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition-colors hover:text-violet-600"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition-colors hover:text-violet-600"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs">
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-violet-600"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-violet-600"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}