import { useState } from "react";
import NavbarLogin from "@/Components/Navbars/NavbarLogin";
import { useTranslation } from "react-i18next";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <NavbarLogin />
      <div className="grid md:grid-cols-2 min-h-screen w-full">
        <div className="hidden bg-[#388ddd] md:flex flex-col justify-center items-center text-center text-white p-16 rounded-lg shadow-lg relative">
          <h1 className="text-4xl font-bold mb-4 z-10">
            {t("header.welcome")}
          </h1>
          <p className="text-xl font-semibold z-10">
            {t("header.description")}
          </p>
          <div className="absolute bottom-0 left-0 w-full h-[150px] overflow-hidden text-[#a4caec]">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full fill-current"
            >
              <path d="M-10.48,-4.42 C64.09,47.88 371.78,135.70 531.45,22.22 L500.00,150.00 L0.00,150.00 Z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-8 md:p-16 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-gray-800">
            {t("navbar.login")}
          </h1>

          <form className="flex flex-col gap-4 w-full">
            <label htmlFor="email" className="flex flex-col relative">
              <span className="text-gray-600 font-semibold">
                {t("contact.form.email")}
              </span>
              <input
                type="email"
                id="email"
                placeholder={t("contact.form.emailPlaceholder")}
                className="mt-1 p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4caec]"
              />
              <FiMail
                className="absolute top-10 left-2 text-gray-400"
                size={20}
              />
            </label>

            <label htmlFor="password" className="flex flex-col relative">
              <span className="text-gray-600 font-semibold">
                {t("contact.form.password")}
              </span>
              <input
                type={showPassword ? "text" : "password"} // Cambiar tipo según estado
                id="password"
                placeholder={t("contact.form.passwordPlaceholder")}
                className="mt-1 p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4caec]"
              />
              <FiLock
                className="absolute top-10 left-2 text-gray-400"
                size={20}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-10 right-2 text-gray-400"
              >
                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
              </button>
            </label>

            <button
              type="submit"
              className="w-full bg-[#a4caec] hover:bg-[#90bce5] text-white font-semibold py-2 rounded-md transition duration-300"
            >
              {t("contact.form.enter")}
            </button>
          </form>

          <p className="text-gray-600 font-semibold">
            {t("contact.form.passwordOlvidate")}
            <a
              href="#"
              className="text-[#126fc0] ml-1 font-semibold hover:underline"
            >
              {t("contact.form.recover")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
