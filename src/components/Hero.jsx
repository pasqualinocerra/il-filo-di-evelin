function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fbf6ef] pt-24"
    >
      {/* Decorazioni */}
      <div className="pointer-events-none absolute -left-24 top-32 h-48 w-48 rounded-full bg-[#eadcf0]/60 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#f2dce2]/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="relative grid min-h-[calc(100vh-6rem)] items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">

          {/* FILO DECORATIVO */}
          <div className="pointer-events-none absolute left-1/3 top-8 hidden h-40 w-40 rounded-full border border-dashed border-[#9b82b5]/30 lg:block" />

          {/* TESTO */}
          <div className="relative z-10 max-w-xl">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#9b82b5]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#80669c]">
                Il mio piccolo mondo all'uncinetto
              </span>
            </div>

            <h1 className="font-serif text-5xl font-medium leading-[1.08] text-[#45364c] sm:text-6xl lg:text-[72px]">
              Fili, colori
              <span className="block text-[#9b82b5]">
                e tanta fantasia.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#766d78] sm:text-lg">
              Ciao, sono Vivian.
              <br />
              Creo amigurumi, pupazzetti, accessori e piccoli
              regali all'uncinetto, tutti fatti a mano e con
              un pizzico di fantasia.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#creazioni"
                className="rounded-full bg-[#80669c] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#80669c]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#6f5789]"
              >
                Entra nel mio mondo
              </a>

              <a
                href="#personalizzate"
                className="rounded-full border border-[#80669c]/25 bg-white/70 px-7 py-3.5 text-sm font-medium text-[#5c4b64] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Creiamo insieme
              </a>

            </div>

            {/* PICCOLA FIRMA */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full border-2 border-[#fbf6ef] bg-[#d8c5e2]" />
                <span className="h-8 w-8 rounded-full border-2 border-[#fbf6ef] bg-[#e8c9d0]" />
                <span className="h-8 w-8 rounded-full border-2 border-[#fbf6ef] bg-[#cdb7d9]" />
              </div>

              <p className="text-xs text-[#817886]">
                Ogni creazione nasce
                <span className="font-semibold text-[#5c4b64]">
                  {" "}lentamente e con cura.
                </span>
              </p>
            </div>

          </div>

          {/* COMPOSIZIONE ARTIGIANALE */}
          <div className="relative mx-auto w-full max-w-2xl">

            {/* Gomitolo decorativo */}
            <div className="absolute -left-3 top-4 z-20 hidden h-24 w-24 rounded-full bg-[#d8c5e2] shadow-lg shadow-[#80669c]/10 sm:block">
              <div className="absolute inset-3 rounded-full border border-[#80669c]/20" />

              <div className="absolute left-5 top-8 h-1 w-14 rotate-12 rounded-full bg-[#80669c]/25" />
              <div className="absolute left-4 top-11 h-1 w-16 -rotate-6 rounded-full bg-[#80669c]/20" />
            </div>

            {/* Immagine principale */}
            <div className="relative mx-auto w-full h-150 max-w-[500px] overflow-hidden rounded-[3rem] bg-[#eadcf0] shadow-2xl shadow-[#80669c]/10">

              <img
                src="bluey.jpeg"
                alt="Amigurumi realizzato a mano"
                className="block h-auto w-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#45364c]/25 via-transparent to-transparent" />
            </div>

            {/* MINI CARD 1 */}
            <div className="absolute -bottom-8 -left-4 z-20 hidden w-40 rotate-[-5deg] rounded-2xl bg-white p-3 shadow-xl sm:block">

              <div className="overflow-hidden rounded-xl bg-[#f1e5f3]">
                <img
                  src="mazzo-di-fori.jpg"
                  alt="Creazione all'uncinetto"
                  className="block h-auto w-full"
                />
              </div>

              <p className="mt-2 text-center font-serif text-sm text-[#5c4b64]">
                Fatto con amore
              </p>

            </div>

            {/* MINI CARD 2 */}
            <div className="absolute -right-3 -top-7 z-20 hidden w-44 rotate-[5deg] rounded-2xl bg-white p-3 shadow-xl sm:block">

              <div className="overflow-hidden rounded-xl bg-[#f4e3e7]">
                <img
                  src="fragoline-orecchini.jpg"
                  alt="Lavorazione all'uncinetto"
                  className="block h-full w-full"
                />
              </div>

              <p className="mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-[#80669c]">
                Ogni dettaglio conta
              </p>

            </div>

            {/* PUNTINO DECORATIVO */}
            <div className="absolute -bottom-3 right-12 h-5 w-5 rounded-full bg-[#e8c9d0] shadow-md" />

          </div>

        </div>
      </div>

      {/* BORDO DECORATIVO */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-12 w-full"
        >
          <path
            d="M0,40 C180,75 280,5 450,35 C620,65 720,10 900,35 C1080,60 1190,5 1440,38 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;