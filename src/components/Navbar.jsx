import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#4a3854]/10 bg-[#faf7fb]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#9b82b5]/30 bg-[#f0e8f5] transition duration-300 group-hover:rotate-6">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              className="h-6 w-6 text-[#80669c]"
            >
              <path
                d="M11 26C15 31 24 32 29 26C33 21 31 14 25 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M25 12C23 9 18 10 18 14C18 18 22 20 25 22C28 20 32 18 32 14C32 10 27 9 25 12Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <path
                d="M8 18C13 15 17 14 22 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="leading-none">
            <span className="block font-serif text-xl font-semibold tracking-tight text-[#3d3145]">
              Il Filo
            </span>

            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.28em] text-[#80669c]">
              di Evelin
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm text-[#54435f] transition hover:text-[#9b82b5]"
          >
            Home
          </a>

          <a
            href="#chi-sono"
            className="text-sm text-[#54435f] transition hover:text-[#9b82b5]"
          >
            Chi sono
          </a>

          <a
            href="#creazioni"
            className="text-sm text-[#54435f] transition hover:text-[#9b82b5]"
          >
            Creazioni
          </a>

          <a
            href="#personalizzate"
            className="text-sm text-[#54435f] transition hover:text-[#9b82b5]"
          >
            Personalizzate
          </a>

          <a
            href="#contatti"
            className="rounded-full bg-[#3d3145] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-[#80669c]"
          >
            Contattami
          </a>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          aria-label="Apri menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#4a3854]/10 bg-white md:hidden"
        >
          <span
            className={`h-px w-5 bg-[#3d3145] transition ${
              isOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-5 bg-[#3d3145] transition ${
              isOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t border-[#4a3854]/10 bg-[#faf7fb] transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">

          <a
            href="#home"
            onClick={closeMenu}
            className="border-b border-[#4a3854]/10 py-4 text-sm text-[#54435f]"
          >
            Home
          </a>

          <a
            href="#chi-sono"
            onClick={closeMenu}
            className="border-b border-[#4a3854]/10 py-4 text-sm text-[#54435f]"
          >
            Chi sono
          </a>

          <a
            href="#creazioni"
            onClick={closeMenu}
            className="border-b border-[#4a3854]/10 py-4 text-sm text-[#54435f]"
          >
            Creazioni
          </a>

          <a
            href="#personalizzate"
            onClick={closeMenu}
            className="border-b border-[#4a3854]/10 py-4 text-sm text-[#54435f]"
          >
            Personalizzate
          </a>

          <a
            href="#contatti"
            onClick={closeMenu}
            className="mt-3 rounded-full bg-[#3d3145] px-5 py-3 text-center text-sm font-medium text-white"
          >
            Contattami
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;