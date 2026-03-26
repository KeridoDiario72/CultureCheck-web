import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Instagram, Loader2, CheckCircle, Users, TrendingUp, Eye } from "lucide-react";
import logoImage from "@/assets/images/logo-transparent-trimmed.png";

const FORMSPREE_URL = "https://formspree.io/f/xgoljqjv";

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
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return { status, submit };
}

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ParaEspacios() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const centerForm = useFormspree();

  const content = {
    en: {
      nav: { spaces: "For spaces", vision: "Vision" },
      hero: {
        title: "Do you run a cultural space?",
        subtitle: "Reach new participants and give visibility to your activities"
      },
      value: {
        label: "Why CultureCheck",
        items: [
          { icon: Users, title: "Reach new audiences", desc: "Connect with people actively looking for creative activities" },
          { icon: TrendingUp, title: "Improve occupancy", desc: "Fill your workshops and activities more efficiently" },
          { icon: Eye, title: "Increase visibility", desc: "Your space appears to thousands of potential participants" }
        ]
      },
      howItWorks: {
        label: "How it works",
        steps: [
          { num: "01", title: "Publish your activities", desc: "Create your profile and list your workshops" },
          { num: "02", title: "Receive bookings", desc: "Participants book directly through the platform" },
          { num: "03", title: "Reach new users", desc: "Grow your community of participants" }
        ]
      },
      form: {
        title: "Join CultureCheck",
        namePlaceholder: "Space name",
        emailPlaceholder: "Email address",
        submit: "Join CultureCheck",
        success: "Application received! We'll be in touch.",
        error: "Submission failed. Please try again."
      }
    },
    es: {
      nav: { spaces: "Para espacios", vision: "Visión" },
      hero: {
        title: "¿Tienes un espacio cultural?",
        subtitle: "Llega a nuevos participantes y da visibilidad a tus actividades"
      },
      value: {
        label: "Por qué CultureCheck",
        items: [
          { icon: Users, title: "Llega a nuevos públicos", desc: "Conecta con personas que buscan activamente actividades creativas" },
          { icon: TrendingUp, title: "Mejora la ocupación", desc: "Llena tus talleres y actividades de forma más eficiente" },
          { icon: Eye, title: "Da visibilidad a tus actividades", desc: "Tu espacio aparece ante miles de participantes potenciales" }
        ]
      },
      howItWorks: {
        label: "Cómo funciona",
        steps: [
          { num: "01", title: "Publica tus actividades", desc: "Crea tu perfil y lista tus talleres y clases" },
          { num: "02", title: "Recibe reservas", desc: "Los participantes reservan directamente a través de la plataforma" },
          { num: "03", title: "Llega a nuevos usuarios", desc: "Haz crecer tu comunidad de participantes" }
        ]
      },
      form: {
        title: "Unirme a CultureCheck",
        namePlaceholder: "Nombre del espacio",
        emailPlaceholder: "Correo electrónico",
        submit: "Unirme a CultureCheck",
        success: "¡Solicitud recibida! Te contactaremos pronto.",
        error: "Error al enviar. Inténtalo de nuevo."
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
            <Link href="/">
              <img src={logoImage} alt="CultureCheck Logo" className="h-full w-auto object-contain max-w-[120px] sm:max-w-[160px] md:max-w-none cursor-pointer" />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6 font-subheading text-sm text-muted-foreground">
            <span className="text-primary font-medium">{t.nav.spaces}</span>
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
          <a href="https://instagram.com/culturecheck_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a href="mailto:hola@culturecheck.site" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 bg-accent text-accent-foreground">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            {t.hero.title}
          </h1>
          <p className="font-subheading text-xl md:text-2xl text-white/80 max-w-xl mx-auto">
            {t.hero.subtitle}
          </p>
          <Button
            size="lg"
            className="rounded-none bg-white text-accent hover:bg-white/90 font-subheading text-lg px-10 py-6 mt-4"
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-hero-spaces"
          >
            {t.form.submit}
          </Button>
        </motion.div>
      </section>

      {/* Value proposition */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-xs uppercase tracking-widest text-[#c65a2e]">{t.value.label}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            {t.value.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground">{item.title}</h3>
                  <p className="font-subheading text-base text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 px-6 md:px-12 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-xs uppercase tracking-widest text-[#c65a2e]">{t.howItWorks.label}</p>
          </motion.div>
          <div className="space-y-6">
            {t.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-8 p-6 bg-background border border-muted"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="font-heading text-4xl text-primary/20 flex-shrink-0">{step.num}</span>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-1">{step.title}</h3>
                  <p className="font-subheading text-base text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-24 px-6 md:px-12">
        <div className="max-w-lg mx-auto">
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">{t.form.title}</h2>
            </div>
            <div className="bg-muted/30 border border-muted p-8">
              {centerForm.status === "success" ? (
                <div className="flex items-center justify-center gap-2 text-green-600 font-subheading py-4" data-testid="status-center-success">
                  <CheckCircle className="h-5 w-5" />
                  {t.form.success}
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
                  <Input name="centerName" type="text" required placeholder={t.form.namePlaceholder} className="rounded-none border-muted bg-background h-12" data-testid="input-center-name" />
                  <Input name="email" type="email" required placeholder={t.form.emailPlaceholder} className="rounded-none border-muted bg-background h-12" data-testid="input-center-email" />
                  <Button type="submit" disabled={centerForm.status === "submitting"} className="w-full rounded-none bg-accent text-white hover:bg-accent/90 font-subheading text-lg h-12" data-testid="button-center-submit">
                    {centerForm.status === "submitting" ? <Loader2 className="h-5 w-5 animate-spin" /> : t.form.submit}
                  </Button>
                </form>
              )}
              {centerForm.status === "error" && (
                <p className="text-red-500 text-sm mt-2">{t.form.error}</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-muted px-6 md:px-12 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading text-2xl text-foreground flex items-start">
            CultureCheck<span className="text-[0.6em] ml-1 mt-0.5 leading-none">®</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-subheading text-sm">
              <Link href="/legal/aviso-legal" className="text-muted-foreground hover:text-primary transition-colors">Aviso Legal</Link>
              <Link href="/legal/privacidad" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link>
              <Link href="/legal/cookies" className="text-muted-foreground hover:text-primary transition-colors">Política de Cookies</Link>
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
