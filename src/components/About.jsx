function About() {
  return (
    <section
      id="chi-sono"
      className="relative overflow-hidden bg-[#fbf6ef] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-24 lg:px-10">

        {/* Foto */}
        <div className="relative mx-auto w-full max-w-xl">

          <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full border-2 border-dashed border-[#9b82b5]/30" />

          <div className="relative rotate-[-2deg] overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-[#80669c]/10">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#eadcf0]">
              <img
                src="braccialetti-vari.jpg"
                alt="Lavorazione artigianale all'uncinetto"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Etichetta */}
          <div className="absolute -bottom-5 -right-3 rotate-[4deg] rounded-2xl bg-white px-6 py-4 shadow-xl sm:-right-8">
            <p className="font-serif text-xl text-[#45364c]">
              Fatto a mano
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#9b82b5]">
              con il cuore
            </p>
          </div>

        </div>

        {/* Testo */}
        <div>

          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#9b82b5]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#80669c]">
              Dietro il filo
            </p>
          </div>

          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#45364c] sm:text-5xl">
            Ciao, sono
            <span className="text-[#9b82b5]">
              {" "}Vivian.
            </span>
          </h2>

          <div className="mt-7 space-y-5 text-[15px] leading-8 text-[#766d78]">

            <p>
              Da un semplice filo può nascere un piccolo
              personaggio, un regalo, un accessorio o qualcosa
              che ancora non esiste.
            </p>

            <p>
              È proprio questo che amo dell'uncinetto:
              <span className="font-medium text-[#5c4b64]">
                {" "}immaginare, scegliere i colori e vedere
                lentamente prendere forma una nuova creazione.
              </span>
            </p>

            <p>
              Creo amigurumi, pupazzetti, borse, cappelli,
              portaciucci, bracciali e tante altre idee.
              E quando qualcuno mi racconta cosa vorrebbe,
              mi piace provare a trasformare quella semplice
              idea in qualcosa di reale.
            </p>

          </div>

          <div className="mt-9 grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <span className="text-2xl">🧶</span>
              <p className="mt-3 font-serif text-lg text-[#45364c]">
                Creato a mano
              </p>
              <p className="mt-1 text-xs leading-5 text-[#817886]">
                Ogni pezzo viene lavorato con pazienza.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eadcf0]/60 p-5">
              <span className="text-2xl">♡</span>
              <p className="mt-3 font-serif text-lg text-[#45364c]">
                Pensato per te
              </p>
              <p className="mt-1 text-xs leading-5 text-[#817886]">
                Colori e dettagli possono diventare personali.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;