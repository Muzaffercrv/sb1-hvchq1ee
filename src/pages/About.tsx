import React from 'react';
import Layout from '../components/layout/Layout';
import { Heart, Shield, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary-500" />,
      title: 'Hayvan Sevgisi',
      description: 'Her hayvanın sevgi dolu bir yuvayı hak ettiğine inanıyoruz.'
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      title: 'Güvenli Sahiplendirme',
      description: 'Detaylı kontroller ve takip süreçleriyle güvenli sahiplendirme sağlıyoruz.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: 'İş Birliği',
      description: 'Barınaklarla yakın iş birliği içinde çalışarak en iyi sonuçları hedefliyoruz.'
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-500" />,
      title: 'Hızlı Süreç',
      description: 'Dijital platformumuzla sahiplendirme süreçlerini hızlandırıyoruz.'
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary-600 to-primary-400 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">
            Hakkımızda
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white/90">
            SahiplenSen, barınaklardaki hayvanların daha hızlı ve güvenli bir şekilde sahiplendirilmesini sağlayan dijital bir platformdur.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6">Misyonumuz</h2>
            <p className="text-gray-600 mb-8">
              SahiplenSen olarak misyonumuz, barınaklarda yaşamını sürdüren hayvanların daha hızlı ve güvenli bir şekilde sahiplenilmesini sağlamaktır. Hayvan barınaklarıyla iş birliği yaparak, sahiplendirme süreçlerini dijitalleştiriyor ve bu süreçleri şeffaf, kolay ve erişilebilir hale getiriyoruz.
            </p>
            
            <h2 className="text-3xl font-heading font-bold mb-6">Vizyonumuz</h2>
            <p className="text-gray-600 mb-8">
              Türkiye'nin en güvenilir ve kapsamlı hayvan sahiplendirme platformu olmayı hedefliyoruz. Her hayvanın hak ettiği sıcak yuvasına kavuşmasını sağlamak ve toplumu hayvan sahiplenme konusunda bilinçlendirmek için çalışıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;