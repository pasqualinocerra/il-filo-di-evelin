const featuredCreations = [
   {
    title: "Portaciuccio personalizzato",
    description:
      "Un piccolo accessorio pensato per i più piccoli, personalizzato con nome e dettagli realizzati a mano.",
    image: "/public/portaciuccio-unicorno.jpg",
    tag: "Personalizzato",
  },
  {
    title: "Idee per nascita",
    description: "Un pensiero speciale per dare il benvenuto a una nuova vita.",
    image:
      "creazione-nacita.jpg",
    tag: "Regali",
  },
  {
    title: "Borse & accessori",
    description: "Creazioni da indossare, usare e portare sempre con sé.",
    image:
      "braccialetto.jpg",
    tag: "Accessori",
  },
];

function FeaturedCreations() {
  return (
    <section className="bg-[#fbf6ef] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Intestazione */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#9b82b5]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#80669c]">
                In evidenza
              </p>
            </div>

            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#45364c] sm:text-5xl">
              Alcune delle cose
              <span className="block text-[#9b82b5]">
                che amo creare.
              </span>
            </h2>

          </div>

          <p className="max-w-sm text-sm leading-7 text-[#817886]">
            Ogni creazione può essere diversa dall'altra.
            Colori, dimensioni e dettagli possono cambiare
            per dare vita a qualcosa di veramente personale.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {featuredCreations.map((creation, index) => (
            <article
              key={creation.title}
              className={`group ${
                index === 1 ? "md:translate-y-8" : ""
              }`}
            >

              {/* Immagine */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[#eadcf0]">

                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={creation.image}
                    alt={creation.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                {/* Numero */}
                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf5]/90 font-serif text-sm text-[#45364c] shadow-sm backdrop-blur">
                  0{index + 1}
                </span>

                {/* Tag */}
                <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#80669c] shadow-sm backdrop-blur">
                  {creation.tag}
                </span>

              </div>

              {/* Testo */}
              <div className="px-2 pt-6">

                <h3 className="font-serif text-2xl font-medium text-[#45364c]">
                  {creation.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-7 text-[#817886]">
                  {creation.description}
                </p>

              </div>

            </article>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          <p className="font-serif text-2xl text-[#45364c]">
            E queste sono solo alcune idee...
          </p>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#817886]">
            Se hai visto qualcosa che ti piace o hai
            un'idea tutta tua, possiamo parlarne.
          </p>

          <a
            href="#personalizzate"
            className="mt-6 inline-flex rounded-full border border-[#80669c]/25 bg-white px-6 py-3 text-sm font-medium text-[#5c4b64] transition duration-300 hover:-translate-y-1 hover:border-[#80669c]/50 hover:shadow-lg hover:shadow-[#80669c]/10"
          >
            Ho un'idea da raccontarti →
          </a>

        </div>

      </div>
    </section>
  );
}

export default FeaturedCreations;