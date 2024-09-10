import React, { useState } from "react";
import { FaBullseye, FaWhatsapp } from "react-icons/fa";
import { GiTargetArrows } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "./Config/i18n";

import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";

const servicesData = [
  {
    img: img2,
    title: "services.items.0.title",
    description: "services.items.0.description",
  },
  {
    img: img3,
    title: "services.items.1.title",
    description: "services.items.1.description",
  },
  {
    img: img4,
    title: "services.items.2.title",
    description: "services.items.2.description",
  },
  {
    img: img5,
    title: "services.items.3.title",
    description: "services.items.3.description",
  },
  {
    img: img6,
    title: "services.items.4.title",
    description: "services.items.4.description",
  },
  {
    img: img7,
    title: "services.items.5.title",
    description: "services.items.5.description",
  },
  {
    img: img8,
    title: "services.items.6.title",
    description: "services.items.6.description",
  },
  {
    img: img9,
    title: "services.items.7.title",
    description: "services.items.7.description",
  },
];



const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? servicesData : servicesData.slice(0, 4);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div className="font-sans text-gray-900">
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

        <section id="services" className="py-16 bg-gray-100">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
      {t('services.title')}
    </h2>
    <div className="flex flex-col gap-8">
      {visibleServices.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl`}
        >
          <div className="md:w-1/2 p-4 md:p-6">
            <img
              src={service.img}
              alt={t(service.title)}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-4 md:p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {t(service.title)}
            </h3>
            <p className="text-gray-600">{t(service.description)}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 text-center">
      <button
        onClick={() => setShowAll(!showAll)}
        className="font-semibold text-blue-500 hover:text-blue-600 transition underline"
      >
        {showAll ? t('services.viewLess') : t('services.viewMore')}
      </button>
    </div>
  </div>
</section>


        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  {t("missionVision.missionTitle")} &{" "}
                  {t("missionVision.visionTitle")}
                </h2>
                <div className="absolute inset-x-0 bottom-0 flex justify-center"></div>
              </div>
              <div className="space-y-8">
                <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-105">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center text-blue-800">
                    <FaBullseye size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {t("missionVision.missionTitle")}
                  </h3>
                  <p className="text-gray-700">
                    {t("missionVision.missionDescription")}
                  </p>
                </div>
                <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-105">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center text-blue-800">
                    <GiTargetArrows size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {t("missionVision.visionTitle")}
                  </h3>
                  <p className="text-gray-700">
                    {t("missionVision.visionDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative py-16 bg-gray-200 overflow-hidden"
        >
          <div className="absolute inset-x-0 bottom-0 overflow-hidden">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="w-full h-[300px] fill-current text-[#a4caec]"
            >
              <path d="M-15.52,55.77 C100.73,-112.97 267.21,241.30 500.27,2.48 L500.00,150.00 L0.00,150.00 Z" />
            </svg>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
              {t("contact.title")}
            </h2>
            <div className="flex flex-col md:flex-row justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8 md:mb-0 md:w-1/2 lg:w-1/3">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t("contact.whatsapp.title")}
                </h3>
                <a
                  href="https://wa.me/1234567890"
                  className="flex items-center text-green-500 hover:text-green-600 transition"
                >
                  <FaWhatsapp size={24} className="mr-2" />
                  {t("contact.whatsapp.message")}
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/2 lg:w-1/3">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t("contact.form.title")}
                </h3>
                <form action="#" method="post" className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("contact.form.namePlaceholder")}
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                  <textarea
                    name="message"
                    placeholder={t("contact.form.messagePlaceholder")}
                    rows="4"
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                  >
                    {t("contact.form.submitButton")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p>
              &copy; {new Date().getFullYear()} E-Numbers.{" "}
              {t("footer.rightsReserved")}
            </p>
          </div>
        </footer>
      </div>
    </I18nextProvider>
  );
};

export default LandingPage;
