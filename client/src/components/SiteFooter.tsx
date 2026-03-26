import { Link } from "wouter";
import { Mail, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="py-12 border-t border-gray-200 px-6 md:px-12 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="font-heading text-xl text-[#1A1A1A] flex items-start">
            CultureCheck<span className="text-[0.6em] ml-1 mt-0.5 leading-none">®</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/culturecheck_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-subheading text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
              data-testid="link-instagram"
            >
              <Instagram className="h-4 w-4" />
              @culturecheck_
            </a>
            <a
              href="mailto:hola@culturecheck.site"
              className="flex items-center gap-1.5 font-subheading text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
              data-testid="link-mail"
            >
              <Mail className="h-4 w-4" />
              hola@culturecheck.site
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-subheading text-sm">
            <Link href="/legal/aviso-legal" className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors" data-testid="link-aviso-legal">Aviso Legal</Link>
            <Link href="/legal/privacidad" className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors" data-testid="link-privacidad">Política de Privacidad</Link>
            <Link href="/legal/cookies" className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors" data-testid="link-cookies">Política de Cookies</Link>
          </div>
          <div className="font-subheading text-sm text-[#1A1A1A]/40">
            © {new Date().getFullYear()} CultureCheck
          </div>
        </div>

      </div>
    </footer>
  );
}
