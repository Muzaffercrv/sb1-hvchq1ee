import React from 'react';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 flex items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-4">
                  Barınağınızı Kaydedin, Süreci Hızlandırın
                </h2>
                <p className="text-white/90 mb-6">
                  SahiplenSen'e barınak olarak kayıt olun, sahiplendirme süreçlerinizi dijitalleştirerek hızlandırın ve daha fazla hayvana yuva bulun.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="secondary" 
                    size="lg"
                  >
                    Barınak Olarak Katıl
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/10 active:bg-white/20"
                  >
                    Daha Fazla Bilgi
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Happy adopted dog" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;