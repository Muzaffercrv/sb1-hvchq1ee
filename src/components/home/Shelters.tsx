import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Shelter } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface SheltersProps {
  shelters: Shelter[];
}

const Shelters = ({ shelters }: SheltersProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">İş Birliği Yaptığımız Barınaklar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Türkiye'nin dört bir yanındaki partner barınaklarımız, sahipsiz hayvanlara yuva bulmak için bizimle çalışıyor. Siz de barınağınızla katılabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shelters.map((shelter) => (
            <ShelterCard key={shelter.id} shelter={shelter} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
          >
            Tüm Barınakları Gör
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ShelterCardProps {
  shelter: Shelter;
}

const ShelterCard = ({ shelter }: ShelterCardProps) => {
  return (
    <Card variant="hover" className="h-full flex flex-col">
      <Card.Content className="flex-grow">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-gray-100">
            {shelter.logoUrl && (
              <img 
                src={shelter.logoUrl} 
                alt={`${shelter.name} logo`} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <Card.Title className="text-xl">{shelter.name}</Card.Title>
            <div className="flex items-center text-gray-500">
              <MapPin size={14} className="mr-1" />
              <span>{shelter.city}, {shelter.province}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {shelter.description}
        </p>
      </Card.Content>

      <Card.Footer className="flex justify-between">
        <Button 
          variant="outline" 
          size="sm"
          icon={<ExternalLink size={14} />}
          iconPosition="right"
        >
          Web Sitesi
        </Button>
        <Button 
          variant="primary" 
          size="sm"
        >
          Hayvanları Gör
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Shelters;