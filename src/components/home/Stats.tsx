import React from 'react';
import { Users, Building, Heart, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Heart size={24} className="text-primary-500" />,
      value: "2,500+",
      label: "Sahiplendirilen Hayvan",
    },
    {
      icon: <Building size={24} className="text-primary-500" />,
      value: "120+",
      label: "Partner Barınak",
    },
    {
      icon: <Users size={24} className="text-primary-500" />,
      value: "15,000+",
      label: "Kayıtlı Kullanıcı",
    },
    {
      icon: <Award size={24} className="text-primary-500" />,
      value: "5 Yıl",
      label: "Hizmet Deneyimi",
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-400 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-white rounded-full">
                {stat.icon}
              </div>
              <div className="text-3xl font-heading font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;