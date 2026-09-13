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

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <span className="font-serif text-xl text-[#d8c5e2]">
                  F
                </span>
              </div>

              <div>
                <p className="font-serif text-2xl">
                  Il Filo di Evelin
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Creazioni all'uncinetto
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
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Instagram
              </a>

              <a
                href="mailto:info@ilfilodievelin.it"
                className="transition hover:text-white"
              >
                Email
              </a>

              <a
                href="https://wa.me/393000000000"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp
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