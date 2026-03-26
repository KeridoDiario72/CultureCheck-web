import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Instagram, Loader2, CheckCircle, Search, CalendarCheck, Sparkles } from "lucide-react";
import ceramicsImage from "@/assets/images/ceramics.png";
import paintingImage from "@/assets/images/painting.png";
import logoImage from "@/assets/images/logo-transparent-trimmed.png";

const FORMSPREE_URL = "https://formspree.io/f/xgoljqjv";
const MARKETPLACE_URL = "#";

type FormStatus = "idle" | "submitting" | "success" | "error";

function useFormspree() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const submit = async (data: Record<string, string>) => {
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        console.error("Formspree error:", res.status, await res.text());
        setStatus("error");
      }
    } catch (err) {
      console.error("Formspree fetch error:", err);
      setStatus("error");
    }
  };

  const reset = () => setStatus("idle");

  return { status, submit, reset };
}

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const centerForm = useFormspree();
  const joinForm = useFormspree();

  const content = {
    en: {
      nav: { cta: "I run a cultural space" },
      hero: {
        headline: "Discover and book cultural experiences near you",
        subheadline: "Explore workshops, creative classes and artistic activities in your city",
        primaryCta: "Explore experiences",
        secondaryCta: "I run a cultural space"
      },
      what: {
        label: "What is CultureCheck",
        text: "A platform to discover and book cultural experiences in one place. Ceramics, painting, writing, theatre and much more — all in your city."
      },
      howItWorks: {
        label: "How it works",
        steps: [
          { icon: Search, title: "Discover experiences", desc: "Browse workshops and creative activities near you" },
          { icon: CalendarCheck, title: "Book in a few clicks", desc: "Simple, fast and secure booking" },
          { icon: Sparkles, title: "Enjoy and explore", desc: "Live new creative experiences and keep discovering" }
        ]
      },
      experiences: {
        label: "Experiences",
        title: "What you can book",
        cta: "View experience",
        cards: [
          { title: "Ceramics", desc: "Create unique pieces in a professional studio", bg: ceramicsImage },
          { title: "Painting", desc: "Express yourself through colour and technique", bg: paintingImage },
          { title: "Creative Writing", desc: "Workshops to find your voice and tell your story", bg: null, color: "#e8e0d4" },
          { title: "Theatre", desc: "Performance and expression workshops for all levels", bg: null, color: "#d4dce8" },
          { title: "Crafts", desc: "Handmade objects and traditional techniques", bg: null, color: "#e8d4d4" },
          { title: "Photography", desc: "Capture the world from your own perspective", bg: null, color: "#d4e8d4" }
        ]
      },
      centers: {
        title: "Do you run a cultural space?",
        subtitle: "Reach new audiences and fill your activities",
        benefits: ["More visibility for your space", "Attract new audiences", "Simplified booking management", "Part of a creative network"],
        ctaTitle: "Become a partner",
        namePlaceholder: "Space name",
        emailPlaceholder: "Email address",
        submit: "Apply now"
      },
      joinUs: {
        title: "Build CultureCheck with us",
        roles: ["Strategic Partners", "Cultural Advisors", "Investors", "Creative Ambassadors"],
        cta: "Let's talk"
      },
      finalCta: {
        title: "Explore cultural experiences near you",
        cta: "Explore experiences"
      }
    },
    es: {
      nav: { cta: "Tengo un espacio cultural" },
      hero: {
        headline: "Descubre y reserva experiencias culturales cerca de ti",
        subheadline: "Explora talleres, clases creativas y actividades artísticas en tu ciudad",
        primaryCta: "Explorar experiencias",
        secondaryCta: "Tengo un espacio cultural"
      },
      what: {
        label: "Qué es CultureCheck",
        text: "Una plataforma para descubrir y reservar experiencias culturales en un solo lugar. Cerámica, pintura, escritura, teatro y mucho más — todo en tu ciudad."
      },
      howItWorks: {
        label: "Cómo funciona",
        steps: [
          { icon: Search, title: "Descubre experiencias", desc: "Explora talleres y actividades creativas cerca de ti" },
          { icon: CalendarCheck, title: "Reserva en pocos clics", desc: "Reserva simple, rápida y segura" },
          { icon: Sparkles, title: "Disfruta y explora", desc: "Vive nuevas experiencias creativas y sigue descubriendo" }
        ]
      },
      experiences: {
        label: "Experiencias",
        title: "Qué puedes reservar",
        cta: "Ver experiencia",
        cards: [
          { title: "Cerámica", desc: "Crea piezas únicas en un taller profesional", bg: ceramicsImage },
          { title: "Pintura", desc: "Exprésate a través del color y la técnica", bg: paintingImage },
          { title: "Escritura Creativa", desc: "Talleres para encontrar tu voz y contar tu historia", bg: null, color: "#e8e0d4" },
          { title: "Teatro", desc: "Talleres de interpretación y expresión para todos los niveles", bg: null, color: "#d4dce8" },
          { title: "Artesanía", desc: "Objetos hechos a mano con técnicas tradicionales", bg: null, color: "#e8d4d4" },
          { title: "Fotografía", desc: "Capta el mundo desde tu propia perspectiva", bg: null, color: "#d4e8d4" }
        ]
      },
      centers: {
        title: "¿Tienes un espacio cultural?",
        subtitle: "Llega a nuevas audiencias y llena tus actividades",
        benefits: ["Más visibilidad para tu espacio", "Atrae nuevas audiencias", "Gestión de reservas simplificada", "Parte de una red creativa"],
        ctaTitle: "Conviértete en colaborador",
        namePlaceholder: "Nombre del espacio",
        emailPlaceholder: "Correo electrónico",
        submit: "Solicitar ahora"
      },
      joinUs: {
        title: "Construye CultureCheck con nosotros",
        roles: ["Socios Estratégicos", "Asesores Culturales", "Inversores", "Embajadores Creativos"],
        cta: "Hablemos"
      },
      finalCta: {
        title: "Explora experiencias culturales cerca de ti",
        cta: "Explorar experiencias"
      }
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center bg-[#F5F1E8] border-b border-muted shadow-sm">
        <div className="flex-shrink-0 h-8 sm:h-10 md:h-16 lg:h-20 flex items-center min-w-0">
          <img src={logoImage} alt="CultureCheck Logo" className="h-full w-auto object-contain max-w-[140px] sm:max-w-[180px] md:max-w-none" />
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
          <Button
            variant="outline"
            className="font-subheading text-xs sm:text-sm md:text-base rounded-none border-foreground hover:bg-foreground hover:text-background transition-colors px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 whitespace-nowrap"
            onClick={() => document.getElementById("centers")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.nav.cta}
          </Button>
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
          <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">CultureCheck</p>
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
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background font-subheading text-lg px-10 py-6"
              onClick={() => document.getElementById("centers")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-centers-hero"
            >
              {t.hero.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* What is CultureCheck */}
      <section className="py-16 bg-foreground text-background px-6 md:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="font-subheading text-xs uppercase tracking-widest text-[#c65a2e]">{t.what.label}</p>
          <p className="font-heading text-2xl md:text-3xl text-background/90 leading-relaxed">
            {t.what.text}
          </p>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-xs uppercase tracking-widest text-[#c65a2e] mb-4">{t.howItWorks.label}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
                  <div className="w-6 h-0.5 bg-[#c65a2e] mx-auto" />
                  <h3 className="font-heading text-xl text-foreground">{i + 1}. {step.title}</h3>
                  <p className="font-subheading text-base text-muted-foreground">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-24 px-6 md:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-xs uppercase tracking-widest text-[#c65a2e] mb-3">{t.experiences.label}</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">{t.experiences.title}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.experiences.cards.map((card, i) => (
              <motion.div
                key={i}
                className="group bg-background border border-muted overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-testid={`card-experience-${i}`}
              >
                <div className="relative h-48 overflow-hidden">
                  {card.bg ? (
                    <img
                      src={card.bg}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: card.color }}>
                      <span className="font-heading text-5xl text-foreground/20">{card.title[0]}</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <h3 className="font-heading text-xl text-foreground">{card.title}</h3>
                  <p className="font-subheading text-sm text-muted-foreground flex-1">{card.desc}</p>
                  <a href={MARKETPLACE_URL} data-testid={`button-experience-${i}`}>
                    <Button variant="outline" className="rounded-none border-foreground hover:bg-foreground hover:text-background font-subheading text-sm w-full transition-colors">
                      {t.experiences.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-10 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <a href={MARKETPLACE_URL} data-testid="button-explore-all">
              <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white font-subheading text-lg px-10 py-6">
                {t.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* For Cultural Spaces */}
      <section id="centers" className="py-24 bg-accent text-accent-foreground px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-heading text-4xl md:text-5xl leading-tight">{t.centers.title}</h2>
            <p className="font-subheading text-xl text-white/80">{t.centers.subtitle}</p>
            <ul className="space-y-3 font-subheading text-lg text-white/70">
              {t.centers.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c65a2e] flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="bg-background p-8 shadow-2xl border border-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading text-2xl mb-6 text-accent">{t.centers.ctaTitle}</h3>
            {centerForm.status === "success" ? (
              <div className="flex items-center gap-2 text-green-600 font-subheading" data-testid="status-center-success">
                <CheckCircle className="h-5 w-5" />
                {lang === "es" ? "¡Solicitud recibida! Te contactaremos pronto." : "Application received! We'll be in touch."}
              </div>
            ) : (
              <form className="space-y-4" data-testid="form-center" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("centerName") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                await centerForm.submit({ email, centerName: name, formType: "center" });
                form.reset();
              }}>
                <Input name="centerName" type="text" required placeholder={t.centers.namePlaceholder} className="rounded-none border-muted bg-muted/30 text-foreground h-12" data-testid="input-center-name" />
                <Input name="email" type="email" required placeholder={t.centers.emailPlaceholder} className="rounded-none border-muted bg-muted/30 text-foreground h-12" data-testid="input-center-email" />
                <Button type="submit" disabled={centerForm.status === "submitting"} className="w-full rounded-none bg-accent text-white hover:bg-accent/90 font-subheading text-lg h-12 transition-all" data-testid="button-center-submit">
                  {centerForm.status === "submitting" ? <Loader2 className="h-5 w-5 animate-spin" /> : t.centers.submit}
                </Button>
              </form>
            )}
            {centerForm.status === "error" && (
              <p className="text-red-500 text-sm mt-2">{lang === "es" ? "Error al enviar. Inténtalo de nuevo." : "Submission failed. Please try again."}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Partners / Collaborations */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">{t.joinUs.title}</h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-subheading text-sm text-foreground/50 uppercase tracking-widest">
              {t.joinUs.roles.map((r, i) => (
                <span key={i}>{r}</span>
              ))}
            </div>
            <div className="bg-muted/40 p-8 border border-muted">
              <h3 className="font-heading text-xl mb-5 text-foreground">{t.joinUs.cta}</h3>
              {joinForm.status === "success" ? (
                <div className="flex items-center justify-center gap-2 text-green-600 font-subheading" data-testid="status-join-success">
                  <CheckCircle className="h-5 w-5" />
                  {lang === "es" ? "¡Mensaje enviado! Te responderemos pronto." : "Message sent! We'll get back to you."}
                </div>
              ) : (
                <form className="space-y-3 text-left" data-testid="form-joinus" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                  await joinForm.submit({ email, name, message, formType: "joinus" });
                  form.reset();
                }}>
                  <Input name="name" type="text" required placeholder={lang === "es" ? "Nombre" : "Name"} className="rounded-none border-muted bg-background h-10 text-sm" data-testid="input-join-name" />
                  <Input name="email" type="email" required placeholder={lang === "es" ? "Correo electrónico" : "Email address"} className="rounded-none border-muted bg-background h-10 text-sm" data-testid="input-join-email" />
                  <textarea
                    name="message"
                    placeholder={lang === "es" ? "Mensaje" : "Message"}
                    className="w-full min-h-[80px] p-3 rounded-none border border-muted bg-background focus:outline-none focus:ring-1 focus:ring-primary font-sans text-sm"
                    data-testid="input-join-message"
                  />
                  <Button type="submit" disabled={joinForm.status === "submitting"} className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 font-subheading text-sm h-10 uppercase tracking-widest" data-testid="button-join-submit">
                    {joinForm.status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : (lang === "es" ? "Enviar" : "Send")}
                  </Button>
                </form>
              )}
              {joinForm.status === "error" && (
                <p className="text-red-500 text-sm mt-2">{lang === "es" ? "Error al enviar. Inténtalo de nuevo." : "Submission failed. Please try again."}</p>
              )}
            </div>
          </motion.div>
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
