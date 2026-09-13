function CustomOrder() {
  return (
    <section
      id="personalizzate"
      className="relative overflow-hidden bg-[#eadcf0] py-24 sm:py-32"
    >
      {/* Decorazioni */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border border-[#80669c]/10" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full border border-[#80669c]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Titolo */}
          <div>

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#80669c]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#80669c]">
                Hai un'idea?
              </p>
            </div>

            <h2 className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-[#45364c] sm:text-6xl">
              Diamo vita
              <span className="block text-[#80669c]">
                alla tua idea.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#766d78]">
              Non serve sapere esattamente cosa vuoi.
              Raccontami semplicemente cosa hai immaginato
              e vediamo insieme come trasformarlo in una
              creazione all'uncinetto.
            </p>

            <a
              href="https://wa.me/393275653146?text=Ciao%2C%20ti%20contatto%20dal%20sito."
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#45364c] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#45364c]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#80669c]"
            >
              Scrivimi su WhatsApp
              <span>→</span>
            </a>

          </div>

          {/* Processo */}
          <div className="grid gap-4 sm:grid-cols-3">

            <div className="rounded-[2rem] bg-[#fffaf5] p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eadcf0] font-serif text-lg text-[#80669c]">
                01
              </div>

              <h3 className="mt-6 font-serif text-xl text-[#45364c]">
                Racconta
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#817886]">
                Dimmi cosa vorresti creare, anche solo
                attraverso un'idea o una fotografia.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#fffaf5] p-7 shadow-sm sm:translate-y-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3dfe4] font-serif text-lg text-[#9b6f7b]">
                02
              </div>

              <h3 className="mt-6 font-serif text-xl text-[#45364c]">
                Immaginiamo
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#817886]">
                Scegliamo insieme colori, dimensioni e
                piccoli dettagli.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#fffaf5] p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4dce9] font-serif text-lg text-[#80669c]">
                03
              </div>

              <h3 className="mt-6 font-serif text-xl text-[#45364c]">
                Creo
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#817886]">
                Poi entra in gioco il filo e l'idea prende
                lentamente forma.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CustomOrder;