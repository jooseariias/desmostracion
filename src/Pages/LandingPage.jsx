///importacion de componentes
import LandingNavbar from "@/Components/Navbars/LandingNavbar";
import HeaderLanding from "@/Components/headers/HeaderLanding";
import SecionServices from "@/Components/SecionServices/SecionServices";
import Abount from "@/Components/Abount/Abount";
import FormContac from "@/Components/Forms/FormContac";
import Footer from "@/Components/Footers/Footer";

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-900">
      <LandingNavbar />
      <HeaderLanding />
      <SecionServices />
      <Abount />
      <FormContac />
      <Footer />
    </div>
  );
};

export default LandingPage;
