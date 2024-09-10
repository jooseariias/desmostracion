import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

export default function FormContac() {
  const { t } = useTranslation();
  return (
    <div>
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
    </div>
  );
}
