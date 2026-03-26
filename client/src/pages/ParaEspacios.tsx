import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle, Users, TrendingUp, Eye } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";

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
        title: "Do you run a cultural space?",
        subtitle: "Reach new participants and give visibility to your activities",
        cta: "Join CultureCheck"
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
      hero: {
        title: "¿Tienes un espacio cultural?",
        subtitle: "Llega a nuevos participantes y da visibilidad a tus actividades",
        cta: "Unirme a CultureCheck"
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
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#c65a2e] selection:text-white">

      <SiteNav
        lang={lang}
        onLangToggle={() => setLang(lang === "en" ? "es" : "en")}
        activePage="para-espacios"
      />

      {/* Hero */}
      <section className="pt-28 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-gray-900 text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-7"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">Para espacios</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl leading-[1.05]">
            {t.hero.title}
          </h1>
          <p className="font-subheading text-xl md:text-2xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <Button
            size="lg"
            className="bg-[#c65a2e] hover:bg-[#b04e26] text-white rounded-full font-subheading text-lg px-10 py-6 h-auto mt-2 shadow-md"
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-hero-spaces"
          >
            {t.hero.cta}
          </Button>
        </motion.div>
      </section>

      {/* Value proposition */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">{t.value.label}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {t.value.items.map((item, i) => {
              const Icon = item.icon;
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
                  <h3 className="font-heading text-2xl text-gray-900">{item.title}</h3>
                  <p className="font-subheading text-base text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">{t.howItWorks.label}</p>
          </motion.div>
          <div className="space-y-4">
            {t.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-8 p-7 bg-white border border-gray-200 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="font-heading text-4xl text-[#c65a2e]/20 flex-shrink-0 leading-none mt-1">{step.num}</span>
                <div>
                  <h3 className="font-heading text-xl text-gray-900 mb-1">{step.title}</h3>
                  <p className="font-subheading text-base text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-md mx-auto">
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center space-y-2">
              <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">Únete</p>
              <h2 className="font-heading text-3xl md:text-4xl text-gray-900">{t.form.title}</h2>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
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
                  <Input
                    name="centerName"
                    type="text"
                    required
                    placeholder={t.form.namePlaceholder}
                    className="rounded-xl border-gray-300 bg-white h-12 text-base"
                    data-testid="input-center-name"
                  />
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder={t.form.emailPlaceholder}
                    className="rounded-xl border-gray-300 bg-white h-12 text-base"
                    data-testid="input-center-email"
                  />
                  <Button
                    type="submit"
                    disabled={centerForm.status === "submitting"}
                    className="w-full rounded-full bg-[#c65a2e] hover:bg-[#b04e26] text-white font-subheading text-base h-12 shadow-sm"
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

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-heading text-xl text-gray-700 flex items-start">
            CultureCheck<span className="text-[0.6em] ml-1 mt-0.5 leading-none">®</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-subheading text-sm">
              <Link href="/legal/aviso-legal" className="text-gray-400 hover:text-gray-700 transition-colors">Aviso Legal</Link>
              <Link href="/legal/privacidad" className="text-gray-400 hover:text-gray-700 transition-colors">Política de Privacidad</Link>
              <Link href="/legal/cookies" className="text-gray-400 hover:text-gray-700 transition-colors">Política de Cookies</Link>
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
