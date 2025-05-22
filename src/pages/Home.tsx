import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedPets from '../components/home/FeaturedPets';
import HowItWorks from '../components/home/HowItWorks';
import Shelters from '../components/home/Shelters';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import CallToAction from '../components/home/CallToAction';
import { mockPets, mockShelters } from '../data/mockData';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedPets pets={mockPets.slice(0, 6)} />
      <HowItWorks />
      <Stats />
      <Shelters shelters={mockShelters} />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Home;