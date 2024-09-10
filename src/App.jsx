import { I18nextProvider } from "react-i18next";
import i18n from "./Config/i18n";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/Pages/LandingPage";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
