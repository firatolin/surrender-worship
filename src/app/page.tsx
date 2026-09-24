import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export default function HomePage() {
  return (
    <>
      {/* ── Hero — full-bleed video with dark overlay ──── */}
      <section className="relative full-bleed">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/swm.webm" type="video/webm" />
          </video>
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-brand-black/70" />
        </div>

        {/* Content — centered */}
        <div className="relative container-editorial py-32 md:py-48 lg:py-56 flex flex-col items-center text-center">
          <Reveal>
            {/* Brand title block */}
            <div className="flex items-center justify-center gap-4">
              <span
                aria-hidden="true"
                className="hidden sm:block h-px w-12 bg-brand-gold"
              />
              <p className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tightest text-brand-gold">
                Surrender Worship Ministry
              </p>
              <span
                aria-hidden="true"
                className="hidden sm:block h-px w-12 bg-brand-gold"
              />
            </div>

            {/* Vision statement — motto */}
            <h1 className="mt-10 font-serif text-xs sm:text-sm uppercase tracking-[0.4em] text-brand-ivory max-w-3xl mx-auto leading-[2]">
              Raising spiritually mature, Christ-centered worshipers who
              serve with excellence and integrity.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── Home — dark band, centered ──────────────────── */}
      <section className="full-bleed bg-secondary border-y border-border">
        <div className="container-editorial py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              {/* <p className="text-xs uppercase tracking-[0.3em] text-brand-antique-gold">
                Home
              </p> */}
              <p className="mt-8 text-lg md:text-xl leading-[1.85] text-foreground/90">
                Surrender Worship Ministry (SWM) exists to empower the next
                generation of worshipers, singers, musicians, and Christian
                leaders with the skills, character, faith, and confidence to
                serve God with truth, purpose, and their full God-given
                potential. We believe true worship begins with surrender,
                grows through excellence, and is expressed through a life of
                service. Our ministry develops both gifts and character,
                helping individuals grow in the example of Christ —
                spiritually, musically, personally, and as Christ-centered
                leaders.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── A Ministry Beyond Music — split image + text ── */}
      <section className="full-bleed">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px]">
          {/* Image side */}
          <Reveal className="relative min-h-[320px] md:min-h-full order-2 md:order-1">
            <Image
              src="/images/worship.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-black/40" />
          </Reveal>

          {/* Text side */}
          <div className="flex items-center bg-background order-1 md:order-2">
            <div className="px-6 py-16 md:px-16 md:py-20 max-w-xl">
              <Reveal delay={100}>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-antique-gold">
                  A Ministry Beyond Music
                </p>
                <p className="mt-8 text-base md:text-lg leading-[1.85] text-foreground/85">
                  We don&apos;t just train voices. We develop worshipers. At
                  Surrender Worship Ministry, we believe true worship goes
                  beyond the stage. We nurture the voice, heart, mind,
                  character, and leadership of every participant through
                  music education, worship training, personal development,
                  and spiritual formation — helping people discover their
                  God-given gifts, grow in excellence and character, and use
                  their gifts to glorify God and serve others.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}