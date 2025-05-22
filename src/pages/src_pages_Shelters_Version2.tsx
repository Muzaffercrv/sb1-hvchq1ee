import React from 'react';
import Layout from '../components/layout/Layout';
import Shelters from '../components/home/Shelters';
import { mockShelters } from '../data/mockData';

const SheltersPage = () => {
  return (
    <Layout>
      <Shelters shelters={mockShelters} />
    </Layout>
  );
};

export default SheltersPage;