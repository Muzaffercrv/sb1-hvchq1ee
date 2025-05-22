import React from 'react';
import Layout from '../components/layout/Layout';
import { useParams } from 'react-router-dom';
import { mockShelters } from '../data/mockData';

const ShelterDetails = () => {
  const { id } = useParams();
  const shelter = mockShelters.find((s) => s.id === id);

  if (!shelter) return <Layout><div className="text-center text-red-600">Barınak bulunamadı.</div></Layout>;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{shelter.name}</h1>
        <img src={shelter.logoUrl} alt={shelter.name} className="w-32 h-32 rounded-full mb-4" />
        <p className="mb-2"><strong>Adres:</strong> {shelter.address}, {shelter.city} / {shelter.province}</p>
        <p className="mb-2"><strong>Telefon:</strong> {shelter.phone}</p>
        <p className="mb-2"><strong>Email:</strong> {shelter.email}</p>
        <p className="mb-6">{shelter.description}</p>
        <a href={shelter.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Web Sitesini Ziyaret Et
        </a>
      </div>
    </Layout>
  );
};

export default ShelterDetails;