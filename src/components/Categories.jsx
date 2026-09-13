const categories = [
  {
    number: "01",
    title: "Amigurumi",
    subtitle: "Pupazzetti & personaggi",
    description:
      "Orsetti, animaletti, personaggi e tante altre piccole creature nate da un filo.",
    emoji: "🧸",
    color: "bg-[#eadcf0]",
  },
  {
    number: "02",
    title: "Per i più piccoli",
    subtitle: "Nascite & dolci pensieri",
    description:
      "Idee regalo per nascite, battesimi e momenti da ricordare.",
    emoji: "🌸",
    color: "bg-[#f3dfe4]",
  },
  {
    number: "03",
    title: "Accessori",
    subtitle: "Piccoli dettagli",
    description:
      "Borse, cappelli, bracciali, portaciucci e tutto ciò che la fantasia suggerisce.",
    emoji: "👜",
    color: "bg-[#e4dce9]",
  },
  {
    number: "04",
    title: "Su misura",
    subtitle: "La tua idea",
    description:
      "Hai qualcosa in mente? Possiamo trasformare la tua idea in una creazione unica.",
    emoji: "🧶",
    color: "bg-[#eee1d5]",
  },
];

function Categories() {
  return (
    <section
      id="creazioni"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#80669c]">
            Cosa posso creare
          </p>

          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#45364c] sm:text-5xl">
            Un mondo fatto
            <span className="text-[#9b82b5]">
              {" "}di fili e fantasia.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#817886]">
            Non c'è una sola cosa che posso creare.
            Ogni nuovo progetto è un'occasione per inventare,
            sperimentare e dare forma a qualcosa di speciale.
          </p>

        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <article
              key={category.number}
              className="group relative overflow-hidden rounded-[2rem] border border-[#4a3854]/8 bg-[#fffdfa] p-7 transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#80669c]/10"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full text-3xl ${category.color} transition duration-500 group-hover:scale-110 group-hover:rotate-6`}
              >
                <span aria-hidden="true">
                  {category.emoji}
                </span>
              </div>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a393aa]">
                {category.number}
              </p>

              <h3 className="mt-2 font-serif text-2xl font-medium text-[#45364c]">
                {category.title}
              </h3>

              <p className="mt-1 text-xs font-medium text-[#9b82b5]">
                {category.subtitle}
              </p>

              <p className="mt-4 text-sm leading-7 text-[#817886]">
                {category.description}
              </p>

              <a
                href="#personalizzate"
                className="mt-6 inline-flex text-xs font-semibold text-[#80669c] transition hover:text-[#45364c]"
              >
                Voglio saperne di più →
              </a>

              <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-[#80669c]/10 transition duration-500 group-hover:scale-125" />

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;