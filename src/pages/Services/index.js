import React from 'react';
import { useTranslation } from 'react-i18next';
import Body from './body';
import PageTitle from '../../components/PageTitle';
import { services } from './content';

const Services = () => {
  const { t } = useTranslation('services');

  return (
    <div>
      <PageTitle title={t(services.title)} />
      <Body />
    </div>
  );
};

export default Services;
