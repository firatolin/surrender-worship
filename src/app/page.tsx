// import { ButtonLink } from "@/components/ui/button-link";
// import { Eyebrow } from "@/components/ui/eyebrow";

export default function HomePage() {
  return (
    <>
      {/* ── Vision ──────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container-editorial py-24 md:py-32">
          <p className="text-xs uppercase tracking-widest text-brand-antique-gold">
            Vision
          </p>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tightest text-brand-ivory max-w-4xl">
            Raising spiritually mature, Christ-centered worshipers who serve
            with excellence and integrity.
          </h1>
        </div>
      </section>

      {/* ── Home ────────────────────────────────────────── */}
      <section>
        <div className="container-editorial py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-widest text-brand-antique-gold">
                Home
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-3xl">
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
            </div>
          </div>
        </div>
      </section>

      {/* ── A Ministry Beyond Music ─────────────────────── */}
      <section className="border-t border-border bg-secondary">
        <div className="container-editorial py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-widest text-brand-antique-gold">
                A Ministry Beyond Music
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-3xl">
                We don&apos;t just train voices. We develop worshipers. At
                Surrender Worship Ministry, we believe true worship goes
                beyond the stage. We nurture the voice, heart, mind,
                character, and leadership of every participant through music
                education, worship training, personal development, and
                spiritual formation — helping people discover their
                God-given gifts, grow in excellence and character, and use
                their gifts to glorify God and serve others.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}