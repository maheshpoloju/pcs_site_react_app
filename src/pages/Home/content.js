import React from 'react';
import {
  Users, UserCheck, Award, Clock, UserPlus, Globe, Layout, Code, Smartphone, PenTool,
  Zap, Briefcase, TrendingUp, Target,
} from 'react-feather';
import ImgAccenture from '../../assets/img/clients/accenture.png';
import ImgMTC from '../../assets/img/clients/mind-therapy.svg';
import ImgDSI from '../../assets/img/clients/dsi-logo-vector.svg';
import ImgNYT from '../../assets/img/clients/nyt-logo.jpg';
import ImgInfiswift from '../../assets/img/clients/infiswift-solutions.jpg';
import ImgCriot from '../../assets/img/clients/criot.png';
import ImgMyChatri from '../../assets/img/clients/mychatri.jpg';
import ImgTavisca from '../../assets/img/clients/tavisca.jpeg';
import ImgEnquero from '../../assets/img/clients/enquero.png';
import ImgEnergetics from '../../assets/img/clients/energetics-logo.svg';
import ImgPrizeLogic from '../../assets/img/clients/prizelogic.svg';
import ImgEllieMae from '../../assets/img/clients/ellie-mae.jpeg';

export const main = {
  title: 'home.main.title',
  subtitle: 'home.main.subtitle',
};

export const whatWeDo = [
  {
    icon: <Zap />,
    title: 'home.whatwedo.title.0',
    text: 'home.whatwedo.text.0',
  },
  {
    icon: <Briefcase />,
    title: 'home.whatwedo.title.1',
    text: 'home.whatwedo.text.1',
  },
  {
    icon: <TrendingUp />,
    title: 'home.whatwedo.title.2',
    text: 'home.whatwedo.text.2',
  },
  {
    icon: <Target />,
    title: 'home.whatwedo.title.3',
    text: 'home.whatwedo.text.3',
  },
];

export const services = {
  title: 'home.services.title',
  services: [
    {
      icon: <Layout />,
      title: 'home.services.title.0',
    },
    {
      icon: <Code />,
      title: 'home.services.title.1',
    },
    {
      icon: <Smartphone />,
      title: 'home.services.title.2',
    },
    {
      icon: <Code />,
      title: 'home.services.title.3',
    },
    {
      icon: <Smartphone />,
      title: 'home.services.title.4',
    },
    {
      icon: <PenTool />,
      title: 'home.services.title.5',
    },
  ],
};

export const features = {
  title: 'home.features.title',
  desc: 'home.features.desc',
  features: [
    {
      icon: <Users />,
      title: 'home.features.title.0',
    },
    {
      icon: <UserCheck />,
      title: 'home.features.title.1',
    },
    {
      icon: <Award />,
      title: 'home.features.title.2',
    },
    {
      icon: <Clock />,
      title: 'home.features.title.3',
    },
    {
      icon: <UserPlus />,
      title: 'home.features.title.4',
    },
    {
      icon: <Globe />,
      title: 'home.features.title.5',
    },
  ],
};

export const facts = {
  title: 'home.facts.title',
  facts: [
    {
      title: 'home.facts.title.0',
      count: 'home.facts.count.0',
    },
    {
      title: 'home.facts.title.1',
      count: 'home.facts.count.1',
    },
    {
      title: 'home.facts.title.2',
      count: 'home.facts.count.2',
    },
  ],
  footer: {
    title: 'home.facts.footer.title',
    desc: 'home.facts.footer.desc',
    contactUs: 'home.facts.footer.contactus',
  },
};

export const clients = {
  title: 'home.clients.title',
  clients: [
    {
      url: 'https://www.accenture.com',
      image: ImgAccenture,
      alt: 'accenture',
    },
    {
      url: 'https://www.mindtherapyclinic.com',
      image: ImgMTC,
      alt: 'mtc',
    },
    {
      url: 'https://digitalspacesinc.com',
      image: ImgDSI,
      alt: 'dsi',
    },
    {
      url: 'https://www.nytimes.com',
      image: ImgNYT,
      alt: 'nyt',
    },
    {
      // eslint-disable-next-line no-script-url
      url: 'javascript:void(0)',
      image: ImgInfiswift,
      alt: 'infiswift',
    },
    {
      url: 'https://www.criotsolutions.com',
      image: ImgCriot,
      alt: 'criot',
    },
    {
      url: 'https://mychatri.com',
      image: ImgMyChatri,
      alt: 'mychatri',
    },
    {
      url: 'https://www.tavisca.com',
      image: ImgTavisca,
      alt: 'tavisca',
    },
    {
      url: 'https://enquero.com',
      image: ImgEnquero,
      alt: 'enquero',
    },
    {
      url: 'https://energetics-iot.com',
      image: ImgEnergetics,
      alt: 'energetics-iot',
    },
    {
      url: 'https://www.prizelogic.com',
      image: ImgPrizeLogic,
      alt: 'prizelogic',
    },
    {
      url: 'https://www.icemortgagetechnology.com',
      image: ImgEllieMae,
      alt: 'ellie-mae',
    },
  ],
  viewAll: 'home.clients.viewall',
};
