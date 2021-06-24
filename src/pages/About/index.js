import React from 'react';
import { useTranslation } from 'react-i18next';
import Body from './body';
import PageTitle from '../../components/PageTitle';
import { about } from './content';

const About = () => {
  const { t } = useTranslation('about');
  return (
    <div>
      <PageTitle title={t(about.title)} />
      <Body />
    </div>
  );
};

export default About;
