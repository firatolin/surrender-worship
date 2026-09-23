import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

const pillars = [
  {
    title: "Voice",
    body: "Training worshipers to sing with clarity, reverence, and conviction — the voice as an instrument of service.",
  },
  {
    title: "Heart",
    body: "Cultivating a posture of surrender before skill. The inner life shapes the outer offering.",
  },
  {
    title: "Character & Leadership",
    body: "Raising young leaders who carry integrity on and off the stage — in the church, the home, and the community.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container-editorial py-24 md:py-32">
          <Eyebrow>Surrender Worship Ministry · Addis Ababa</Eyebrow>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tightest text-brand-ivory max-w-3xl">
            Raising spiritually mature, Christ-centered worshipers who serve
            with excellence and integrity.
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-foreground/80 max-w-2xl">
            A youth-focused Christian worship ministry equipping singers,
            musicians, and leaders — through Gospel teaching, music, and the
            arts.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/services" variant="primary">
              Explore Our Services
            </ButtonLink>
            <ButtonLink href="/who-we-are" variant="outline">
              Who We Are
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── Mission intro ───────────────────────────────── */}
      <section>
        <div className="container-editorial py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <Eyebrow>Our Mission</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif text-2xl md:text-3xl leading-snug text-brand-ivory">
                To empower worshipers, singers, musicians, and leaders — not
                only in skill, but in spirit.
              </p>
              <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed max-w-2xl">
                <p>
                  Surrender Worship Ministry exists to see young people grow
                  into the fullness of their calling. We believe worship is
                  more than performance — it is a life offered up, day after
                  day, in every arena of life.
                </p>
                <p>
                  Through vocal coaching, choir development, music theory,
                  worship training, personal development, and counselling, we
                  walk alongside young believers as they grow in both
                  musicianship and faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── A Ministry Beyond Music ─────────────────────── */}
      <section className="border-t border-border bg-secondary">
        <div className="container-editorial py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <Eyebrow>A Ministry Beyond Music</Eyebrow>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl leading-tight text-brand-ivory">
                What we do goes far beyond the stage.
              </h2>
              <p className="mt-6 text-foreground/75 leading-relaxed">
                Worship is formed in the quiet places — in the heart, the mind,
                the character, and the way we lead. We invest in all of it.
              </p>
            </div>

            <div className="md:col-span-8 md:pl-12">
              <ul className="divide-y divide-border">
                {pillars.map((pillar) => (
                  <li key={pillar.title} className="py-8 first:pt-0 last:pb-0">
                    <h3 className="font-serif text-xl text-brand-ivory">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-foreground/75 leading-relaxed max-w-2xl">
                      {pillar.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ─────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container-editorial py-24 md:py-32 text-center">
          <Eyebrow>Get Involved</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl text-brand-ivory max-w-2xl mx-auto leading-tight">
            Join us in raising a generation of worshipers.
          </h2>
          <p className="mt-6 text-foreground/75 max-w-xl mx-auto leading-relaxed">
            Whether you are a singer, musician, or simply seeking — there is a
            place for you here.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" variant="primary">
              Get in Touch
            </ButtonLink>
            <ButtonLink href="/donation" variant="outline">
              Support the Ministry
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}