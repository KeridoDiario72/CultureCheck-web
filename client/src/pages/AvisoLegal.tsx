import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center bg-[#F5F1E8] border-b border-muted shadow-sm">
        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors" data-testid="link-back-home">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-heading text-lg">CultureCheck</span>
        </Link>
      </nav>

      <main className="pt-24 pb-16 px-6 md:px-12 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl mb-12" data-testid="text-aviso-legal-title">Aviso Legal</h1>

        <div className="space-y-10 font-subheading text-base leading-relaxed text-foreground/80">
          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">1. Información general</h2>
            <p className="mb-4">En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que el presente sitio web es titularidad de:</p>
            <div className="space-y-1 pl-4 border-l-2 border-[#FF6A00] mb-4">
              <p><strong>Titular:</strong> CultureCheck</p>
              <p><strong>Actividad:</strong> Plataforma digital para el descubrimiento y reserva de actividades culturales y creativas.</p>
              <p><strong>Correo electrónico de contacto:</strong> hola@culturecheck.site</p>
              <p><strong>Sitio web:</strong> https://culture-check-web.vercel.app/</p>
            </div>
            <p>El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación plena de las condiciones recogidas en este Aviso Legal.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">2. Objeto del sitio web</h2>
            <p className="mb-4">El sitio web tiene como finalidad ofrecer información sobre CultureCheck, una plataforma digital que permite descubrir y reservar actividades culturales y creativas ofrecidas por distintos espacios y centros culturales.</p>
            <p>La información publicada en el sitio web tiene carácter informativo y puede ser modificada en cualquier momento sin previo aviso.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">3. Condiciones de uso</h2>
            <p className="mb-4">El usuario se compromete a utilizar el sitio web de conformidad con la legislación vigente, la buena fe y el orden público.</p>
            <p className="mb-2">Queda prohibido:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar el sitio web con fines ilícitos o contrarios a la normativa vigente.</li>
              <li>Realizar cualquier acción que pueda dañar, inutilizar o sobrecargar el sitio web.</li>
              <li>Intentar acceder a áreas restringidas del sistema sin autorización.</li>
            </ul>
            <p className="mt-4">El titular se reserva el derecho a suspender o retirar el acceso al sitio web a aquellos usuarios que incumplan estas condiciones.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">4. Propiedad intelectual e industrial</h2>
            <p className="mb-4">Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, diseño, estructura y código, son propiedad del titular o cuentan con las licencias correspondientes.</p>
            <p>Queda prohibida la reproducción, distribución o modificación de dichos contenidos sin autorización expresa del titular.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">5. Responsabilidad</h2>
            <p className="mb-4">El titular no se hace responsable de posibles errores en los contenidos del sitio web, interrupciones del servicio o daños derivados del uso del sitio web.</p>
            <p>El titular podrá modificar el contenido del sitio web en cualquier momento sin necesidad de previo aviso.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">6. Enlaces externos</h2>
            <p>El sitio web puede contener enlaces a páginas externas. El titular no se responsabiliza del contenido o políticas de privacidad de dichos sitios.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl mb-4 text-foreground">7. Legislación aplicable</h2>
            <p>El presente Aviso Legal se rige por la legislación española.</p>
          </section>
        </div>
      </main>

      <footer className="py-8 border-t border-muted px-6 md:px-12 bg-[#F5F1E8]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-heading text-lg text-foreground flex items-start">
            CultureCheck<span className="text-[0.6em] ml-1 mt-0.5 leading-none">®</span>
          </div>
          <div className="flex gap-6 font-subheading text-sm text-muted-foreground">
            <span className="text-foreground">Aviso Legal</span>
            <Link href="/legal/privacidad" className="hover:text-primary transition-colors" data-testid="link-privacidad">Política de Privacidad</Link>
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
