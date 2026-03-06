import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Instagram, Loader2, CheckCircle } from "lucide-react";
import heroArt from "@/assets/images/hero-art.png";
import ceramicsImage from "@/assets/images/ceramics.png";
import paintingImage from "@/assets/images/painting.png";
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

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const userForm = useFormspree();
  const centerForm = useFormspree();
  const joinForm = useFormspree();

  const content = {
    en: {
      nav: {
        cta: "Join the waitlist"
      },
      hero: {
        headline: <>Culture that is <span className="text-secondary">lived</span></>,
        subheadline: <>A platform to discover and book creative activities near you.<br/><br/><span className="text-muted-foreground text-lg md:text-xl">Ceramics · Painting · Workshops · Writing · Theatre · Crafts<br/>and much more.</span></>,
        primaryCta: "Join the waitlist",
        secondaryCta: "For creative centers"
      },
      philosophy: {
        problem: "Why CultureCheck",
        problemText: <>We live surrounded by screens and digital content, but more and more people are looking for <span className="font-bold underline decoration-white/40">cultural experiences</span> that happen beyond them.<br/><br/>At the same time, discovering workshops, classes or cultural activities can be complicated and scattered.<br/><br/>CultureCheck was born to connect people with the <span className="font-bold underline decoration-white/40">culture that is lived by participating</span>.</>,
        vision: "Our Vision",
        visionText: <>We believe in a more <span className="font-bold underline decoration-white/40">active, close and accessible</span> culture.<br/><br/>CultureCheck connects people with workshops, creative spaces and cultural experiences, making <span className="font-bold underline decoration-white/40">discovering and creating</span> part of everyday life.<br/><br/>Our goal is to build a community where culture is explored, shared and <span className="font-bold underline decoration-white/40">lived</span>.</>
      },
      users: {
        title: "For You",
        benefits: [
          "Discover new creative activities",
          "Book workshops and cultural experiences",
          "Access curated creative spaces",
          "Connect with like-minded people"
        ],
        ctaTitle: "Join the waitlist",
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
        roles: ["Strategic Partners", "Cultural Advisors", "Investors", "Creative Ambassadors"],
        cta: "Let's Talk"
      },
      vision: {
        text: "Creating new ways to discover, create and share culture"
      }
    },
    es: {
      nav: {
        cta: "Únete a la lista de espera"
      },
      hero: {
        headline: <>Cultura que se <span className="text-[#c65a2e]">vive</span></>,
        subheadline: <>Una plataforma para descubrir y reservar actividades creativas cerca de ti.<br/><br/><span className="text-muted-foreground text-lg md:text-xl">Cerámica · Pintura · Talleres · Escritura · Teatro · Artesanía<br/>y mucho más.</span></>,
        primaryCta: "Únete a la lista de espera",
        secondaryCta: "Para centros creativos"
      },
      philosophy: {
        problem: "Por qué CultureCheck",
        problemText: <>Vivimos rodeados de pantallas y de contenido digital, pero cada vez más personas buscan <span className="font-bold underline decoration-white/40">experiencias culturales</span> que se vivan fuera de ellas.<br/><br/>Al mismo tiempo, descubrir talleres, clases o actividades culturales puede ser algo complicado y disperso.<br/><br/>CultureCheck nace para conectar a las personas con esa <span className="font-bold underline decoration-white/40">cultura que se vive participando</span>.</>,
        vision: "Nuestra Visión",
        visionText: <>Creemos en una cultura más <span className="font-bold underline decoration-white/40">activa, cercana y accesible</span>.<br/><br/>CultureCheck conecta a las personas con talleres, espacios creativos y experiencias culturales, facilitando que <span className="font-bold underline decoration-white/40">descubrir y crear</span> forme parte de la vida cotidiana.<br/><br/>Nuestro objetivo es construir una comunidad donde la cultura se explore, se comparta y <span className="font-bold underline decoration-white/40">se viva</span>.</>
      },
      users: {
        title: "Para Ti",
        benefits: [
          "Descubre nuevas actividades creativas",
          "Reserva talleres y experiencias culturales",
          "Accede a espacios creativos seleccionados",
          "Conecta con personas con intereses similares"
        ],
        ctaTitle: "Únete a la lista de espera",
        inputPlaceholder: "Tu correo electrónico",
        submit: "Enviar"
      },
      centers: {
        title: "Para Centros",
        benefits: [
          "Aumenta la visibilidad de tu espacio",
          "Atrae a nuevas audiencias",
          "Simplifica la gestión de reservas",
          "Forma parte de una red creativa"
        ],
        ctaTitle: "Conviértete en colaborador",
        namePlaceholder: "Nombre del Centro",
        emailPlaceholder: "Correo Electrónico",
        submit: "Solicitar ahora"
      },
      joinUs: {
        title: "Construye CultureCheck con nosotros",
        roles: ["Socios Estratégicos", "Asesores Culturales", "Inversores", "Embajadores Creativos"],
        cta: "Hablemos"
      },
      vision: {
        text: "Creando nuevas formas de descubrir, crear y compartir cultura"
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
          <Button 
            variant="outline" 
            className="font-subheading text-xs sm:text-sm md:text-lg rounded-none border-foreground hover:bg-foreground hover:text-background transition-colors px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 whitespace-nowrap"
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-foreground">
            {t.hero.headline}
          </h1>
          <p className="font-subheading text-xl md:text-2xl text-muted-foreground max-w-lg">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white font-subheading text-lg px-8 py-6" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
              {t.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background font-subheading text-lg px-8 py-6" onClick={() => document.getElementById("centers")?.scrollIntoView({ behavior: "smooth" })}>
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
      <section className="py-24 bg-[#c65a2e] text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <h2 className="text-sm font-sans tracking-widest text-white/70 mb-6 uppercase">{t.philosophy.problem}</h2>
              <p className="font-subheading text-lg md:text-xl leading-relaxed">
                {t.philosophy.problemText}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-sm font-sans tracking-widest text-white/70 mb-6 uppercase">{t.philosophy.vision}</h2>
              <p className="font-subheading text-lg md:text-xl leading-relaxed">
                {t.philosophy.visionText}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* For Users Section */}
      <section id="waitlist" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
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
                <li key={i} className="border-b border-muted pb-4">
                  {b}
                </li>
              ))}
            </ul>
            <div className="bg-muted p-8 mt-8">
              <h3 className="font-heading text-2xl mb-4">{t.users.ctaTitle}</h3>
              {userForm.status === "success" ? (
                <div className="flex items-center gap-2 text-green-600 font-subheading" data-testid="status-user-success">
                  <CheckCircle className="h-5 w-5" />
                  {lang === "es" ? "¡Gracias! Te contactaremos pronto." : "Thanks! We'll be in touch."}
                </div>
              ) : (
                <form className="flex gap-2" data-testid="form-user" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  await userForm.submit({ email, formType: "user" });
                  form.reset();
                }}>
                  <Input name="email" type="email" required placeholder={t.users.inputPlaceholder} className="rounded-none border-foreground bg-background" data-testid="input-user-email" />
                  <Button type="submit" disabled={userForm.status === "submitting"} className="rounded-none bg-primary hover:bg-primary/90" data-testid="button-user-submit">
                    {userForm.status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : t.users.submit}
                  </Button>
                </form>
              )}
              {userForm.status === "error" && (
                <p className="text-red-500 text-sm mt-2">{lang === "es" ? "Error al enviar. Inténtalo de nuevo." : "Submission failed. Please try again."}</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      {/* For Creative Centers Section */}
      <section id="centers" className="py-24 bg-accent text-accent-foreground px-6 md:px-12">
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
            <div className="bg-background p-10 mt-8 shadow-2xl border border-muted">
              <h3 className="font-heading text-3xl mb-6 text-accent">{t.centers.ctaTitle}</h3>
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
                  <Button type="submit" disabled={centerForm.status === "submitting"} className="w-full rounded-none bg-accent text-white hover:bg-accent/90 font-subheading text-xl h-14 transition-all hover:tracking-widest" data-testid="button-center-submit">
                    {centerForm.status === "submitting" ? <Loader2 className="h-5 w-5 animate-spin" /> : t.centers.submit}
                  </Button>
                </form>
              )}
              {centerForm.status === "error" && (
                <p className="text-red-500 text-sm mt-2">{lang === "es" ? "Error al enviar. Inténtalo de nuevo." : "Submission failed. Please try again."}</p>
              )}
            </div>
          </motion.div>
          <motion.div 
            className="relative h-[600px] hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <img src={paintingImage} alt="Abstract painting studio" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl text-primary uppercase tracking-widest">{t.joinUs.title}</h2>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-subheading text-sm text-foreground/60 py-4 uppercase tracking-widest">
            {t.joinUs.roles.map((r, i) => (
              <div key={i} className="flex items-center justify-center text-center">{r}</div>
            ))}
          </div>

          <div className="bg-background p-8 mt-6 shadow-lg border border-muted max-w-lg mx-auto">
            <h3 className="font-heading text-xl mb-4 text-foreground uppercase tracking-wide">{t.joinUs.cta}</h3>
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
                <div className="grid grid-cols-1 gap-3">
                  <Input name="name" type="text" required placeholder={lang === "es" ? "Nombre" : "Name"} className="rounded-none border-muted bg-muted/20 h-10 text-sm" data-testid="input-join-name" />
                  <Input name="email" type="email" required placeholder={t.centers.emailPlaceholder} className="rounded-none border-muted bg-muted/20 h-10 text-sm" data-testid="input-join-email" />
                </div>
                <textarea 
                  name="message"
                  placeholder={lang === "es" ? "Mensaje" : "Message"}
                  className="w-full min-h-[80px] p-3 rounded-none border border-muted bg-muted/20 focus:outline-none focus:ring-1 focus:ring-primary font-sans text-sm"
                  data-testid="input-join-message"
                />
                <Button type="submit" disabled={joinForm.status === "submitting"} className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 font-subheading text-sm h-10 transition-all uppercase tracking-widest" data-testid="button-join-submit">
                  {joinForm.status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : (lang === "es" ? "Enviar" : "Send")}
                </Button>
              </form>
            )}
            {joinForm.status === "error" && (
              <p className="text-red-500 text-sm mt-2">{lang === "es" ? "Error al enviar. Inténtalo de nuevo." : "Submission failed. Please try again."}</p>
            )}
          </div>
        </motion.div>
      </section>
      {/* Vision Section */}
      <section className="py-24 bg-primary text-primary-foreground px-6 md:px-12 text-center flex items-center justify-center min-h-[50vh] overflow-hidden">
        <div className="max-w-[90vw] mx-auto">
          <p className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.3] uppercase tracking-normal break-words">
            {t.vision.text}
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 border-t border-muted px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#F5F1E8]">
        <div className="font-heading text-2xl text-foreground flex items-start">
          CultureCheck<span className="text-[0.6em] ml-1 mt-0.5 leading-none">®</span>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
        </div>

        <div className="text-muted-foreground font-subheading text-sm">
          © {new Date().getFullYear()} CultureCheck. All rights reserved.
        </div>
      </footer>
    </div>
  );
}