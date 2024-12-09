import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // برای بارگذاری فایل‌های ترجمه
  .use(LanguageDetector) // برای تشخیص زبان پیش‌فرض مرورگر
  .use(initReactI18next) // اتصال به React
  .init({
    fallbackLng: "en", // زبان پیش‌فرض
    debug: true, // فعال‌سازی حالت دیباگ
    interpolation: {
      escapeValue: false, // جلوگیری از فرار کاراکترها
    },
    backend: {
      loadPath: "./src/camponens/Setig_translite/{{lng}}/translation.json", // مسیر فایل ترجمه
    },
  });

export default i18n;
