import React from 'react';
import {
  Users, UserCheck, Award, Clock, UserPlus, Globe,
  Zap, Briefcase, TrendingUp, Target, Layout, Code, Smartphone, PenTool,
} from 'react-feather';
// eslint-disable-next-line import/prefer-default-export
export const bot = {
  title: 'bot.title',
  subtitle: 'bot.subtitle',
  features: [
    {
      icon: <Zap />,
      title: 'bot.feature.title.0',
      desc: 'bot.feature.desc.0',
    },
    {
      icon: <Briefcase />,
      title: 'bot.feature.title.1',
      desc: 'bot.feature.desc.1',
    },
    {
      icon: <TrendingUp />,
      title: 'bot.feature.title.2',
      desc: 'bot.feature.desc.2',
    },
    {
      icon: <Target />,
      title: 'bot.feature.title.3',
      desc: 'bot.feature.desc.3',
    },
  ],
  contact: {
    desc: 'bot.contact.desc',
    email: 'anu@pcsitspl.com',
  },
  services: {
    title: 'bot.services.title',
    desc: 'bot.services.desc',
    services: [
      {
        title: 'bot.services.title.0',
        items: [
          {
            icon: <Layout />,
            title: 'bot.services.title.0.title.0',
            desc: 'bot.services.title.0.desc.0',
          },
          {
            icon: <Code />,
            title: 'bot.services.title.0.title.1',
            desc: 'bot.services.title.0.desc.1',
          },
        ],
      },
      {
        title: 'bot.services.title.1',
        items: [
          {
            icon: <Code />,
            title: 'bot.services.title.1.title.0',
            desc: 'bot.services.title.1.desc.0',
          },
          {
            icon: <Smartphone />,
            title: 'bot.services.title.1.title.1',
            desc: 'bot.services.title.1.desc.1',
          },
        ],
      },
      {
        title: 'bot.services.title.2',
        items: [
          {
            icon: <Smartphone />,
            title: 'bot.services.title.2.title.0',
            desc: 'bot.services.title.2.desc.0',
          },
          {
            icon: <PenTool />,
            title: 'bot.services.title.2.title.1',
            desc: 'bot.services.title.2.desc.1',
          },
        ],
      },
    ],
  },
  how: {
    title: 'bot.how.title',
    desc: 'bot.how.desc',
    content: [
      {
        title: 'bot.how.content.title.0',
        items: [
          {
            icon: <Layout />,
            title: 'bot.how.content.title.0.title.0',
          },
          {
            icon: <Code />,
            title: 'bot.how.content.title.0.title.1',
          },
          {
            icon: <Smartphone />,
            title: 'bot.how.content.title.0.title.2',
          },
          {
            icon: <Code />,
            title: 'bot.how.content.title.0.title.3',
          },
        ],
      },
      {
        title: 'bot.how.content.title.1',
        items: [
          {
            icon: <Layout />,
            title: 'bot.how.content.title.1.title.0',
          },
          {
            icon: <Code />,
            title: 'bot.how.content.title.1.title.1',
          },
          {
            icon: <Smartphone />,
            title: 'bot.how.content.title.1.title.2',
          },
          {
            icon: <Code />,
            title: 'bot.how.content.title.1.title.3',
          },
        ],
      },
    ],
    list: [
      'bot.how.list.0',
      'bot.how.list.1',
      'bot.how.list.2',
      'bot.how.list.3',
      'bot.how.list.4',
      'bot.how.list.5',
    ],
  },
  need: {
    title: 'bot.need.title',
    desc: 'bot.need.desc',
    items: [
      {
        icon: <Users />,
        title: 'bot.need.items.title.0',
        desc: 'bot.need.items.desc.0',
      },
      {
        icon: <UserCheck />,
        title: 'bot.need.items.title.1',
        desc: 'bot.need.items.desc.1',
      },
      {
        icon: <Award />,
        title: 'bot.need.items.title.2',
        desc: 'bot.need.items.desc.2',
      },
      {
        icon: <Clock />,
        title: 'bot.need.items.title.3',
        desc: 'bot.need.items.desc.3',
      },
      {
        icon: <UserPlus />,
        title: 'bot.need.items.title.4',
        desc: 'bot.need.items.desc.4',
      },
      {
        icon: <Globe />,
        title: 'bot.need.items.title.5',
        desc: 'bot.need.items.desc.5',
      },
    ],
  },
};
