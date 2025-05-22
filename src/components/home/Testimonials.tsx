import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      content: "SahiplenSen sayesinde Paşa'yı aileme kattım. Süreç çok kolay ve şeffaftı. Şimdi hayatımızda yeni bir neşe kaynağımız var.",
      petName: "Paşa",
      petImage: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Ayşe Demir",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      content: "Minnoş'u sahiplenmek hayatımın en güzel kararlarından biriydi. SahiplenSen'in detaylı bilgileri sayesinde karakterine uygun bir kedi seçebildim.",
      petName: "Minnoş",
      petImage: "https://images.pexels.com/photos/982865/pexels-photo-982865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Mehmet Kaya",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      content: "Luna'yı platform üzerinden keşfettik ve barınağı ziyaret ettik. Şimdi ailemizin bir parçası. Tüm süreci kolaylaştırdığınız için teşekkürler!",
      petName: "Luna",
      petImage: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">Mutlu Hikayeler</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SahiplenSen aracılığıyla yeni yuvalarına kavuşan hayvanlar ve sahiplerinin mutluluk hikayeleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-heading font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.petImage} 
                    alt={testimonial.petName} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-primary-500">{testimonial.petName}</span> ile mutlu bir hayat
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;