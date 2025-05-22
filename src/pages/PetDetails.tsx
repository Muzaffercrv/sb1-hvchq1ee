import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { Heart, MapPin, Calendar, Info, CheckCircle, XCircle } from 'lucide-react';
import { Pet } from '../types';
import { mockPets } from '../data/mockData';

const PetDetails = () => {
  // In a real app, we would get the pet ID from URL params
  // For demo, using the first pet from mock data
  const pet = mockPets[0];
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    livingArrangement: '',
    hasChildren: '',
    hasOtherPets: '',
    petExperience: '',
    reasonForAdoption: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented
    console.log('Adoption form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getAgeText = (age: number, unit: string) => {
    if (unit === 'years') {
      return `${age} Yaş`;
    } else if (unit === 'months') {
      return `${age} Aylık`;
    } else {
      return `${age} Günlük`;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src={pet.imageUrls[0]}
                alt={pet.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {pet.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`${pet.name} ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Pet Information */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-heading font-bold">{pet.name}</h1>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Heart className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="primary">{pet.species === 'dog' ? 'Köpek' : 'Kedi'}</Badge>
              <Badge variant={pet.gender === 'male' ? 'secondary' : 'accent'}>
                {pet.gender === 'male' ? 'Erkek' : 'Dişi'}
              </Badge>
              {pet.neutered && <Badge variant="success">Kısırlaştırılmış</Badge>}
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>İstanbul</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{getAgeText(pet.age, pet.ageUnit)}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-heading font-semibold mb-3">Hakkında</h2>
              <p className="text-gray-600">{pet.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-heading font-semibold mb-3">Karakter Özellikleri</h2>
              <div className="flex flex-wrap gap-2">
                {pet.personality.map((trait, index) => (
                  <Badge key={index} variant="outline">{trait}</Badge>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-heading font-semibold mb-3">Sağlık Durumu</h2>
              <ul className="space-y-2">
                {pet.healthStatus.map((status, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {status}
                  </li>
                ))}
              </ul>
            </div>

            {!showAdoptionForm ? (
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => setShowAdoptionForm(true)}
              >
                Sahiplenmek İstiyorum
              </Button>
            ) : (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-heading font-semibold mb-6">Sahiplenme Başvuru Formu</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Adresiniz
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="livingArrangement" className="block text-sm font-medium text-gray-700 mb-1">
                      Yaşam Alanı
                    </label>
                    <select
                      id="livingArrangement"
                      name="livingArrangement"
                      value={formData.livingArrangement}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="apartment">Apartman Dairesi</option>
                      <option value="house">Müstakil Ev</option>
                      <option value="garden">Bahçeli Ev</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hasChildren" className="block text-sm font-medium text-gray-700 mb-1">
                      Evde Çocuk Var Mı?
                    </label>
                    <select
                      id="hasChildren"
                      name="hasChildren"
                      value={formData.hasChildren}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="yes">Evet</option>
                      <option value="no">Hayır</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hasOtherPets" className="block text-sm font-medium text-gray-700 mb-1">
                      Başka Evcil Hayvanınız Var Mı?
                    </label>
                    <select
                      id="hasOtherPets"
                      name="hasOtherPets"
                      value={formData.hasOtherPets}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="yes">Evet</option>
                      <option value="no">Hayır</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="petExperience" className="block text-sm font-medium text-gray-700 mb-1">
                      Daha Önce Evcil Hayvan Sahiplendiniz Mi?
                    </label>
                    <textarea
                      id="petExperience"
                      name="petExperience"
                      value={formData.petExperience}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="reasonForAdoption" className="block text-sm font-medium text-gray-700 mb-1">
                      Neden Sahiplenmek İstiyorsunuz?
                    </label>
                    <textarea
                      id="reasonForAdoption"
                      name="reasonForAdoption"
                      value={formData.reasonForAdoption}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                    >
                      Başvuruyu Gönder
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      fullWidth
                      onClick={() => setShowAdoptionForm(false)}
                    >
                      İptal
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PetDetails;