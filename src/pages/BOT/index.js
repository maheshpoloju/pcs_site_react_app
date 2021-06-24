import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../../components/PageTitle';
import { bot } from './content';
import How from './how';
import Main from './main';
import Need from './need';
import Services from './services';

const BOT = () => {
  const { t } = useTranslation('bot');
  return (
    <div>
      <PageTitle title={t(bot.title)} subtitle={t(bot.subtitle)} />
      <Main />
      <Services />
      <How />
      <Need />
    </div>
  );
};

export default BOT;
