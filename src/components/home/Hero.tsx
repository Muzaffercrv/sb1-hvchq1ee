import React from 'react';
import { Search } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-400 text-white py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Bir Hayvanı Sahiplenerek Hayat Kurtarın
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            SahiplenSen ile barınaklarda yaşayan hayvanlar için yeni bir yuva bulun. Onların hayatını değiştirin, sizin hayatınız da değişsin.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button 
              variant="secondary" 
              size="lg"
            >
              Hayvanları Keşfet
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 active:bg-white/20"
            >
              Barınak Olarak Katıl
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Köpek, kedi, kuş..." 
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <select className="w-full md:w-auto px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-600">
                  <option value="">Tüm Şehirler</option>
                  <option value="istanbul">İstanbul</option>
                  <option value="ankara">Ankara</option>
                  <option value="izmir">İzmir</option>
                  <option value="bursa">Bursa</option>
                </select>
              </div>
              <div>
                <Button 
                  variant="primary" 
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Ara
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;