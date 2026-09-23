import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Surrender Worship Ministry (SWM) is a youth-focused Christian ministry established in Addis Ababa to listen, pray, educate, empower, inspire, and unlock the God-given potential of young people.",
};

// const pillars = ["Listen", "Pray", "Educate", "Empower", "Inspire", "Unlock"];

export default function WhoWeArePage() {
  return (
    <>
      {/* ── Who We Are ──────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container-editorial py-24 md:py-32">
          <p className="text-xs uppercase tracking-widest text-brand-antique-gold">
            Who We Are
          </p>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tightest text-brand-ivory max-w-4xl">
            Who We Are
          </h1>
        </div>
      </section>

      {/* ── The paragraph ───────────────────────────────── */}
      <section>
        <div className="container-editorial py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-widest text-brand-antique-gold">
                Who We Are
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-3xl">
                Surrender Worship Ministry (SWM) is a youth-focused Christian
                ministry established in Addis Ababa to listen, pray, educate,
                empower, inspire, and unlock the God-given potential of young
                people. Working alongside the Church and the wider community,
                we use Gospel teaching, music, and the arts to restore hope,
                build character, develop gifts, and equip young people to
                become confident ambassadors of Christ and responsible
                citizens who care for people, animals, and the environment,
                while creating positive change in their lives, communities,
                and country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Six pillars ─────────────────────────────────── */}
      {/* <section className="border-t border-border bg-secondary">
        <div className="container-editorial py-24 md:py-32">
          <p className="text-xs uppercase tracking-widest text-brand-antique-gold">
            Who We Are
          </p>

          <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-6">
            {pillars.map((word, i) => (
              <li key={word} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-brand-ivory">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm uppercase tracking-widest text-brand-antique-gold">
                  {word}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </>
  );
}