import React from 'react';
import Layout from '../components/layout/Layout';
import FeaturedPets from '../components/home/FeaturedPets';
import { mockPets } from '../data/mockData';

const Pets = () => {
  return (
    <Layout>
      <FeaturedPets pets={mockPets} />
    </Layout>
  );
};

export default Pets;
