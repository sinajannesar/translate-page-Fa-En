import logo from "../../../assets/logo.png";
import { useTranslation } from "react-i18next";

export default function Header_Engilish() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en"; // اگر زبان فعلی انگلیسی است، به فارسی تغییر بده و بالعکس
    i18n.changeLanguage(newLang);
  };

  

  return (
    <>
      <div className="">
        <div className="flex justify-end bg-background">
          <div className="mt-14 flex mr-[320px] gap-10 ">
            <button className="w-[150px] h-[70px] bg-backbutton rounded-2xl border border-black shadow-[6px_6px_1px_rgba(0,0,0,1)] hover:bg-red-400  hover:shadow-[8px_8px_20px_rgba(0,0,0,0.9)] active:shadow-none text-[25px] transition ">
              {t("Register")}
            </button>
            <button className="w-[150px] h-[70px] bg-backbutton2 rounded-2xl border border-black  shadow-[6px_6px_1px_rgba(0,0,0,1)] hover:shadow-[8px_8px_20px_rgba(0,0,0,0.9)] active:shadow-none text-[30px] transition">
              {t("Login")}
            </button>

            <button
              onClick={toggleLanguage}
              className="w-[150px] h-[70px] bg-emerald-400 rounded-2xl border border-black  shadow-[6px_6px_1px_rgba(0,0,0,1)] hover:shadow-[8px_8px_20px_rgba(0,0,0,0.9)] active:shadow-none text-[30px] transition"
            >
              {i18n.language === "en"
                ? t("Persian")
                : t("English")}
            </button>
          </div>
          <div className="flex text-right gap-24 mt-20 mr-40 text-[30px]">
            <a href="#">
              <p className=" hover:text-[33px] transition-all whitespace-nowrap">
                {t("contactus")}
              </p>
            </a>
            <a href="#">
              <p className=" hover:text-[33px] transition-all whitespace-nowrap">
                {t("aboutus")}
              </p>
            </a>
            <a href="#">
              <p className=" hover:text-[33px] transition-all">{t("Shop")}</p>
            </a>
          </div>
          <div className="flex justify-end mr-10 mt-10">
            <img src={logo} className="w-[126px] h-[126px]" />
          </div>
        </div>
      </div>
    </>
  );
}
