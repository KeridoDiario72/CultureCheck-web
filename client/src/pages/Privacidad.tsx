import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center bg-[#F5F1E8] border-b border-muted shadow-sm">
        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors" data-testid="link-back-home">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-heading text-lg">CultureCheck</span>
        </Link>
      </nav>

      <main className="pt-24 pb-16 px-6 md:px-12 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl mb-12" data-testid="text-privacidad-title">Política de Privacidad</h1>

        <div className="space-y-10 font-subheading text-base leading-relaxed text-foreground/80">
          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">1. Responsable del tratamiento</h2>
            <p className="mb-4">El responsable del tratamiento de los datos personales recogidos a través del sitio web es:</p>
            <div className="space-y-1 pl-4 border-l-2 border-[#5b9bd5] mb-4">
              <p><strong>CultureCheck</strong></p>
              <p><strong>Correo electrónico de contacto:</strong> hola@culturecheck.site</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">2. Datos que recopilamos</h2>
            <p className="mb-4">A través del sitio web se pueden recopilar datos personales cuando el usuario los facilita voluntariamente a través de formularios de contacto o comunicación directa.</p>
            <p className="mb-2">Estos datos pueden incluir:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre</li>
              <li>Dirección de correo electrónico</li>
              <li>Información proporcionada en formularios o mensajes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">3. Finalidad del tratamiento</h2>
            <p className="mb-2">Los datos personales podrán utilizarse para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a consultas realizadas a través del sitio web</li>
              <li>Gestionar solicitudes de información sobre la plataforma</li>
              <li>Comunicar información relacionada con CultureCheck</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">4. Base legal del tratamiento</h2>
            <p>El tratamiento de los datos personales se basa en el consentimiento del usuario al enviar un formulario o contactar con la plataforma.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">5. Conservación de los datos</h2>
            <p>Los datos personales se conservarán únicamente durante el tiempo necesario para atender la solicitud del usuario o mientras exista una relación de comunicación con el mismo.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">6. Derechos del usuario</h2>
            <p className="mb-2">El usuario puede ejercer en cualquier momento sus derechos de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceso</li>
              <li>Rectificación</li>
              <li>Supresión</li>
              <li>Limitación del tratamiento</li>
              <li>Oposición</li>
              <li>Portabilidad de los datos</li>
            </ul>
            <p className="mt-4">Para ello puede enviar una solicitud al correo electrónico indicado anteriormente.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">7. Seguridad de los datos</h2>
            <p>Se adoptan las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su pérdida, alteración o acceso no autorizado.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">8. Cambios en la política de privacidad</h2>
            <p>CultureCheck podrá actualizar la presente Política de Privacidad para adaptarla a cambios legislativos o a modificaciones en el funcionamiento del sitio web.</p>
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
            <span className="text-foreground">Política de Privacidad</span>
            <Link href="/legal/cookies" className="hover:text-primary transition-colors" data-testid="link-cookies">Política de Cookies</Link>
          </div>
          <div className="text-muted-foreground font-subheading text-sm">
            © {new Date().getFullYear()} CultureCheck
          </div>
        </div>
      </footer>
    </div>
  );
}
