import React from 'react';
import { useTranslation } from 'react-i18next';
import Body from './body';
import PageTitle from '../../components/PageTitle';
import { clients } from './content';

const Clients = () => {
  const { t } = useTranslation('clients');
  return (
    <div>
      <PageTitle title={t(clients.title)} subtitle={t(clients.desc)} />
      <Body />
    </div>
  );
};

export default Clients;
