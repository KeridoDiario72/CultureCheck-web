import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, CalendarCheck, Sparkles } from "lucide-react";
import ceramicsImage from "@/assets/images/ceramics.png";
import paintingImage from "@/assets/images/painting.png";
import { SiteNav } from "@/components/SiteNav";

const MARKETPLACE_URL = "#";

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
        secondaryCta: "I run a creative space"
      },
      howItWorks: {
        label: "How it works",
        steps: [
          { icon: Search, title: "Discover activities", desc: "Browse workshops and creative activities near you" },
          { icon: CalendarCheck, title: "Book easily", desc: "Simple, fast and secure booking" },
          { icon: Sparkles, title: "Enjoy and explore", desc: "Live new creative experiences" }
        ]
      },
      activities: {
        label: "Activities",
        title: "What you can book",
        cta: "View activity",
        cards: [
          { title: "Ceramics", desc: "Create unique pieces in a professional studio", bg: ceramicsImage, color: null },
          { title: "Crafts", desc: "Handmade objects and traditional techniques", bg: null, color: "#d4c9bb" },
          { title: "Painting", desc: "Express yourself through colour and technique", bg: paintingImage, color: null }
        ]
      },
      finalCta: {
        title: "Explore cultural activities near you",
        cta: "Explore activities"
      }
    },
    es: {
      hero: {
        headline: "Descubre y reserva actividades culturales cerca de ti",
        subheadline: "Encuentra tu próximo taller creativo y reserva en pocos pasos",
        primaryCta: "Explorar actividades",
        secondaryCta: "Tengo un centro creativo"
      },
      howItWorks: {
        label: "Cómo funciona",
        steps: [
          { icon: Search, title: "Descubre actividades", desc: "Explora talleres y actividades creativas cerca de ti" },
          { icon: CalendarCheck, title: "Reserva fácilmente", desc: "Reserva simple, rápida y segura" },
          { icon: Sparkles, title: "Disfruta y explora", desc: "Vive nuevas experiencias creativas" }
        ]
      },
      activities: {
        label: "Actividades",
        title: "Qué puedes reservar",
        cta: "Ver actividad",
        cards: [
          { title: "Cerámica", desc: "Crea piezas únicas en un taller profesional", bg: ceramicsImage, color: null },
          { title: "Artesanía", desc: "Objetos hechos a mano con técnicas tradicionales", bg: null, color: "#d4c9bb" },
          { title: "Pintura", desc: "Exprésate a través del color y la técnica", bg: paintingImage, color: null }
        ]
      },
      finalCta: {
        title: "Explora actividades culturales cerca de ti",
        cta: "Explorar actividades"
      }
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#c65a2e] selection:text-white">

      <SiteNav
        lang={lang}
        onLangToggle={() => setLang(lang === "en" ? "es" : "en")}
        activePage="home"
      />

      {/* Hero */}
      <section className="pt-28 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">CultureCheck</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-gray-900">
            {t.hero.headline}
          </h1>
          <p className="font-subheading text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a href={MARKETPLACE_URL} data-testid="button-explore-hero">
              <Button
                size="lg"
                className="bg-[#c65a2e] hover:bg-[#b04e26] text-white rounded-full font-subheading text-lg px-10 py-6 h-auto shadow-md w-full sm:w-auto"
              >
                {t.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/para-espacios" data-testid="button-spaces-hero">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-subheading text-lg px-10 py-6 h-auto w-full sm:w-auto transition-colors"
              >
                {t.hero.secondaryCta}
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e] mb-3">{t.howItWorks.label}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {t.howItWorks.steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center space-y-5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#c65a2e]/10 flex items-center justify-center mx-auto">
                    <Icon className="h-7 w-7 text-[#c65a2e]" />
                  </div>
                  <h3 className="font-heading text-2xl text-gray-900">{i + 1}. {step.title}</h3>
                  <p className="font-subheading text-base text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activity Cards */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e] mb-3">{t.activities.label}</p>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900">{t.activities.title}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {t.activities.cards.map((card, i) => (
              <motion.div
                key={i}
                className="group bg-white border border-gray-200 overflow-hidden flex flex-col rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-testid={`card-activity-${i}`}
              >
                <div className="relative h-52 overflow-hidden">
                  {card.bg ? (
                    <img
                      src={card.bg}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: card.color! }}
                    >
                      <span className="font-heading text-7xl text-white/40">{card.title[0]}</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <h3 className="font-heading text-xl text-gray-900">{card.title}</h3>
                  <p className="font-subheading text-sm text-gray-500 flex-1 leading-relaxed">{card.desc}</p>
                  <a href={MARKETPLACE_URL} data-testid={`button-activity-${i}`}>
                    <Button
                      variant="outline"
                      className="rounded-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-subheading text-sm w-full transition-colors"
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

      {/* Final CTA */}
      <section className="py-28 bg-gray-900 text-white px-6 md:px-12 text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-heading text-4xl md:text-6xl leading-tight text-white">
            {t.finalCta.title}
          </h2>
          <a href={MARKETPLACE_URL} data-testid="button-explore-final">
            <Button
              size="lg"
              className="bg-[#c65a2e] hover:bg-[#b04e26] text-white rounded-full font-subheading text-xl px-12 py-7 h-auto mt-2 shadow-lg"
            >
              {t.finalCta.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-heading text-xl text-gray-700 flex items-start">
            CultureCheck<span className="text-[0.6em] ml-1 mt-0.5 leading-none">®</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-subheading text-sm">
              <Link href="/legal/aviso-legal" className="text-gray-400 hover:text-gray-700 transition-colors" data-testid="link-aviso-legal">Aviso Legal</Link>
              <Link href="/legal/privacidad" className="text-gray-400 hover:text-gray-700 transition-colors" data-testid="link-privacidad">Política de Privacidad</Link>
              <Link href="/legal/cookies" className="text-gray-400 hover:text-gray-700 transition-colors" data-testid="link-cookies">Política de Cookies</Link>
            </div>
            <div className="text-gray-400 font-subheading text-sm">
              © {new Date().getFullYear()} CultureCheck
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
