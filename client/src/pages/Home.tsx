import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Instagram, Twitter } from "lucide-react";
import heroArt from "@/assets/images/hero-art.png";
import ceramicsImage from "@/assets/images/ceramics.png";
import paintingImage from "@/assets/images/painting.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [lang, setLang] = useState<"en" | "es">("es");

  const content = {
    en: {
      nav: {
        cta: "Join the waitlist"
      },
      hero: {
        headline: <>Culture that is <span className="text-primary block">lived,</span> not just <span className="text-accent">consumed.</span></>,
        subheadline: "A platform to discover and book creative activities in your city.",
        primaryCta: "Join the waitlist",
        secondaryCta: "For creative centers"
      },
      philosophy: {
        problem: "The Problem",
        problems: ["Digital saturation", "Passive cultural consumption", "Fragmented discovery"],
        vision: "Our Vision",
        visionText: <>CultureCheck helps people <span className="text-primary">actively participate</span> in culture and connect with creative communities.</>
      },
      users: {
        title: "For Creators",
        benefits: [
          "Discover creative activities easily",
          "Flexible booking",
          "Access to curated creative spaces",
          "Community of like-minded people"
        ],
        ctaTitle: "Get Early Access",
        inputPlaceholder: "Enter your email",
        submit: "Submit"
      },
      centers: {
        title: "For Centers",
        benefits: [
          "Increase visibility",
          "Attract new audiences",
          "Simplify booking management",
          "Become part of a creative network"
        ],
        ctaTitle: "Become a partner",
        namePlaceholder: "Center Name",
        emailPlaceholder: "Email Address",
        submit: "Apply Now"
      },
      joinUs: {
        title: "Build CultureCheck with us",
        roles: ["Strategic Partners", "Mentors", "Cultural Advisors", "Investors", "Creative Ambassadors"],
        cta: "Let's Talk"
      },
      vision: {
        text: "Building an internationally scalable ecosystem for cultural innovation."
      }
    },
    es: {
      nav: {
        cta: "Unirse a la lista"
      },
      hero: {
        headline: <>Cultura que se <span className="text-primary block">vive,</span> no solo se <span className="text-accent">consume.</span></>,
        subheadline: "Una plataforma para descubrir y reservar actividades creativas en tu ciudad.",
        primaryCta: "Unirse a la lista",
        secondaryCta: "Para centros creativos"
      },
      philosophy: {
        problem: "El Problema",
        problems: ["Saturación digital", "Consumo cultural pasivo", "Descubrimiento fragmentado"],
        vision: "Nuestra Visión",
        visionText: <>CultureCheck ayuda a las personas a <span className="text-primary">participar activamente</span> en la cultura y conectar con comunidades creativas.</>
      },
      users: {
        title: "Para Creadores",
        benefits: [
          "Descubre actividades creativas fácilmente",
          "Reserva flexible",
          "Acceso a espacios creativos curados",
          "Comunidad de personas con ideas afines"
        ],
        ctaTitle: "Obtén acceso anticipado",
        inputPlaceholder: "Tu correo electrónico",
        submit: "Enviar"
      },
      centers: {
        title: "Para Centros",
        benefits: [
          "Aumenta la visibilidad",
          "Atrae nuevas audiencias",
          "Simplifica la gestión de reservas",
          "Forma parte de una red creativa"
        ],
        ctaTitle: "Conviértete en socio",
        namePlaceholder: "Nombre del Centro",
        emailPlaceholder: "Correo Electrónico",
        submit: "Solicitar ahora"
      },
      joinUs: {
        title: "Construye CultureCheck con nosotros",
        roles: ["Socios Estratégicos", "Mentores", "Asesores Culturales", "Inversores", "Embajadores Creativos"],
        cta: "Hablemos"
      },
      vision: {
        text: "Construyendo un ecosistema escalable internacionalmente para la innovación cultural."
      }
    }
  };

  const t = content[lang];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-muted">
        <div className="font-heading text-2xl tracking-wider text-primary">CultureCheck</div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="font-subheading text-sm uppercase tracking-widest hover:text-primary transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <Button variant="outline" className="font-subheading text-lg rounded-none border-foreground hover:bg-foreground hover:text-background transition-colors">
            {t.nav.cta}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-6xl md:text-8xl leading-[0.9] text-foreground">
            {t.hero.headline}
          </h1>
          <p className="font-subheading text-xl md:text-2xl text-muted-foreground max-w-md">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white font-subheading text-lg px-8 py-6">
              {t.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background font-subheading text-lg px-8 py-6">
              {t.hero.secondaryCta}
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative h-[500px] w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-secondary/20 translate-x-4 translate-y-4"></div>
          <img src={heroArt} alt="Abstract representation of culture" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-125" />
        </motion.div>
      </section>

      {/* About / Philosophy Section */}
      <section className="py-24 bg-foreground text-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <h2 className="text-sm font-sans tracking-widest text-secondary mb-6 uppercase">{t.philosophy.problem}</h2>
              <ul className="space-y-6 font-subheading text-3xl md:text-5xl opacity-80">
                {t.philosophy.problems.map((p, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-accent text-xl">0{i+1}</span> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-sm font-sans tracking-widest text-primary mb-6 uppercase">{t.philosophy.vision}</h2>
              <p className="text-2xl md:text-4xl font-subheading leading-relaxed">
                {t.philosophy.visionText}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Users Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1 relative h-[600px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="absolute inset-0 bg-primary/10 -translate-x-4 translate-y-4"></div>
             <img src={ceramicsImage} alt="Minimalist ceramics studio" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            className="order-1 md:order-2 space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-5xl md:text-7xl text-primary">{t.users.title}</h2>
            <ul className="space-y-4 font-subheading text-xl text-foreground/80">
              {t.users.benefits.map((b, i) => (
                <li key={i} className="border-b border-muted pb-4 flex items-center justify-between">
                  {b} <ArrowRight className="h-4 w-4 text-primary" />
                </li>
              ))}
            </ul>
            <div className="bg-muted p-8 mt-8">
              <h3 className="font-heading text-2xl mb-4">{t.users.ctaTitle}</h3>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input type="email" placeholder={t.users.inputPlaceholder} className="rounded-none border-foreground bg-background" />
                <Button type="submit" className="rounded-none bg-primary hover:bg-primary/90">{t.users.submit}</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Creative Centers Section */}
      <section className="py-24 bg-accent text-accent-foreground px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-5xl md:text-7xl">{t.centers.title}</h2>
            <ul className="space-y-4 font-subheading text-xl text-white/90">
              {t.centers.benefits.map((b, i) => (
                <li key={i} className="border-b border-white/20 pb-4">{b}</li>
              ))}
            </ul>
            <div className="bg-white/10 backdrop-blur-sm p-8 mt-8 border border-white/20">
              <h3 className="font-heading text-2xl mb-4">{t.centers.ctaTitle}</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input type="text" placeholder={t.centers.namePlaceholder} className="rounded-none border-white/30 bg-transparent placeholder:text-white/50 text-white" />
                <Input type="email" placeholder={t.centers.emailPlaceholder} className="rounded-none border-white/30 bg-transparent placeholder:text-white/50 text-white" />
                <Button type="submit" className="w-full rounded-none bg-white text-accent hover:bg-white/90 font-subheading text-lg">{t.centers.submit}</Button>
              </form>
            </div>
          </motion.div>
          <motion.div 
            className="relative h-[600px] hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <img src={paintingImage} alt="Abstract painting studio" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" />
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-12"
        >
          <h2 className="text-6xl md:text-8xl text-primary">{t.joinUs.title}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 font-subheading text-lg md:text-xl text-foreground/70 py-8 border-y border-muted">
            {t.joinUs.roles.map((r, i) => (
              <div key={i} className="flex items-center justify-center text-center p-2">{r}</div>
            ))}
          </div>

          <Button size="lg" className="rounded-none bg-foreground text-background hover:bg-foreground/90 font-subheading text-2xl px-12 py-8">
            {t.joinUs.cta}
          </Button>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-primary text-primary-foreground px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-subheading text-3xl md:text-5xl leading-tight">
            {t.vision.text}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-muted px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-heading text-3xl text-foreground">CultureCheck</div>
        
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
        </div>

        <div className="text-muted-foreground font-subheading text-sm">
          © {new Date().getFullYear()} CultureCheck. All rights reserved.
        </div>
      </footer>
    </div>
  );
}