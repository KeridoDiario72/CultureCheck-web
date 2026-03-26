import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle } from "lucide-react";
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

export default function Vision() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const joinForm = useFormspree();

  const content = {
    en: {
      what: {
        label: "What is CultureCheck",
        text: "A platform to discover and book cultural and creative activities in one place."
      },
      problem: {
        label: "The problem",
        title: "Discovering cultural activities shouldn't be complicated",
        items: ["A place to discover", "A place to book"]
      },
      mission: {
        label: "Mission",
        paragraphs: [
          "In an increasingly digital world, many people seek to participate in culture actively.",
          "At the same time, discovering cultural activities can be complicated and scattered.",
          "CultureCheck was born to connect people with the culture that is lived."
        ]
      },
      vision: {
        label: "Vision",
        paragraphs: [
          "We believe in a more active, close and accessible culture.",
          "CultureCheck connects people with cultural activities, making discovering and creating part of everyday life.",
          "Our goal is to build a community where culture is explored, shared and lived."
        ]
      },
      joinUs: {
        label: "Collaborate",
        title: "Build CultureCheck with us",
        roles: ["Strategic Partners", "Cultural Advisors", "Investors", "Creative Ambassadors"],
        cta: "Let's talk",
        namePlaceholder: "Name",
        emailPlaceholder: "Email address",
        messagePlaceholder: "Message",
        submit: "Send",
        success: "Message sent! We'll get back to you.",
        error: "Submission failed. Please try again."
      }
    },
    es: {
      what: {
        label: "Qué es CultureCheck",
        text: "Una plataforma para descubrir y reservar actividades culturales y creativas en un solo lugar."
      },
      problem: {
        label: "El problema",
        title: "Descubrir actividades culturales no debería ser complicado",
        items: ["Un lugar para descubrir", "Un lugar para reservar"]
      },
      mission: {
        label: "Misión",
        paragraphs: [
          "En un entorno cada vez más digital, muchas personas buscan participar en la cultura de forma activa.",
          "Al mismo tiempo, descubrir actividades culturales puede ser complicado y disperso.",
          "CultureCheck nace para conectar a las personas con esa cultura que se vive."
        ]
      },
      vision: {
        label: "Visión",
        paragraphs: [
          "Creemos en una cultura más activa, cercana y accesible.",
          "CultureCheck conecta a las personas con actividades culturales, facilitando que descubrir y crear forme parte de la vida cotidiana.",
          "Nuestro objetivo es construir una comunidad donde la cultura se explore, se comparta y se viva."
        ]
      },
      joinUs: {
        label: "Colabora",
        title: "Construye CultureCheck con nosotros",
        roles: ["Socios Estratégicos", "Asesores Culturales", "Inversores", "Embajadores Creativos"],
        cta: "Hablemos",
        namePlaceholder: "Nombre",
        emailPlaceholder: "Correo electrónico",
        messagePlaceholder: "Mensaje",
        submit: "Enviar",
        success: "¡Mensaje enviado! Te responderemos pronto.",
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
        activePage="vision"
      />

      {/* What is CultureCheck */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-24 px-6 md:px-12 bg-gray-900 text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">{t.what.label}</p>
          <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
            {t.what.text}
          </p>
        </motion.div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">{t.problem.label}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">{t.problem.title}</h2>
            <ul className="space-y-4 mt-4">
              {t.problem.items.map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-subheading text-lg text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c65a2e] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">{t.mission.label}</p>
            <div className="space-y-5">
              {t.mission.paragraphs.map((p, i) => (
                <p key={i} className="font-subheading text-lg text-gray-600 leading-relaxed">{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-sm uppercase tracking-widest text-[#5b9bd5]">{t.vision.label}</p>
            <div className="space-y-5">
              {t.vision.paragraphs.map((p, i) => (
                <p key={i} className="font-subheading text-lg text-gray-600 leading-relaxed">{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaborate / Join Us */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">{t.joinUs.label}</p>
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900">{t.joinUs.title}</h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-subheading text-sm text-gray-400 uppercase tracking-widest">
              {t.joinUs.roles.map((r, i) => <span key={i}>{r}</span>)}
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="font-heading text-xl mb-6 text-gray-900">{t.joinUs.cta}</h3>
              {joinForm.status === "success" ? (
                <div className="flex items-center justify-center gap-2 text-green-600 font-subheading" data-testid="status-join-success">
                  <CheckCircle className="h-5 w-5" />
                  {t.joinUs.success}
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
                  <Input
                    name="name"
                    type="text"
                    required
                    placeholder={t.joinUs.namePlaceholder}
                    className="rounded-xl border-gray-300 bg-gray-50 h-11 text-sm"
                    data-testid="input-join-name"
                  />
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder={t.joinUs.emailPlaceholder}
                    className="rounded-xl border-gray-300 bg-gray-50 h-11 text-sm"
                    data-testid="input-join-email"
                  />
                  <textarea
                    name="message"
                    placeholder={t.joinUs.messagePlaceholder}
                    className="w-full min-h-[90px] p-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#c65a2e]/30 font-sans text-sm"
                    data-testid="input-join-message"
                  />
                  <Button
                    type="submit"
                    disabled={joinForm.status === "submitting"}
                    className="w-full rounded-full bg-gray-900 hover:bg-gray-700 text-white font-subheading text-sm h-11"
                    data-testid="button-join-submit"
                  >
                    {joinForm.status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : t.joinUs.submit}
                  </Button>
                </form>
              )}
              {joinForm.status === "error" && (
                <p className="text-red-500 text-sm mt-2">{t.joinUs.error}</p>
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
