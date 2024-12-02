import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n, t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const getCurrentYearInThaiBuddhistCalendar = () => {
    const thaiBuddhistLocale = 'th-TH-u-ca-buddhist';
    const currentDate = new Date();
    const thaiBuddhistYear = new Intl.DateTimeFormat(thaiBuddhistLocale, {
      year: 'numeric',
    }).format(currentDate);
    return thaiBuddhistYear;
  };

  const getCurrentYearInChinese = () => {
    return currentYear.toString() + '年';
  };

  return (
    <footer className="p-4 w-full h-fit text-gray-700 bg-white border-t-[1px] border-t-gray-100">
      {/* Christmas message based on language */}
      <p>
        {i18n.language === 'en' ? (
          <span>
            Wishing you a Merry Christmas and a Happy New Year!
          </span>
        ) : i18n.language === 'th' ? (
          <span>
            ขอให้ท่านมีความสุขสวัสดิ์ คริสต์มาสต์ และ สวัสดิ์ปีใหม่ ครับ/ค่ะ! 
          </span>
        ) : i18n.language === 'cn' ? (
          <span>
            圣诞快乐！新年快乐！
          </span>
        ) : null}
      </p>
      {/* Copyright information */}
      <p>
        © {i18n.language === 'en' ? (
          <span>{currentYear}</span>
        ) : i18n.language === 'th' ? (
          <span>{getCurrentYearInThaiBuddhistCalendar()}</span>
        ) : i18n.language === 'cn' ? (
          <span>{getCurrentYearInChinese()}</span>
        ) : null}
      </p>
    </footer>
  );
};

export default Footer;