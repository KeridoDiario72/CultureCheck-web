import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, CalendarCheck, Sparkles } from "lucide-react";
import ceramicsImage from "@/assets/images/ceramics.png";
import paintingImage from "@/assets/images/painting.png";
import heroImg1 from "@assets/laura-tommasina-Wksd6I6mSkw-unsplash_1774551347035.jpg";
import heroImg2 from "@assets/anya-richter-cuc8Fzz-Ct8-unsplash_1774551347027.jpg";
import heroImg3 from "@assets/esha-verma-HAoTz6PfrBY-unsplash_1774551347029.jpg";
import heroImg4 from "@assets/pew-nguyen-d2MLdFBO6aA-unsplash_1774551347030.jpg";
import heroImg5 from "@assets/vitaly-gariev-1R_BI7Y_32M-unsplash_1774551347034.jpg";
import heroImg6 from "@assets/lance-matthew-pahang-3-x4eUNuiqo-unsplash_1774551347028.jpg";
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
          { icon: CalendarCheck, title: "Book easily", desc: "Simple, fast and secure booking" },
          { icon: Sparkles, title: "Enjoy and explore", desc: "Live new creative experiences" }
        ]
      },
      activities: {
        eyebrow: "Activities",
        title: "What you can book",
        cta: "View activity",
        cards: [
          { title: "Ceramics", desc: "Create unique pieces in a professional studio", bg: ceramicsImage, color: null },
          { title: "Crafts", desc: "Handmade objects and traditional techniques", bg: null, color: "#c9b99a" },
          { title: "Painting", desc: "Express yourself through colour and technique", bg: paintingImage, color: null }
        ]
      },
      finalCta: {
        eyebrow: "Ready to explore?",
        title: "Explore cultural activities near you",
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
          { icon: CalendarCheck, title: "Reserva fácilmente", desc: "Reserva simple, rápida y segura" },
          { icon: Sparkles, title: "Disfruta y explora", desc: "Vive nuevas experiencias creativas" }
        ]
      },
      activities: {
        eyebrow: "Actividades",
        title: "Qué puedes reservar",
        cta: "Ver actividad",
        cards: [
          { title: "Cerámica", desc: "Crea piezas únicas en un taller profesional", bg: ceramicsImage, color: null },
          { title: "Artesanía", desc: "Objetos hechos a mano con técnicas tradicionales", bg: null, color: "#c9b99a" },
          { title: "Pintura", desc: "Exprésate a través del color y la técnica", bg: paintingImage, color: null }
        ]
      },
      finalCta: {
        eyebrow: "¿Listo para explorar?",
        title: "Explora actividades culturales cerca de ti",
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

        {/* Mosaic background — irregular asymmetric grid */}
        <div
          className="absolute inset-0 grid gap-[5px]"
          style={{
            gridTemplateColumns: "38% 24% 38%",
            gridTemplateRows: "34% 33% 33%",
          }}
        >
          {/* Col 1 · rows 1-2 → tall (pottery wheel) */}
          <div className="overflow-hidden [grid-column:1] [grid-row:1/3]">
            <img src={heroImg1} alt="Taller de cerámica" className="w-full h-full object-cover kb-1" />
          </div>
          {/* Col 2 · row 1 → normal (art workshop) */}
          <div className="overflow-hidden [grid-column:2] [grid-row:1]">
            <img src={heroImg2} alt="Taller de pintura" className="w-full h-full object-cover kb-2" />
          </div>
          {/* Col 3 · rows 1-2 → tall (coloured yarn) */}
          <div className="overflow-hidden [grid-column:3] [grid-row:1/3]">
            <img src={heroImg3} alt="Textiles de colores" className="w-full h-full object-cover kb-3" />
          </div>
          {/* Col 1 · row 3 → normal (ceramic bowl) */}
          <div className="overflow-hidden [grid-column:1] [grid-row:3]">
            <img src={heroImg4} alt="Bol cerámico pintado" className="w-full h-full object-cover kb-4" />
          </div>
          {/* Col 2 · rows 2-3 → tall (painting studio) */}
          <div className="overflow-hidden [grid-column:2] [grid-row:2/4]">
            <img src={heroImg5} alt="Estudio de pintura" className="w-full h-full object-cover kb-5" />
          </div>
          {/* Col 3 · row 3 → normal (bead embroidery) */}
          <div className="overflow-hidden [grid-column:3] [grid-row:3]">
            <img src={heroImg6} alt="Bordado artesanal" className="w-full h-full object-cover kb-6" />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/52" />

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
      <section className="py-28 md:py-36 px-6 md:px-12 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-16 md:mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-base uppercase tracking-widest text-[#2C47C7] mb-4">
              {t.activities.eyebrow}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A]">
              {t.activities.title}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {t.activities.cards.map((card, i) => (
              <motion.div
                key={i}
                className="group bg-white border border-gray-200 overflow-hidden flex flex-col rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-testid={`card-activity-${i}`}
              >
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  {card.bg ? (
                    <img
                      src={card.bg}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: card.color! }}>
                      <span className="font-heading text-7xl text-white/50">{card.title[0]}</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <h3 className="font-heading text-2xl text-[#1A1A1A]">{card.title}</h3>
                  <p className="font-subheading text-base text-[#1A1A1A]/60 flex-1 leading-relaxed line-clamp-2">{card.desc}</p>
                  <a href={MARKETPLACE_URL} data-testid={`button-activity-${i}`}>
                    <Button
                      variant="outline"
                      className="rounded-full border-[#2C47C7] text-[#2C47C7] hover:bg-[#2C47C7] hover:text-white font-subheading text-sm w-full transition-all"
                    >
                      {t.activities.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-32 md:py-40 bg-[#2C47C7] text-white px-6 md:px-12 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="font-subheading text-base uppercase tracking-widest text-white/50 mb-6">
            {t.finalCta.eyebrow}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl leading-tight text-white mb-10">
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
