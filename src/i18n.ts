import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        products: 'Products',
        brands: 'Brands',
        blog: 'Farmer Tips',
        gallery: 'Gallery',
        contact: 'Contact',
        admin: 'Admin'
      },
      hero: {
        title: 'Nurturing Growth Since 1980',
        subtitle: 'Sri Lakshmi Narasimha Swamy Traders - Your trusted partner for high-quality fertilizers, seeds, and organic products in Challakere.',
        cta: 'View Products',
        whatsapp: 'Inquire on WhatsApp'
      },
      home: {
        trusted: 'Trusted Since 1980',
        trusted_desc: 'One of the first agricultural shops in town, providing quality service for over 4 decades.',
        brands: 'Our Partner Brands',
        why_us: 'Why Choose Us?',
        farmer_support: 'Farmer Consultation',
        farmer_support_desc: 'Expert guidance on crop health and fertilizer application.'
      },
      contact: {
        title: 'Get In Touch',
        address: 'Near Jamia Masjid, Bellary Road, Challakere – 577522',
        owner: 'Owner: G Madhusudhan',
        hours: 'Working Hours',
        monday: 'Mon - Thu: 9 AM - 8 PM',
        friday: 'Friday: Holiday',
        weekend: 'Sat - Sun: 9 AM - 8 PM'
      }
    }
  },
  kn: {
    translation: {
      nav: {
        home: 'ಮನೆ',
        about: 'ಬಗ್ಗೆ',
        products: 'ಉತ್ಪನ್ನಗಳು',
        brands: 'ಬ್ರ್ಯಾಂಡ್‌ಗಳು',
        blog: 'ರೈತ ಸುಳಿವುಗಳು',
        gallery: 'ಗ್ಯಾಲರಿ',
        contact: 'ಸಂಪರ್ಕಿಸಿ',
        admin: 'ನಿರ್ವಾಹಕರು'
      },
      hero: {
        title: '1980 ರಿಂದ ಅಭಿವೃದ್ಧಿಯ ಪೋಷಣೆ',
        subtitle: 'ಶ್ರೀ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ಟ್ರೇಡರ್ಸ್ - ಚಳ್ಳಕೆರೆಯಲ್ಲಿ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಗೊಬ್ಬರಗಳು, ಬೀಜಗಳು ಮತ್ತು ಸಾವಯವ ಉತ್ಪನ್ನಗಳಿಗಾಗಿ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರ.',
        cta: 'ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ',
        whatsapp: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ'
      },
      home: {
        trusted: '1980 ರಿಂದ ವಿಶ್ವಾಸಾರ್ಹ',
        trusted_desc: 'ಪಟ್ಟಣದ ಮೊದಲ ಕೃಷಿ ಮಳಿಗೆಗಳಲ್ಲಿ ಒಂದು, 4 ದಶಕಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ ಗುಣಮಟ್ಟದ ಸೇವೆ ನೀಡುತ್ತಿದೆ.',
        brands: 'ನಮ್ಮ ಪಾಲುದಾರ ಬ್ರ್ಯಾಂಡ್‌ಗಳು',
        why_us: 'ನಮ್ಮನ್ನು ಏಕೆ ಆರಿಸಬೇಕು?',
        farmer_support: 'ರೈತ ಸಮಾಲೋಚನೆ',
        farmer_support_desc: 'ಬೆಳೆಗಳ ಆರೋಗ್ಯ ಮತ್ತು ರಸಗೊಬ್ಬರ ಬಳಕೆಯ ಬಗ್ಗೆ ತಜ್ಞರ ಮಾರ್ಗದರ್ಶನ.'
      },
      contact: {
        title: 'ಸಂಪರ್ಕದಲ್ಲಿರಿ',
        address: 'ಜಾಮಿಯಾ ಮಸೀದಿ ಹತ್ತಿರ, ಬಳ್ಳಾರಿ ರಸ್ತೆ, ಚಳ್ಳಕೆರೆ – 577522',
        owner: 'ಮಾಲೀಕರು: ಜಿ ಮಧುಸೂದನ್',
        hours: 'ಕೆಲಸದ ಸಮಯ',
        monday: 'ಸೋಮ - ಗುರುವಾರ: ಬೆಳಿಗ್ಗೆ 9 - ರಾತ್ರಿ 8',
        friday: 'ಶುಕ್ರವಾರ: ರಜೆ',
        weekend: 'ಶನಿ - ಭಾನುವಾರ: ಬೆಳಿಗ್ಗೆ 9 - ರಾತ್ರಿ 8'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
