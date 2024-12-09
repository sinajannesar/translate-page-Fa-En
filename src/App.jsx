import Camponens from "./camponens/Camponens";
import { useTranslation } from "react-i18next";

export default function App() {

  const {i18n } = useTranslation();

  return (
    <div className={`${i18n.language === "en" ? "ltr" : "rtl"}`}>
      <Camponens />
    </div>
  )
}
