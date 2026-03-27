import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, CalendarCheck, Sparkles } from "lucide-react";
import heroImg1 from "@assets/optimized/laura-tommasina-Wksd6I6mSkw-unsplash_1774551347035.webp";
import heroImg2 from "@assets/optimized/anya-richter-cuc8Fzz-Ct8-unsplash_1774551347027.webp";
import heroImg3 from "@assets/optimized/esha-verma-HAoTz6PfrBY-unsplash_1774551347029.webp";
import heroImg4 from "@assets/optimized/pew-nguyen-d2MLdFBO6aA-unsplash_1774551347030.webp";
import heroImg5 from "@assets/optimized/vitaly-gariev-1R_BI7Y_32M-unsplash_1774551347034.webp";
import heroImg6 from "@assets/optimized/lance-matthew-pahang-3-x4eUNuiqo-unsplash_1774551347028.webp";
import actPintura from "@assets/optimized/vitaly-gariev-9K1r-ubhwD0-unsplash_1774551347033.webp";
import actArtesania from "@assets/optimized/laura-adai-5H2ketFL1LE-unsplash_1774551347027.webp";
import actFloral from "@assets/optimized/hillary-ungson-y0VAG6tKjxU-unsplash_1774551347030.webp";
import heroVelas from "@assets/optimized/ionela-mat-4U-cfybSixM-unsplash_1774551347025.webp";
import actLectura from "@assets/optimized/bill-ringer-7C2JUQRJ5hE-unsplash_1774604994388.webp";
import heroAula from "@assets/optimized/illan-riestra-nava-vRKpmLZdGmw-unsplash_1774551347026.webp";
import heroVidriera from "@assets/optimized/jakub-zerdzicki-8_RxHhvMZz0-unsplash_1774551347032.webp";
import heroBrochas from "@assets/optimized/pew-nguyen-i0k1TyYw_Ss-unsplash_1774551347035.webp";
import { SiteNav, MARKETPLACE_URL } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const fadeIn = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");

  const content = {
    en: {
      hero: {
        headline: "Discover and book cultural activities near you",
        subheadline: "Find your next creative workshop and book in a few steps",
        primaryCta: "Explore activities",
        secondaryCta: "I have a creative space"
      },
      howItWorks: {
        eyebrow: "Simple process",
        title: "How it works",
        steps: [
          { icon: Search, title: "Discover activities", desc: "Browse workshops and creative activities near you" },
          { icon: CalendarCheck, title: "Book easily", desc: "Book in a simple, fast and secure way" },
          { icon: Sparkles, title: "Enjoy and explore", desc: "Live new creative experiences" }
        ]
      },
      activities: {
        title: "What you can book",
        more: "and much more is waiting for you",
        cards: [
          { title: "Ceramics",      desc: "Throw and shape clay in a professional studio",    bg: heroImg1 },
          { title: "Painting",      desc: "Express yourself through colour and technique",     bg: actPintura },
          { title: "Reading",        desc: "Book clubs and shared reading experiences",         bg: actLectura },
          { title: "Crafts",        desc: "Handmade objects with traditional techniques",      bg: heroImg6 },
          { title: "Embroidery",    desc: "Bead and stitch unique handmade pieces",           bg: heroImg3 },
          { title: "Design",        desc: "Arrange flowers and create botanical compositions", bg: actArtesania },
        ]
      },
      finalCta: {
        eyebrow: "Ready to explore?",
        title: "Discover cultural activities near you",
        cta: "Explore activities"
      }
    },
    es: {
      hero: {
        headline: "Descubre y reserva actividades culturales cerca de ti",
        subheadline: "Encuentra tu próximo taller creativo y reserva en pocos pasos",
        primaryCta: "Explorar actividades",
        secondaryCta: "Tengo un espacio creativo"
      },
      howItWorks: {
        eyebrow: "Proceso sencillo",
        title: "Cómo funciona",
        steps: [
          { icon: Search, title: "Descubre actividades", desc: "Explora talleres y actividades creativas cerca de ti" },
          { icon: CalendarCheck, title: "Reserva fácilmente", desc: "Reserva de forma simple, rápida y segura" },
          { icon: Sparkles, title: "Disfruta y explora", desc: "Vive nuevas experiencias creativas" }
        ]
      },
      activities: {
        title: "Qué puedes reservar",
        more: "y mucho más te está esperando",
        cards: [
          { title: "Cerámica",       desc: "Modela arcilla en el torno de un taller profesional",   bg: heroImg1 },
          { title: "Pintura",        desc: "Exprésate a través del color y la técnica pictórica",    bg: actPintura },
          { title: "Lectura",        desc: "Clubes de lectura y experiencias literarias compartidas", bg: actLectura },
          { title: "Artesanía",      desc: "Objetos hechos a mano con técnicas tradicionales",       bg: heroImg6 },
          { title: "Bordado",        desc: "Cose y borda piezas únicas con tus propias manos",       bg: heroImg3 },
          { title: "Diseño",         desc: "Crea composiciones botánicas y arreglos florales",       bg: actArtesania },
        ]
      },
      finalCta: {
        eyebrow: "¿Listo para explorar?",
        title: "Descubre actividades culturales cerca de ti",
        cta: "Explorar actividades"
      }
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] selection:bg-[#2C47C7] selection:text-white">

      <SiteNav lang={lang} onLangToggle={() => setLang(lang === "en" ? "es" : "en")} activePage="home" />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Mosaic — 13 images, 3 rows (4-5-4), breaks don't align = dynamism */}
        <div
          className="absolute inset-0 grid gap-[3px]"
          style={{
            gridTemplateColumns: "repeat(20, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
          }}
        >
          {/* ── Row 1: 4 images × 5 cols each ── */}
          {[
            { src: heroImg1,   alt: "Tornero cerámica",  col: "1/6"  },
            { src: heroImg2,   alt: "Taller pintura",    col: "6/11" },
            { src: heroImg3,   alt: "Hilo teñido",       col: "11/16"},
            { src: heroImg5,   alt: "Estudio de pintura",col: "16/21"},
          ].map((img, i) => (
            <div key={`r1-${i}`} className="overflow-hidden" style={{ gridColumn: img.col, gridRow: "1" }}>
              <img src={img.src} alt={img.alt} className={`w-full h-full object-cover kb-${(i % 6) + 1}`} />
            </div>
          ))}

          {/* ── Row 2: 5 images × 4 cols each (breaks shift vs row 1) ── */}
          {[
            { src: actPintura,   alt: "Chica en caballete",  col: "1/5"  },
            { src: heroAula,     alt: "Aula de arte",         col: "5/9"  },
            { src: heroImg4,     alt: "Bol cerámico pintado", col: "9/13" },
            { src: actFloral,    alt: "Corona floral",        col: "13/17"},
            { src: actArtesania, alt: "Estudio artesanía",    col: "17/21"},
          ].map((img, i) => (
            <div key={`r2-${i}`} className="overflow-hidden" style={{ gridColumn: img.col, gridRow: "2" }}>
              <img src={img.src} alt={img.alt} className={`w-full h-full object-cover kb-${((i + 2) % 6) + 1}`} />
            </div>
          ))}

          {/* ── Row 3: 4 images × 5 cols each (same breaks as row 1) ── */}
          {[
            { src: heroImg6,    alt: "Bordado artesanal",   col: "1/6"  },
            { src: heroVelas,   alt: "Velas artesanales",   col: "6/11" },
            { src: heroVidriera,alt: "Vidriería",           col: "11/16"},
            { src: heroBrochas, alt: "Brochas y cerámica",  col: "16/21"},
          ].map((img, i) => (
            <div key={`r3-${i}`} className="overflow-hidden" style={{ gridColumn: img.col, gridRow: "3" }}>
              <img src={img.src} alt={img.alt} className={`w-full h-full object-cover kb-${((i + 4) % 6) + 1}`} />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Centered card */}
        <motion.div
          className="relative z-10 w-full max-w-xl mx-6 sm:mx-8"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="rounded-3xl shadow-2xl px-7 py-10 sm:px-11 sm:py-12 text-center bg-[#ffffff]">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#1A1A1A] mb-4">
              {t.hero.headline}
            </h1>
            <p className="font-subheading text-base md:text-lg text-[#1A1A1A]/55 leading-relaxed max-w-md mx-auto mb-8">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={MARKETPLACE_URL} data-testid="button-explore-hero">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white rounded-full font-subheading text-lg px-10 py-6 h-auto shadow-md w-full sm:w-auto transition-all hover:shadow-lg"
                >
                  {t.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/para-espacios" data-testid="button-spaces-hero">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-[#1A1A1A]/25 text-[#1A1A1A] hover:border-[#1A1A1A] font-subheading text-base px-8 py-6 h-auto w-full sm:w-auto transition-colors"
                >
                  {t.hero.secondaryCta}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Cómo funciona ── */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#2C47C7]">
              {t.howItWorks.title}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {t.howItWorks.steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#2C47C7]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-[#2C47C7]" />
                  </div>
                  <h3 className="font-heading text-xl text-[#1A1A1A] mb-2">{i + 1}. {step.title}</h3>
                  <p className="font-subheading text-base text-[#1A1A1A]/55 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Activity Cards ── */}
      <section className="py-14 md:py-16 px-6 md:px-12 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-left mb-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A]">
              {t.activities.title}
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {t.activities.cards.map((card, i) => (
              <motion.a
                href={MARKETPLACE_URL}
                key={i}
                className="group overflow-hidden flex flex-col rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-testid={`card-activity-${i}`}
              >
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={card.bg}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-white px-4 py-3">
                  <h3 className="font-heading text-xl text-[#1A1A1A]">{card.title}</h3>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Teaser */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="font-heading text-2xl md:text-3xl text-[#1A1A1A]/40 tracking-wide">
              {t.activities.more}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-14 md:py-20 bg-[#2C47C7] text-white px-6 md:px-12 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="font-heading text-3xl md:text-4xl text-white mb-5">
            {t.finalCta.eyebrow}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl leading-tight text-white/60 mb-8">
            {t.finalCta.title}
          </h2>
          <a href={MARKETPLACE_URL} data-testid="button-explore-final">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-full font-subheading text-xl px-14 py-7 h-auto shadow-lg hover:shadow-xl transition-all"
            >
              {t.finalCta.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
