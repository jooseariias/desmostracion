import React, { useState } from "react";
import { FaBullseye, FaWhatsapp } from "react-icons/fa";
import { GiTargetArrows, GiAchievement } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";

import portada from "./assets/portada.jpg";
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
    <div>
      <nav className="bg-white shadow-lg fixed top-0 z-50 w-full py-4">
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
            <a
              href="/login"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Iniciar Sesión
            </a>
          </div>
        </div>
      </nav>

      <header className="header-background flex h-[90vh] items-center justify-center relative mt-[4rem]">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            Bienvenido E-Numbers
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Una empresa especializada en Estrategias Financieras y Fiscales
          </p>
          <div className="mt-8">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
              Empezar ahora
            </button>
          </div>
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
                  Ser la firma de consultoría financiera y fiscal más confiable
                  y reconocida en la región, innovando continuamente para
                  ofrecer las mejores soluciones a nuestros clientes y
                  contribuir al desarrollo económico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-white flex items-center gap-2 hover:text-gray-300"
              >
                <FaWhatsapp size={20} /> <span>Whatsapp</span>
              </a>
            </div>

            <p className="text-center md:text-right mt-4 md:mt-0">
              © 2024 E-Numbers. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
