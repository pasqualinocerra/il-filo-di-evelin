function Footer() {
  return (
    <footer
      id="contatti"
      className="bg-[#45364c] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_0.7fr]">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c5e2]/20 bg-white/10">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="h-6 w-6 text-[#d8c5e2]"
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
                <p className="font-serif text-xl font-semibold tracking-tight">
                  Il Filo
                </p>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-[#d8c5e2]">
                  di Evelin
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Amigurumi, pupazzetti, accessori e idee
              personalizzate. Tutto nasce da un filo,
              un uncinetto e tanta fantasia.
            </p>

          </div>

          {/* Navigazione */}
          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8c5e2]">
              Esplora
            </p>

            <nav className="mt-5 flex flex-col gap-3 text-sm text-white/55">

              <a
                href="#home"
                className="transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#chi-sono"
                className="transition hover:text-white"
              >
                Chi sono
              </a>

              <a
                href="#creazioni"
                className="transition hover:text-white"
              >
                Creazioni
              </a>

              <a
                href="#personalizzate"
                className="transition hover:text-white"
              >
                Personalizzate
              </a>

            </nav>

          </div>

          {/* Contatti */}
          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8c5e2]">
              Seguimi
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">

              <a
                href="https://www.instagram.com/ilfilodievelin/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © {new Date().getFullYear()} Il Filo di Evelin
          </span>

          <span>
            Fatto a mano con cura da Vivian
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
