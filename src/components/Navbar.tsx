import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo-text.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-slate-700 transition-colors hover:text-violet-600 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="flex items-center">
          <img
            src={Logo}
            alt="Dev Stack Logo"
            className="h-9 w-auto sm:h-10"
          />
        </div>

        <ul className="hidden items-center gap-7 lg:flex">
          <li>
            <a
              href="#home"
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-violet-600"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-violet-600"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-violet-600"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-violet-600"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-violet-600"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="rounded-lg px-2 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 sm:px-3 sm:text-sm"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 px-3 py-2 text-xs font-bold text-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:px-4 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-violet-600"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-violet-600"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-violet-600"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-violet-600"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-violet-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}