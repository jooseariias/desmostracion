import { useTranslation } from "react-i18next";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import NavBarLogin from "@/Components/Navbars/NavbarLogin";

export default function RegisterCode() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState(new Array(6).fill(""));
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  return (
    <div>
      <NavBarLogin />
      <section className="relative flex justify-center items-center h-screen bg-gray-100">
        <div className="relative z-10 flex flex-col justify-center items-center w-[90%] md:w-[60%] lg:w-[40%] gap-4 p-8 md:p-16 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-8 text-gray-800">
            {t("registerCode.title")}
          </h1>

          <form className="flex flex-col gap-6 w-full">
            <label htmlFor="email" className="flex flex-col relative">
              <span className="text-gray-600 font-semibold">
                {t("registerCode.email")}
              </span>
              <input
                type="email"
                id="email"
                placeholder={t("contact.form.emailPlaceholder")}
                className="mt-1 p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4caec]"
              />
              <FiMail
                className="absolute top-9 left-2 text-gray-400"
                size={20}
              />
            </label>

            <label htmlFor="password" className="flex flex-col relative">
              <span className="text-gray-600 font-semibold">
                {t("registerCode.password")}
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder={t("contact.form.passwordPlaceholder")}
                className="mt-1 p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4caec]"
              />
              <FiLock
                className="absolute top-9 left-2 text-gray-400"
                size={20}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-9 right-2 text-gray-400"
              >
                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
              </button>
            </label>

            <label htmlFor="code" className="flex flex-col">
              <span className="text-gray-600 font-semibold">
                {t("registerCode.enterCode")}
              </span>
              <div className="flex justify-center gap-2 mt-5">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    placeholder="_"
                    value={digit}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    className="w-12 h-12 text-center text-lg border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#a4caec]"
                  />
                ))}
              </div>
            </label>

            <button
              type="submit"
              className="w-full bg-[#2988db] hover:bg-[#4095e4] text-white font-semibold py-2 rounded-md transition duration-300"
            >
              {t("registerCode.register")}
            </button>
          </form>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[450px] overflow-hidden text-[#a4caec] z-0">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full fill-current"
          >
            <path d="M0.00,49.98 C149.99,150.00 360.22,-13.30 512.47,2.48 L500.00,150.00 L0.00,150.00 Z" />
          </svg>
        </div>
      </section>
    </div>
  );
}
