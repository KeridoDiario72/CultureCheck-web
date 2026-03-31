import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import logoImage from "@/assets/images/logo-transparent-trimmed.png";

export const MARKETPLACE_URL = "#";

interface SiteNavProps {
  lang: "en" | "es";
  onLangToggle: () => void;
  activePage?: "home" | "para-espacios" | "vision";
}

export function SiteNav({ lang, onLangToggle, activePage }: SiteNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const labels = {
    en: { spaces: "For spaces", vision: "Purpose", cta: "Explore activities" },
    es: { spaces: "Para espacios", vision: "Propósito", cta: "Explorar actividades" }
  };
  const t = labels[lang];

  const baseLink = "font-subheading text-sm transition-colors";
  const active = `${baseLink} font-semibold text-[#2C47C7]`;
  const inactive = `${baseLink} text-[#1A1A1A]/70 hover:text-[#1A1A1A]`;

  const mobileLinkBase = "font-subheading text-base py-3 border-b border-gray-100 transition-colors block w-full text-left";
  const mobileLinkActive = `${mobileLinkBase} font-semibold text-[#2C47C7]`;
  const mobileLinkInactive = `${mobileLinkBase} text-[#1A1A1A]/70`;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 px-4 md:px-8 flex items-center bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex-shrink-0 h-9 flex items-center">
            <Link href="/">
              <img src={logoImage} alt="CultureCheck" className="h-full w-auto object-contain max-w-[130px] cursor-pointer" />
            </Link>
          </div>

          {/* Center links — desktop only */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/para-espacios" className={activePage === "para-espacios" ? active : inactive} data-testid="link-nav-spaces">
              {t.spaces}
            </Link>
            <Link href="/vision" className={activePage === "vision" ? active : inactive} data-testid="link-nav-vision">
              {t.vision}
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onLangToggle}
              className="font-subheading text-xs uppercase tracking-widest text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
              data-testid="button-lang-toggle"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <a href={MARKETPLACE_URL} className="hidden md:block" data-testid="button-nav-cta">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full font-subheading text-sm px-5 h-9 gap-1.5 shadow-sm">
                {t.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </a>
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-1.5 text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Abrir menú"
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile dropdown overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop — closes menu when tapping outside */}
          <div
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          {/* Menu panel */}
          <div className="fixed top-16 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg px-6 pb-5 flex flex-col md:hidden">
            <Link
              href="/para-espacios"
              className={activePage === "para-espacios" ? mobileLinkActive : mobileLinkInactive}
              data-testid="link-mobile-nav-spaces"
            >
              {t.spaces}
            </Link>
            <Link
              href="/vision"
              className={activePage === "vision" ? mobileLinkActive : mobileLinkInactive}
              data-testid="link-mobile-nav-vision"
            >
              {t.vision}
            </Link>
            <a href={MARKETPLACE_URL} className="mt-4" data-testid="button-mobile-nav-cta">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full font-subheading text-sm h-10 gap-1.5 shadow-sm">
                {t.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </>
      )}
    </>
  );
}
