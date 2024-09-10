import React, { useState } from "react";
import { FaBullseye, FaWhatsapp } from "react-icons/fa";
import { GiTargetArrows } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";

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
    title: "Planificación Fiscal",
    description:
      "Estrategias para minimizar la carga tributaria dentro de la ley. Optimización de deducciones fiscales y asesoría sobre impuestos locales, estatales, federales e internacionales.",
  },
  {
    img: img3,
    title: "Estrategias Financieras",
    description:
      "Asesoría en inversiones para maximizar el rendimiento financiero. Planificación financiera a corto y largo plazo. Gestión de riesgos financieros.",
  },
  {
    img: img4,
    title: "Consultoría Empresarial",
    description:
      "Asesoramiento sobre el tipo de entidad jurídica a formar y recomendaciones sobre en qué estados o países establecer una empresa para optimizar los beneficios fiscales y regulatorios.",
  },
  {
    img: img5,
    title: "Gestión de Patrimonios",
    description:
      "Asesoría para la protección de activos personales y corporativos, planificación de herencias y sucesiones, y estrategias de preservación de capital.",
  },
  {
    img: img6,
    title: "Cumplimiento Fiscal",
    description:
      "Preparación y presentación de declaraciones de impuestos, manejo de auditorías fiscales, y asesoría en el cumplimiento de las normativas tributarias.",
  },
  {
    img: img7,
    title: "Asesoría en Fusiones y Adquisiciones",
    description:
      "Evaluación fiscal y financiera de adquisiciones y fusiones, planificación fiscal en transacciones de compra-venta de empresas, y optimización financiera y fiscal en reestructuraciones corporativas.",
  },
  {
    img: img8,
    title: "Planificación para la Internacionalización",
    description:
      "Asesoría fiscal y financiera para empresas que buscan expandirse internacionalmente. Análisis de tratados fiscales entre países. Estrategias para evitar la doble imposición y maximizar los beneficios fiscales globales.",
  },
  {
    img: img9,
    title: "Consultoría Financiera Personal",
    description:
      "Planificación para la jubilación y ahorro a largo plazo. Análisis y optimización de deudas y créditos. Estrategias para la educación financiera.",
  },
];

const LandingPage = () => {
  const [language, setLanguage] = useState("ES");
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? servicesData : servicesData.slice(0, 4);

  return (
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
              onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
              className="flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <IoLanguage size={20} />
              <span className="ml-2">{language === "ES" ? "EN" : "ES"}</span>
            </button>
            <div className="bg-gray-300 w-[1px] h-5 "></div>
            <a
              href="/login"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Iniciar Sesión
            </a>
          </div>
        </div>
      </nav>

      <header className="relative flex flex-col h-[100vh] bg-gradient-to-b from-blue-500 to-white items-center justify-center text-center text-blue-800 overflow-hidden">
        <div className="relative z-10 px-6">
          <h1 className="text-4xl font-bold md:text-6xl mb-4">
            Bienvenido a E-Numbers
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Una empresa especializada en Estrategias Financieras y Fiscales
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
            Empezar ahora
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
            Nuestros Servicios
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
                    alt={service.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-semibold text-blue-500 hover:text-blue-600 transition underline"
            >
              {showAll ? "Ver Menos" : "Ver Más"}
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Misión y Visión
              </h2>
              <div className="absolute inset-x-0 bottom-0 flex justify-center">
                {/* <img src={img6} alt="Decorativo" className="w-full h-auto" /> */}
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-105">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center text-blue-800">
                  <FaBullseye size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Misión</h3>
                <p className="text-gray-700">
                  Proporcionar soluciones integrales en estrategias financieras
                  y fiscales, ayudando a nuestros clientes a alcanzar sus metas
                  económicas y a asegurar un futuro próspero y estable.
                </p>
              </div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-105">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center text-blue-800">
                  <GiTargetArrows size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Visión</h3>
                <p className="text-gray-700">
                  Ser líderes en el ámbito de la consultoría financiera y
                  fiscal, reconocidos por nuestra excelencia, innovación y
                  compromiso con la satisfacción del cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-16 bg-gray-200 overflow-hidden">
  <div className="absolute inset-x-0 bottom-0  overflow-hidden">
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
      Contacto
    </h2>
    <div className="flex flex-col md:flex-row justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 md:mb-0 md:w-1/2 lg:w-1/3">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          Síguenos en WhatsApp
        </h3>
        <a
          href="https://wa.me/1234567890"
          className="flex items-center text-green-500 hover:text-green-600 transition"
        >
          <FaWhatsapp size={24} className="mr-2" />
          Enviar mensaje
        </a>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/2 lg:w-1/3">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          Contáctanos
        </h3>
        <form action="#" method="post" className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            rows="4"
            className="p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      <footer className="bg-[#a4caec] text-black py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} E-Numbers. Todos los derechos
                reservados.
              </p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-black hover:text-white transition">
                Política de Privacidad
              </a>
              <a href="#" className="text-black hover:text-white transition">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
