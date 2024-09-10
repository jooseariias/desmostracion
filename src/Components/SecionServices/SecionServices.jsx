import { useState } from "react";
import { useTranslation } from "react-i18next";

import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";

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

export default function SecionServices() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? servicesData : servicesData.slice(0, 4);

  return (
    <div>
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
            {t("services.title")}
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
              {showAll ? t("services.viewLess") : t("services.viewMore")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
