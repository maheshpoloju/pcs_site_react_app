import React from 'react';
import {
  Users, UserCheck, Award, Clock, UserPlus, Globe,
} from 'react-feather';

export const about = {
  title: 'about.title',
  content: [
    { desc: 'about.content.desc.0' },
    { desc: 'about.content.desc.1' },
    { desc: 'about.content.desc.2' },
  ],
};

export const features = {
  title: 'about.features.title',
  features: [
    {
      icon: <Users />,
      title: 'about.features.title.0',
    },
    {
      icon: <UserCheck />,
      title: 'about.features.title.1',
    },
    {
      icon: <Award />,
      title: 'about.features.title.2',
    },
    {
      icon: <Clock />,
      title: 'about.features.title.3',
    },
    {
      icon: <UserPlus />,
      title: 'about.features.title.4',
    },
    {
      icon: <Globe />,
      title: 'about.features.title.5',
    },
  ],
  inner: [
    {
      title: 'about.inner.title.0',
      desc: 'about.inner.desc.0',
    },
    {
      title: 'about.inner.title.1',
      desc: 'about.inner.desc.1',
    },
    {
      title: 'about.inner.title.2',
      desc: 'about.inner.desc.2',
    },
  ],
};
