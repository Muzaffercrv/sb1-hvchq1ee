import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              <span className="text-primary-500">Sahiplen</span>
              <span className="text-secondary-500">Sen</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Hayvan barınaklarının dijital ortamda hesap açarak sahiplendirilmesi gereken hayvanlarını tanıtabileceği ve sahiplenme süreçlerini hızlandırabileceği bir platformdur.
            </p>
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-primary-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-primary-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-primary-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a 
                  href="/pets" 
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                >
                  Sahiplendirme İlanları
                </a>
              </li>
              <li>
                <a 
                  href="/shelters" 
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                >
                  Barınaklar
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Sahiplenme Bilgileri</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/adoption-guide" 
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                >
                  Sahiplenme Rehberi
                </a>
              </li>
              <li>
                <a 
                  href="/faq" 
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                >
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a 
                  href="/success-stories" 
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                >
                  Başarı Hikayeleri
                </a>
              </li>
              <li>
                <a 
                  href="/pet-care-tips" 
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                >
                  Hayvan Bakım İpuçları
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Maslak, 34398 Sarıyer/İstanbul
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">+90 (212) 555 12 34</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">info@sahiplensen.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-gray-200" />
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SahiplenSen. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4 text-sm">
            <a 
              href="/terms" 
              className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              Kullanım Şartları
            </a>
            <a 
              href="/privacy" 
              className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              Gizlilik Politikası
            </a>
            <a 
              href="/cookies" 
              className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;