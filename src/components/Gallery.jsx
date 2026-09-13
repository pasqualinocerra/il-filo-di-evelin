const gallery = [
  {
    title: "Piccole creature",
    image:
      "unicorno.jpg",
  },
  {
    title: "Dettagli che fanno la differenza",
    image:
      "leone.jpg",
  },
  {
    title: "Fili e colori",
    image:
      "cuore.jpg",
  },
  {
    title: "Creato lentamente",
    image:
      "hallowen.jpg",
  },
  {
    title: "Un regalo speciale",
    image:
      "creazione-nascita-3.jpg",
  },
];

function Gallery() {
  return (
    <section className="bg-[#fffaf5] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#9b82b5]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#80669c]">
                Dal mio laboratorio
              </p>
            </div>

            <h2 className="mt-5 font-serif text-4xl font-medium text-[#45364c] sm:text-5xl">
              Un piccolo album
              <span className="text-[#9b82b5]">
                {" "}di creazioni.
              </span>
            </h2>

          </div>

          <a
            href="https://www.instagram.com/ilfilodievelin/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[#80669c] hover:text-[#45364c]"
          >
            Seguimi su Instagram →
          </a>

        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">

          {gallery.map((item, index) => (
            <a
              key={item.title}
              href="https://www.instagram.com/ilfilodievelin/"
              target="_blank"
              rel="noreferrer"
              className="group mb-5 block break-inside-avoid overflow-hidden rounded-[1.5rem] bg-[#eadcf0]"
            >
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                    index % 2 === 0
                      ? "aspect-[4/5]"
                      : "aspect-[4/3]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#45364c]/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                  <p className="font-serif text-xl text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
                    Il Filo di Evelin
                  </p>

                </div>

              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;