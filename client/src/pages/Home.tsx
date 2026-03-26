import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Instagram, Search, CalendarCheck, Sparkles } from "lucide-react";
import ceramicsImage from "@/assets/images/ceramics.png";
import paintingImage from "@/assets/images/painting.png";
import logoImage from "@/assets/images/logo-transparent-trimmed.png";

const MARKETPLACE_URL = "#";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");

  const content = {
    en: {
      nav: {
        spaces: "For spaces",
        vision: "Vision"
      },
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
          { title: "Crafts", desc: "Handmade objects and traditional techniques", bg: null, color: "#e8ddd0" },
          { title: "Painting", desc: "Express yourself through colour and technique", bg: paintingImage, color: null }
        ]
      },
      finalCta: {
        title: "Explore cultural activities near you",
        cta: "Explore activities"
      }
    },
    es: {
      nav: {
        spaces: "Para espacios",
        vision: "Visión"
      },
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
          { title: "Artesanía", desc: "Objetos hechos a mano con técnicas tradicionales", bg: null, color: "#e8ddd0" },
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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center bg-[#F5F1E8] border-b border-muted shadow-sm">
        <div className="flex items-center gap-6 min-w-0">
          <div className="flex-shrink-0 h-8 sm:h-10 md:h-14 flex items-center">
            <img src={logoImage} alt="CultureCheck Logo" className="h-full w-auto object-contain max-w-[120px] sm:max-w-[160px] md:max-w-none" />
          </div>
          <div className="hidden md:flex items-center gap-6 font-subheading text-sm text-muted-foreground">
            <Link href="/para-espacios" className="hover:text-primary transition-colors" data-testid="link-nav-spaces">{t.nav.spaces}</Link>
            <Link href="/vision" className="hover:text-primary transition-colors" data-testid="link-nav-vision">{t.nav.vision}</Link>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="font-subheading text-sm uppercase tracking-widest hover:text-primary transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a href="https://instagram.com/culturecheck_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-instagram" aria-label="Instagram">
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a href="mailto:hola@culturecheck.site" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-mail" aria-label="Email">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <Link href="/para-espacios">
            <Button
              variant="outline"
              className="hidden sm:inline-flex font-subheading text-xs sm:text-sm rounded-none border-foreground hover:bg-foreground hover:text-background transition-colors px-3 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap"
              data-testid="button-nav-spaces"
            >
              {t.hero.secondaryCta}
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.div
          className="space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-foreground font-heading">
            {t.hero.headline}
          </h1>
          <p className="font-subheading text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href={MARKETPLACE_URL} data-testid="button-explore-hero">
              <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white font-subheading text-lg px-10 py-6 w-full sm:w-auto">
                {t.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/para-espacios" data-testid="button-spaces-hero">
              <Button size="lg" variant="outline" className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background font-subheading text-lg px-10 py-6 w-full sm:w-auto">
                {t.hero.secondaryCta}
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 px-6 md:px-12 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-xs uppercase tracking-widest text-[#c65a2e] mb-2">{t.howItWorks.label}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            {t.howItWorks.steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground">{i + 1}. {step.title}</h3>
                  <p className="font-subheading text-base text-muted-foreground">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activity Cards */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-xs uppercase tracking-widest text-[#c65a2e] mb-3">{t.activities.label}</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">{t.activities.title}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {t.activities.cards.map((card, i) => (
              <motion.div
                key={i}
                className="group bg-background border border-muted overflow-hidden flex flex-col"
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
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: card.color! }}>
                      <span className="font-heading text-6xl text-foreground/15">{card.title[0]}</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <h3 className="font-heading text-xl text-foreground">{card.title}</h3>
                  <p className="font-subheading text-sm text-muted-foreground flex-1">{card.desc}</p>
                  <a href={MARKETPLACE_URL} data-testid={`button-activity-${i}`}>
                    <Button variant="outline" className="rounded-none border-foreground hover:bg-foreground hover:text-background font-subheading text-sm w-full transition-colors">
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
      <section className="py-28 bg-foreground text-background px-6 md:px-12 text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-heading text-4xl md:text-6xl leading-tight text-background">
            {t.finalCta.title}
          </h2>
          <a href={MARKETPLACE_URL} data-testid="button-explore-final">
            <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white font-subheading text-xl px-12 py-7 mt-4">
              {t.finalCta.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-muted px-6 md:px-12 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading text-2xl text-foreground flex items-start">
            CultureCheck<span className="text-[0.6em] ml-1 mt-0.5 leading-none">®</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-subheading text-sm">
              <Link href="/legal/aviso-legal" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-aviso-legal">Aviso Legal</Link>
              <Link href="/legal/privacidad" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-privacidad">Política de Privacidad</Link>
              <Link href="/legal/cookies" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-cookies">Política de Cookies</Link>
            </div>
            <div className="text-muted-foreground font-subheading text-sm">
              © {new Date().getFullYear()} CultureCheck
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
