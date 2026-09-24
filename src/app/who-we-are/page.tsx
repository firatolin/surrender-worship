import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Surrender Worship Ministry (SWM) is a youth-focused Christian ministry established in Addis Ababa to listen, pray, educate, empower, inspire, and unlock the God-given potential of young people.",
};

export default function WhoWeArePage() {
  return (
    <div className="full-bleed">
      <div className="container-editorial py-16 md:py-20 max-w-3xl">
        <Reveal>
          {/* <p className="text-xs uppercase tracking-[0.3em] text-brand-antique-gold">
            Who We Are
          </p> */}

          <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tightest text-brand-ivory">
            Who We Are
          </h1>

          <p className="mt-12 text-base md:text-lg leading-[1.85] text-foreground/85">
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
        </Reveal>
      </div>
    </div>
  );
}