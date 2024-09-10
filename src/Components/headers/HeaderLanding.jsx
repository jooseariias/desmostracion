import { useTranslation } from "react-i18next";

export default function HeaderLanding() {
    const { t } = useTranslation();
  return (
    <div>
        <header className="relative flex flex-col h-[100vh] bg-gradient-to-b from-blue-500 to-white items-center justify-center text-center text-blue-800 overflow-hidden">
          <div className="relative z-10 px-6">
            <h1 className="text-4xl font-bold md:text-6xl mb-4">
              {t("header.welcome")}
            </h1>
            <p className="text-lg md:text-xl mb-8">{t("header.description")}</p>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
              {t("header.startNow")}
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="w-full h-[200px] fill-current text-[#a4caec]"
            >
              <path d="M0.00,49.98 C104.68,259.05 174.09,25.17 500.27,2.48 L500.00,150.00 L0.00,150.00 Z" />
            </svg>
          </div>
        </header>
    </div>
  )
}
