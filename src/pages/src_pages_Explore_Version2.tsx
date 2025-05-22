import React from 'react';
import Layout from '../components/layout/Layout';
import FeaturedPets from '../components/home/FeaturedPets';
import { mockPets } from '../data/mockData';

const Explore = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-heading font-bold text-center my-8">Hayvanları Keşfet</h1>
      <FeaturedPets pets={mockPets} />
    </Layout>
  );
};

export default Explore;