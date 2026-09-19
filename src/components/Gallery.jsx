import { useRef } from "react";

const gallery = [
  {
    title: "Piccole creature",
    image: "/unicorno.jpg",
  },
  {
    title: "Dettagli che fanno la differenza",
    image: "/leone.jpg",
  },
  {
    title: "Fili e colori",
    image: "/cuore.jpg",
  },
  {
    title: "Creato lentamente",
    image: "/hallowen.jpg",
  },
  {
    title: "Un regalo speciale",
    image: "/creazione-nascita-3.jpg",
  },
];

function Gallery() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "next" ? 380 : -380,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#fffaf5] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Intestazione */}
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
            className="text-sm font-medium text-[#80669c] transition hover:text-[#45364c]"
          >
            Seguimi su Instagram →
          </a>
        </div>

        {/* Controlli */}
        <div className="mt-10 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => scroll("prev")}
            aria-label="Foto precedente"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c6df] text-[#80669c] transition hover:bg-[#eadcf0] hover:text-[#45364c]"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scroll("next")}
            aria-label="Foto successiva"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c6df] text-[#80669c] transition hover:bg-[#eadcf0] hover:text-[#45364c]"
          >
            →
          </button>
        </div>

        {/* Carosello */}
        <div
          ref={sliderRef}
          className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide"
        >
          {gallery.map((item) => (
            <a
              key={item.title}
              href="https://www.instagram.com/ilfilodievelin/"
              target="_blank"
              rel="noreferrer"
              className="group min-w-[85%] snap-start sm:min-w-[48%] lg:min-w-[31.5%]"
            >
              {/* Card */}
              <div className="overflow-hidden rounded-[1.5rem] bg-[#eadcf0]">

                {/* Foto */}
                <div className="h-[360px] overflow-hidden rounded-[1.5rem] bg-[#f1e7f3] sm:h-[390px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full rounded-[1.5rem] object-contain transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Testo */}
                <div className="px-5 py-5">
                  <p className="font-serif text-xl text-[#45364c]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#80669c]">
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
