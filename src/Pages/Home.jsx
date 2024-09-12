import { useState } from "react";
import NavBarUser from "@/Components/Navbars/NavBarUsers";
import InputField from "@/Components/Inputs/InputField";
import {
  FaPhone,
  FaUser,
  FaAddressCard,
  FaDollarSign,
  FaBriefcase,
  FaHome,
  FaPlus,
  FaCalendar,
} from "react-icons/fa";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [assetsList, setAssetsList] = useState([{ asset: "", value: "" }]);
  const [socialMedia, setSocialMedia] = useState([""]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleAddSocialMedia = () => {
    setSocialMedia([...socialMedia, ""]);
  };

  const handleSocialMediaChange = (index, value) => {
    const updatedSocialMedia = [...socialMedia];
    updatedSocialMedia[index] = value;
    setSocialMedia(updatedSocialMedia);
  };

  const handleAssetChange = (index, field, value) => {
    const newAssets = [...assetsList];
    newAssets[index][field] = value;
    setAssetsList(newAssets);
  };

  const addAsset = () => {
    setAssetsList([...assetsList, { asset: "", value: "" }]);
  };

  const removeAsset = (index) => {
    const newAssets = assetsList.filter((_, i) => i !== index);
    setAssetsList(newAssets);
  };

  return (
    <div className="relative">
      <NavBarUser />
      <section className="mt-28 mb-[150px]">
        {" "}
        {/* Added margin bottom for space */}
        <form className="p-6 bg-white rounded-lg shadow-md space-y-6">
          {/* Personal Information */}
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-lg font-semibold mb-4">Información Personal</h2>
            <InputField
              type="text"
              id="fullName"
              placeholder="Ingresa tu nombre completo"
              label="Nombre Completo"
              icon={FaUser}
            />
            <InputField
              type="number"
              id="phone"
              placeholder="Ingresa tu teléfono"
              label="Teléfono"
              icon={FaPhone}
            />
            <InputField
              type="text"
              id="ssn"
              placeholder="Ingresa tu SSN o ITIN"
              label="Seguro Social o ITIN"
              icon={FaAddressCard}
            />
            <InputField
              type="date"
              id="dob"
              label="Fecha de Nacimiento"
              icon={FaCalendar}
            />
            <InputField
              type="select"
              id="maritalStatus"
              label="Estado Civil"
              selectOptions={[
                { value: "single", label: "Soltero" },
                { value: "married", label: "Casado" },
                { value: "divorced", label: "Divorciado" },
              ]}
            />
          </div>

          {/* Social Media */}
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-lg font-semibold mb-4">Redes Sociales</h2>
            {socialMedia.map((social, index) => (
              <InputField
                key={index}
                type="text"
                value={social}
                onChange={(e) => handleSocialMediaChange(index, e.target.value)}
                placeholder="Ingresa tus redes sociales"
              />
            ))}
            <button
              type="button"
              onClick={handleAddSocialMedia}
              className="mt-2 flex items-center text-[#a4caec] hover:text-[#4495e0] font-semibold transition duration-300"
            >
              <FaPlus className="mr-2" /> Añadir otra red social
            </button>
          </div>

          {/* Address and Work Information */}
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-lg font-semibold mb-4">Dirección y Trabajo</h2>
            <InputField
              type="text"
              id="currentAddress"
              placeholder="Ingresa tu dirección actual"
              label="Dirección Actual"
              icon={FaHome}
            />
            <InputField
              type="text"
              id="previousAddress"
              placeholder="Ingresa tu dirección anterior"
              label="Dirección Anterior (últimos 2 años)"
              icon={FaHome}
            />
            <InputField
              type="text"
              id="currentWork"
              placeholder="Ingresa tu trabajo actual"
              label="Trabajo Actual"
              icon={FaBriefcase}
            />
            <InputField
              type="text"
              id="previousWork"
              placeholder="Ingresa tu trabajo anterior"
              label="Trabajo Anterior (últimos 2 años)"
              icon={FaBriefcase}
            />
          </div>

          {/* Financial Information */}
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-lg font-semibold mb-4">
              Información Financiera
            </h2>
            <InputField
              type="number"
              id="salary"
              placeholder="Ingresa tu salario"
              label="Salario o Tarifa"
              icon={FaDollarSign}
            />
            <InputField
              type="text"
              id="overtime"
              placeholder="Ingresa las horas extra"
              label="Horas Extra"
            />
            <InputField
              type="text"
              id="taxes"
              placeholder="¿Qué años declaraste impuestos?"
              label="Declaraste Taxes (últimos 2 años)"
            />
            <InputField
              type="text"
              id="bankAccount"
              placeholder="¿Cuántos años tienes cuenta?"
              label="¿Tienes Cuenta de Banco?"
            />
            <InputField
              type="number"
              id="monthlyDeposits"
              placeholder="¿Cuánto son tus depósitos mensuales?"
              label="Depósitos Mensuales"
            />
            <InputField
              type="number"
              id="bankMoney"
              placeholder="¿Cuánto dinero tienes en el banco?"
              label="Dinero en el Banco"
              icon={FaDollarSign}
            />
          </div>

          {/* Assets Section */}
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-lg font-semibold mb-4">Activos</h2>
            {assetsList.map((assetItem, index) => (
              <div key={index} className="mb-4 ">
                <InputField
                  type="text"
                  id={`asset-${index}`}
                  placeholder="¿Qué activo tienes?"
                  value={assetItem.asset}
                  onChange={(e) =>
                    handleAssetChange(index, "asset", e.target.value)
                  }
                  label={`Activo ${index + 1}`}
                />
                <InputField
                  type="number"
                  id={`value-${index}`}
                  placeholder="¿Cuál es el valor de este activo?"
                  value={assetItem.value}
                  onChange={(e) =>
                    handleAssetChange(index, "value", e.target.value)
                  }
                  label={`Valor del Activo ${index + 1}`}
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeAsset(index)}
                    className="text-red-500 font-semibold"
                  >
                    Eliminar Activo
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addAsset}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              + Agregar otro activo
            </button>
          </div>

          {/* Goals and Investment */}
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-lg font-semibold mb-4">Metas e Inversión</h2>
            <InputField
              type="text"
              id="shortTermGoals"
              placeholder="¿Qué metas tienes a corto plazo?"
              label="Metas a Corto Plazo"
            />
            <InputField
              type="text"
              id="longTermGoals"
              placeholder="¿Qué metas tienes a largo plazo?"
              label="Metas a Largo Plazo"
            />
            <InputField
              type="number"
              id="investment"
              placeholder="¿Cuánto estarías dispuesto a invertir?"
              label="¿Cuánto estarías dispuesto a invertir en tus planes?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#a4caec] hover:bg-[#4495e0] text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Actualizar Tus datos
          </button>
        </form>
      </section>

    </div>
  );
}
