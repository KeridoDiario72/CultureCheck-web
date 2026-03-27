import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

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

export default function Vision() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const joinForm = useFormspree();

  const content = {
    en: {
      what: {
        text: "CultureCheck was born from a simple idea: culture should be easy to discover and part of everyday life."
      },
      problem: {
        title: "Discovering cultural activities shouldn't be complicated",
        para1: "Today, the cultural offer is scattered and many people don't know what options are available nearby or how to access them.",
        para2: "CultureCheck brings cultural and creative activities together in one place, making discovery and booking easy.",
        cards: ["A place to discover", "A place to book"]
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
        text: "CultureCheck nace de una idea simple: la cultura debería ser fácil de descubrir y formar parte de la vida cotidiana."
      },
      problem: {
        title: "Descubrir actividades culturales no debería ser complicado",
        para1: "Hoy en día, la oferta está dispersa y muchas personas no saben qué opciones tienen cerca o cómo acceder a ellas.",
        para2: "CultureCheck reúne en un solo lugar actividades culturales y creativas, facilitando el descubrimiento y la reserva.",
        cards: ["Un lugar para descubrir", "Un lugar para reservar"]
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
    <div className="min-h-screen bg-white text-[#1A1A1A] selection:bg-[#2C47C7] selection:text-white">

      <SiteNav lang={lang} onLangToggle={() => setLang(lang === "en" ? "es" : "en")} activePage="vision" />

      {/* ── What is CultureCheck ── */}
      <section className="pt-28 pb-24 md:pt-40 md:pb-28 px-6 md:px-12 bg-[#2C47C7] text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
            {t.what.text}
          </p>
        </motion.div>
      </section>

      {/* ── Problem ── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* Title */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight">{t.problem.title}</h2>
            {/* Paragraphs */}
            <div className="space-y-4">
              <p className="font-subheading text-lg md:text-xl text-[#1A1A1A]/60 leading-relaxed">{t.problem.para1}</p>
              <p className="font-subheading text-lg md:text-xl text-[#1A1A1A]/60 leading-relaxed">{t.problem.para2}</p>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-2 gap-4">
              {t.problem.cards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#2C47C7]/20 bg-[#2C47C7]/5 px-6 py-8 text-center"
                >
                  <span className="font-heading text-xl md:text-2xl text-[#2C47C7]">{card}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission + Vision ── */}
      <section className="py-14 md:py-20 px-6 md:px-12 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto space-y-12">
          <motion.div
            className="space-y-5"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="font-subheading text-sm uppercase tracking-widest text-[#c65a2e]">{t.mission.label}</span>
            <div className="space-y-4">
              <p className="font-subheading text-lg text-white/70 leading-relaxed">
                {lang === "es"
                  ? <>En un entorno cada vez más digital, muchas personas buscan participar en la <span className="text-[#c65a2e]">cultura de forma activa</span>.</>
                  : <>In an increasingly digital world, many people seek to <span className="text-[#c65a2e]">participate in culture actively</span>.</>}
              </p>
              <p className="font-subheading text-lg text-white/70 leading-relaxed">
                {lang === "es"
                  ? <>Al mismo tiempo, descubrir <span className="text-[#c65a2e]">actividades culturales</span> puede ser complicado y disperso.</>
                  : <>At the same time, discovering <span className="text-[#c65a2e]">cultural activities</span> can be complicated and scattered.</>}
              </p>
              <p className="font-subheading text-lg text-white/70 leading-relaxed">
                {lang === "es"
                  ? <>CultureCheck nace para conectar a las personas con esa <span className="text-[#c65a2e]">cultura que se vive</span>.</>
                  : <>CultureCheck was born to <span className="text-[#c65a2e]">connect people with the culture</span> that is lived.</>}
              </p>
            </div>
          </motion.div>

          <div className="border-t border-white/10" />

          <motion.div
            className="space-y-5"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="font-subheading text-sm uppercase tracking-widest text-[#5b9bd5]">{t.vision.label}</span>
            <div className="space-y-4">
              <p className="font-subheading text-lg text-white/70 leading-relaxed">
                {lang === "es"
                  ? <>Creemos en una <span className="text-[#5b9bd5]">cultura más activa</span>, cercana y accesible.</>
                  : <>We believe in a more <span className="text-[#5b9bd5]">active, close and accessible</span> culture.</>}
              </p>
              <p className="font-subheading text-lg text-white/70 leading-relaxed">
                {lang === "es"
                  ? <>CultureCheck conecta a las personas con actividades culturales, facilitando que <span className="text-[#5b9bd5]">descubrir y crear</span> forme parte de la vida cotidiana.</>
                  : <>CultureCheck connects people with cultural activities, making <span className="text-[#5b9bd5]">discovering and creating</span> part of everyday life.</>}
              </p>
              <p className="font-subheading text-lg text-white/70 leading-relaxed">
                {lang === "es"
                  ? <>Nuestro objetivo es construir una <span className="text-[#5b9bd5]">comunidad</span> donde la cultura se explore, se comparta y se viva.</>
                  : <>Our goal is to build a <span className="text-[#5b9bd5]">community</span> where culture is explored, shared and lived.</>}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Collaborate / Join Us ── */}
      <section className="py-10 md:py-14 px-6 md:px-12 bg-[#F5F1E8]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-[#1A1A1A] whitespace-nowrap">{t.joinUs.title}</h2>
            <div className="flex flex-nowrap justify-center gap-x-6 font-subheading text-xs text-[#1A1A1A]/40 uppercase tracking-widest">
              {t.joinUs.roles.map((r, i) => <span key={i} className="whitespace-nowrap">{r}</span>)}
            </div>
            <div className="max-w-lg mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-heading text-xl mb-6 text-[#1A1A1A]">{t.joinUs.cta}</h3>
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
                  <Input name="name" type="text" required placeholder={t.joinUs.namePlaceholder} className="rounded-xl border-gray-300 bg-gray-50 h-11 text-sm" data-testid="input-join-name" />
                  <Input name="email" type="email" required placeholder={t.joinUs.emailPlaceholder} className="rounded-xl border-gray-300 bg-gray-50 h-11 text-sm" data-testid="input-join-email" />
                  <textarea
                    name="message"
                    placeholder={t.joinUs.messagePlaceholder}
                    className="w-full min-h-[90px] p-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2C47C7]/30 font-sans text-sm"
                    data-testid="input-join-message"
                  />
                  <Button
                    type="submit"
                    disabled={joinForm.status === "submitting"}
                    className="w-full rounded-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/80 text-white font-subheading text-sm h-11"
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
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
