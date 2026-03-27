import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle, Users, TrendingUp, Eye } from "lucide-react";
import { SiteNav, MARKETPLACE_URL } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import heroSpaces from "@assets/max-tcvetkov-RIWgN6czP8U-unsplash_1774606270640.jpg";

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
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return { status, submit };
}

const fadeIn = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ParaEspacios() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const centerForm = useFormspree();

  const content = {
    en: {
      hero: {
        label: "For cultural spaces",
        title: "Do you run a cultural space?",
        subtitle: "Reach new participants and give visibility to your activities",
        cta: "Join CultureCheck"
      },
      value: {
        label: "Why CultureCheck",
        items: [
          { icon: Users, title: "Reach new audiences", desc: "Make your activities discoverable by more people" },
          { icon: TrendingUp, title: "Improve occupancy", desc: "Fill your workshops and activities" },
          { icon: Eye, title: "Greater visibility", desc: "Become part of the city's cultural scene" }
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
        label: "Get started",
        title: "Join CultureCheck",
        namePlaceholder: "Space name",
        emailPlaceholder: "Email address",
        submit: "Join CultureCheck",
        success: "Application received! We'll be in touch.",
        error: "Submission failed. Please try again."
      }
    },
    es: {
      hero: {
        label: "Para espacios culturales",
        title: "¿Tienes un espacio cultural?",
        subtitle: "Llega a nuevos participantes y da visibilidad a tus actividades",
        cta: "Unirme a CultureCheck"
      },
      value: {
        label: "Por qué CultureCheck",
        items: [
          { icon: Users, title: "Llega a nuevos públicos", desc: "Haz que más personas descubran tus actividades" },
          { icon: TrendingUp, title: "Mejora la ocupación", desc: "Llena tus talleres y actividades" },
          { icon: Eye, title: "Mayor visibilidad", desc: "Forma parte de la oferta cultural de la ciudad" }
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
        label: "Empieza ahora",
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
    <div className="min-h-screen bg-white text-[#1A1A1A] selection:bg-[#2C47C7] selection:text-white">

      <SiteNav lang={lang} onLangToggle={() => setLang(lang === "en" ? "es" : "en")} activePage="para-espacios" />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroSpaces}
          alt="Espacio cultural"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content — pt-16 clears the fixed nav */}
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center px-6 pt-16 space-y-8"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-white">
            {t.hero.title}
          </h1>
          <p className="font-subheading text-xl md:text-2xl text-white/70 max-w-xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white rounded-full font-subheading text-lg px-10 py-6 h-auto shadow-md hover:shadow-lg transition-all"
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-hero-spaces"
          >
            {t.hero.cta}
          </Button>
        </motion.div>
      </section>

      {/* ── Value proposition ── */}
      <section className="py-10 md:py-14 px-6 md:px-12 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#2C47C7]">{t.value.label}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {t.value.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center space-y-5"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#2C47C7]/10 flex items-center justify-center mx-auto">
                    <Icon className="h-7 w-7 text-[#2C47C7]" />
                  </div>
                  <h3 className="font-heading text-2xl text-[#1A1A1A]">{item.title}</h3>
                  <p className="font-subheading text-base text-[#1A1A1A]/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cómo funciona ── */}
      <section className="py-10 md:py-14 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#2C47C7]">{t.howItWorks.label}</h2>
          </motion.div>
          <div className="space-y-4">
            {t.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-8 p-7 bg-[#F5F1E8] rounded-2xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="font-heading text-4xl text-[#2C47C7]/20 flex-shrink-0 leading-none mt-1">{step.num}</span>
                <div>
                  <h3 className="font-heading text-xl text-[#1A1A1A] mb-1">{step.title}</h3>
                  <p className="font-subheading text-base text-[#1A1A1A]/60 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section id="form" className="py-24 px-6 md:px-12 bg-[#F5F1E8]">
        <div className="max-w-md mx-auto">
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center space-y-3">
              <span className="font-subheading text-base uppercase tracking-widest text-[#2C47C7]">{t.form.label}</span>
              <h2 className="font-heading text-3xl md:text-4xl text-[#1A1A1A]">{t.form.title}</h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
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
                  <Input name="centerName" type="text" required placeholder={t.form.namePlaceholder} className="rounded-xl border-gray-300 bg-gray-50 h-12 text-base" data-testid="input-center-name" />
                  <Input name="email" type="email" required placeholder={t.form.emailPlaceholder} className="rounded-xl border-gray-300 bg-gray-50 h-12 text-base" data-testid="input-center-email" />
                  <Button
                    type="submit"
                    disabled={centerForm.status === "submitting"}
                    className="w-full rounded-full bg-accent hover:bg-accent/90 text-white font-subheading text-base h-12 shadow-sm hover:shadow-md transition-all"
                    data-testid="button-center-submit"
                  >
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

      <SiteFooter />
    </div>
  );
}
