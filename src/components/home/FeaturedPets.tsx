import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import { Pet } from '../../types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

interface FeaturedPetsProps {
  pets: Pet[];
}

const FeaturedPets = ({ pets }: FeaturedPetsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">Yeni Yuva Arayan Dostlarımız</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Barınaklarımızda yaşayan ve sizin sıcak yuvanızı bekleyen can dostlarımızla tanışın. Onlara şans vererek hem onların hem de sizin hayatınızı değiştirin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            as={Link}
            to="/pets"
          >
            Tüm Hayvanları Gör
          </Button>
        </div>
      </div>
    </section>
  );
};

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
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
    <Card variant="hover" className="h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <Card.Image 
          src={pet.imageUrls[0]} 
          alt={pet.name}
          className="h-64"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200">
          <Heart size={20} className="text-gray-500 hover:text-red-500 transition-colors duration-200" />
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center space-x-2">
            <Badge variant="primary" className="bg-white/90">{pet.species === 'dog' ? 'Köpek' : 'Kedi'}</Badge>
            {pet.neutered && <Badge variant="accent" className="bg-white/90">Kısırlaştırılmış</Badge>}
          </div>
        </div>
      </div>

      <Card.Content className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Card.Title className="text-xl">{pet.name}</Card.Title>
          <Badge variant={pet.gender === 'male' ? 'secondary' : 'accent'}>
            {pet.gender === 'male' ? 'Erkek' : 'Dişi'}
          </Badge>
        </div>
        
        <p className="text-gray-500 mb-3">{pet.breed}</p>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={16} className="mr-1" />
          <span>İstanbul</span>
          <span className="mx-2">•</span>
          <span>{getAgeText(pet.age, pet.ageUnit)}</span>
        </div>
        
        <p className="text-gray-600 line-clamp-2 mb-4">
          {pet.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {pet.personality.slice(0, 3).map((trait, index) => (
            <Badge key={index} variant="outline" size="sm">
              {trait}
            </Badge>
          ))}
        </div>
      </Card.Content>

      <Card.Footer>
        <Button 
          variant="primary" 
          fullWidth
          as={Link}
          to={`/pets/${pet.id}`}
        >
          Detayları Gör
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default FeaturedPets;