import { IoLanguage, IoPersonCircle, IoLogOut } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function NavbarLogin() {
  const { t, i18n } = useTranslation();
  const userName = "John Doe"; // Cambia esto por la lógica real para obtener el nombre del usuario

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log("Cerrar sesión");
  };

  return (
    <div>
      <nav className="bg-white shadow-md fixed top-0 z-50 w-full py-4">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <a
            href="/"
            className="flex items-center text-xl font-bold text-gray-800 hover:text-blue-600 transition"
          >
            <span className="ml-2">E-Numbers</span>
          </a>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                const newLang = i18n.language === "es" ? "en" : "es";
                changeLanguage(newLang);
              }}
              className="flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <IoLanguage size={20} />
              <span className="ml-2 font-semibold">
                {i18n.language === "es" ? "En" : "Es"}
              </span>
            </button>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-gray-700">
                <IoPersonCircle size={20} />
                <span className="ml-2 font-semibold">{userName}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-700 hover:text-red-600 transition"
              >
                <IoLogOut size={20} />
                <span className="ml-2 font-semibold">Exit</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
