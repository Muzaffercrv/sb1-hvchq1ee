import React from 'react';
import { Search, Building, ClipboardCheck, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search size={32} className="text-primary-500" />,
      title: "Hayvanları Keşfedin",
      description: "Filtreleme seçenekleriyle size ve yaşam alanınıza uygun can dostunuzu bulun."
    },
    {
      icon: <Building size={32} className="text-primary-500" />,
      title: "Barınağı Ziyaret Edin",
      description: "Seçtiğiniz hayvanı tanımak için barınağı ziyaret edin ve bağ kurun."
    },
    {
      icon: <ClipboardCheck size={32} className="text-primary-500" />,
      title: "Başvurunuzu Yapın",
      description: "Basit başvuru süreciyle sahiplenme talebinizi iletin ve onay bekleyin."
    },
    {
      icon: <Heart size={32} className="text-primary-500" />,
      title: "Yeni Ailenize Kavuşun",
      description: "Onay sonrası yeni dostunuzu evinize götürün ve mutlu bir yaşama başlayın."
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">Nasıl Çalışır?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SahiplenSen ile barınaklardaki hayvanları sahiplenme sürecini dört kolay adımda tamamlayabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-50 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;