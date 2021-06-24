import React from 'react';
import MainBanner from './main-banner';
import WhatWeDo from './what-we-do';
import Features from './features';
import Services from './services';
import Facts from './facts';
import Clients from './clients';

const Home = () => (
  <div>
    <MainBanner />
    <WhatWeDo />
    <Services />
    <Features />
    <Facts />
    <Clients />
  </div>
);

export default Home;
