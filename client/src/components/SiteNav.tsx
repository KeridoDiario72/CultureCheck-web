import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, ArrowRight } from "lucide-react";
import logoImage from "@/assets/images/logo-transparent-trimmed.png";

const MARKETPLACE_URL = "#";

interface SiteNavProps {
  lang: "en" | "es";
  onLangToggle: () => void;
  activePage?: "home" | "para-espacios" | "vision";
}

export function SiteNav({ lang, onLangToggle, activePage }: SiteNavProps) {
  const labels = {
    en: { spaces: "For spaces", vision: "Vision", cta: "Explore activities" },
    es: { spaces: "Para espacios", vision: "Visión", cta: "Explorar actividades" }
  };
  const t = labels[lang];

  const linkBase = "font-subheading text-sm transition-colors";
  const activeLink = `${linkBase} font-semibold text-[#c65a2e]`;
  const inactiveLink = `${linkBase} text-gray-600 hover:text-gray-900`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 px-4 md:px-8 flex items-center bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-6">

        {/* Left: Logo */}
        <div className="flex-shrink-0 h-9 flex items-center">
          <Link href="/">
            <img src={logoImage} alt="CultureCheck" className="h-full w-auto object-contain max-w-[130px] cursor-pointer" />
          </Link>
        </div>

        {/* Center: Nav links (desktop only) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/para-espacios" className={activePage === "para-espacios" ? activeLink : inactiveLink} data-testid="link-nav-spaces">
            {t.spaces}
          </Link>
          <Link href="/vision" className={activePage === "vision" ? activeLink : inactiveLink} data-testid="link-nav-vision">
            {t.vision}
          </Link>
        </div>

        {/* Right: social + lang + primary CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onLangToggle}
            className="font-subheading text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
            data-testid="button-lang-toggle"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a
            href="https://instagram.com/culturecheck_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors hidden sm:block"
            aria-label="Instagram"
            data-testid="link-instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="mailto:hola@culturecheck.site"
            className="text-gray-400 hover:text-gray-700 transition-colors hidden sm:block"
            aria-label="Email"
            data-testid="link-mail"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a href={MARKETPLACE_URL} data-testid="button-nav-cta">
            <Button className="bg-[#c65a2e] hover:bg-[#b04e26] text-white rounded-full font-subheading text-sm px-5 h-9 gap-1.5 shadow-sm">
              {t.cta} <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </a>
        </div>

      </div>
    </nav>
  );
}
