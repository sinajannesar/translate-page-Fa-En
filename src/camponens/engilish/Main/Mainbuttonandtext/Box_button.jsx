import flesh from "../../../../assets/flash.svg";
import fleshrast from "../../../../assets/Arrow 1.svg"
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

export default function BoxButton() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* بخش اصلی با تنظیم RTL/LTR */}
      <div className={`flex gap-[26px] ${i18n.language === "fa" ? "flex-row-reverse rtl mr-[199px]" : "flex-row ltr ml-[199px]"}`}>
        {/* متن اصلی */}
        <div className="flex">
          <p className="`w-[442px] h-[184px] border-2 border-black shadow-[10px_11px_1px_rgba(1,1,1,1)] rounded-2xl mt-[106px] text-[50px] px-9 py-14 whitespace-nowrap">
            {t("Whatisfruittea")}
          </p>
        </div>

        {/* علامت سؤال */}
        <p className="w-[79.21px] h-[184px] border-2 border-black shadow-[10px_11px_1px_rgba(0,0,0,1)] rounded-2xl mt-[106px] text-[50px] px-7 py-14">
          ?
        </p>

        {/* دکمه تصویر */}
        <button>
          <img
            src={`${i18n.language === "fa" ? fleshrast : flesh }`}
            className="w-[178px] h-[184px] border-2 border-black shadow-[10px_11px_1px_rgba(0,0,0,1)] rounded-2xl mt-[106px] text-[50px] px-7 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.9)] active:shadow-none transition"
            alt="arrow"
          />
        </button>
      </div>

      {/* بخش متن بزرگ */}
      <div
        className={`flex justify-center mt-[127px] ${
          i18n.language === "fa" ? "rtl text-center text-[43px]" : "ltr text-center text-[44px]"
        }`}
      >
        <p className="flex w-[1476px] h-[728px] border-2 border-black shadow-[10px_20px_1px_rgba(0,0,0,1)] rounded-2xl justify-center py-[50px]">
          <Trans i18nKey="textfruit" components={{ br: <br /> }} />
        </p>
      </div>
    </>
  );
}
