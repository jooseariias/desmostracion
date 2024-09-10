import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div>
     <footer className="bg-[#a4caec] text-[#333] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contáctanos</h4>
            <div className="space-y-2">
              <p>Teléfono: +1 (555) 123-4567</p>
              <p>Email: info@example.com</p>
              <p>Dirección: 123 Main St, Anytown USA</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces</h4>
            <nav className="space-y-2">
              <a href="#" className="hover:text-primary" >
                Inicio
              </a>
              <a href="#" className="hover:text-primary" >
                Sobre Nosotros
              </a>
              <a href="#" className="hover:text-primary" >
                Servicios
              </a>
              <a href="#" className="hover:text-primary" >
                Contacto
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Recursos</h4>
            <nav className="space-y-2">
              <a href="#" className="hover:text-primary" >
                Blog
              </a>
              <a href="#" className="hover:text-primary" >
                Preguntas Frecuentes
              </a>
              <a href="#" className="hover:text-primary" >
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary" >
                Términos de Uso
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Suscríbete</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Ingresa tu email"
                className="w-full rounded-md border border-[#ccc] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="w-full rounded-md bg-primary text-white px-4 py-2 hover:bg-primary-dark">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-[#666]">
          &copy; 2024 Example Company. Todos los derechos reservados.
        </div>
      </div>
    </footer>
    </div>
  );
}
