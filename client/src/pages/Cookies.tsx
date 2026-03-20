import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center bg-[#F5F1E8] border-b border-muted shadow-sm">
        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors" data-testid="link-back-home">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-heading text-lg">CultureCheck</span>
        </Link>
      </nav>

      <main className="pt-24 pb-16 px-6 md:px-12 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl mb-4" data-testid="text-cookies-title">Política de Cookies</h1>
        <p className="font-subheading text-sm text-muted-foreground mb-12">Última actualización: 20 de marzo de 2026</p>

        <div className="space-y-10 font-subheading text-base leading-relaxed text-foreground/80">
          <section>
            <p>En CultureCheck (<a href="https://www.culturecheck.site" className="text-[#5b9bd5] hover:underline">https://www.culturecheck.site</a>) utilizamos cookies con el objetivo de mejorar la experiencia de usuario y analizar el uso de nuestra web.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas una página web. Sirven para reconocer tu navegador, recordar preferencias y recopilar información sobre la navegación.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">¿Qué tipos de cookies utilizamos?</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-base mb-2 text-foreground">1. Cookies técnicas (necesarias)</h3>
                <p>Estas cookies permiten el funcionamiento básico de la web y no requieren consentimiento.</p>
              </div>

              <div>
                <h3 className="font-heading text-base mb-2 text-foreground">2. Cookies de análisis</h3>
                <p className="mb-4">Utilizamos Google Analytics, un servicio de analítica web proporcionado por Google LLC, que nos permite conocer cómo los usuarios interactúan con la web.</p>
                <p className="mb-2">La información recogida incluye:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dirección IP (anonimizada)</li>
                  <li>Tipo de dispositivo</li>
                  <li>Navegador</li>
                  <li>Páginas visitadas</li>
                  <li>Duración de la visita</li>
                </ul>
                <p className="mt-4">Esta información se utiliza únicamente con fines estadísticos.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">¿Quién utiliza la información?</h2>
            <p>La información recogida es tratada por Google LLC y puede ser transferida fuera del Espacio Económico Europeo bajo garantías adecuadas.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">¿Cómo puedes gestionar las cookies?</h2>
            <p className="mb-4">Puedes aceptar o rechazar las cookies desde el banner de configuración al acceder a la web.</p>
            <p>También puedes eliminarlas desde tu navegador.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">Base legal</h2>
            <p>El uso de cookies analíticas se basa en el consentimiento del usuario.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">Contacto</h2>
            <p>Para cualquier duda, puedes contactar en: <a href="mailto:hola@culturecheck.site" className="text-[#5b9bd5] hover:underline">hola@culturecheck.site</a></p>
          </section>
        </div>
      </main>

      <footer className="py-8 border-t border-muted px-6 md:px-12 bg-[#F5F1E8]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-heading text-lg text-foreground flex items-start">
            CultureCheck<span className="text-[0.6em] ml-1 mt-0.5 leading-none">®</span>
          </div>
          <div className="flex gap-6 font-subheading text-sm text-muted-foreground">
            <Link href="/legal/aviso-legal" className="hover:text-primary transition-colors" data-testid="link-aviso-legal">Aviso Legal</Link>
            <Link href="/legal/privacidad" className="hover:text-primary transition-colors" data-testid="link-privacidad">Política de Privacidad</Link>
            <span className="text-foreground">Política de Cookies</span>
          </div>
          <div className="text-muted-foreground font-subheading text-sm">
            © {new Date().getFullYear()} CultureCheck
          </div>
        </div>
      </footer>
    </div>
  );
}
