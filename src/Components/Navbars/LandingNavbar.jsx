import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import i18n from "../../Config/i18n";


export default function LandingNavbar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
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
                <span className="ml-2">
                  {i18n.language === "es" ? "en" : "es"}
                </span>
              </button>
              <div className="bg-gray-300 w-[1px] h-5 "></div>
              <a
                href="/login"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {t("navbar.login")}
              </a>
            </div>
          </div>
        </nav>
    </div>
  )
}
