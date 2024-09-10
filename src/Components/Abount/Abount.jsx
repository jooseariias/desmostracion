import { useTranslation } from "react-i18next";
import { FaBullseye } from "react-icons/fa";
import { GiTargetArrows } from "react-icons/gi";


export default function () {
    const { t } = useTranslation();
  return (
    <div>
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
    </div>
  );
}
