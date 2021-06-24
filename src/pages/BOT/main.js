import React from 'react';
import { useTranslation } from 'react-i18next';

import { bot } from './content';

const Main = () => {
  const { t } = useTranslation('bot');
  return (
    <section className="boxes-area" style={{ margin: 0 }}>
      <div className="container">
        <div className="row">
          {bot.features.map((item, index) => (
            <div key={`item-${index}`} className="col-lg-3 col-md-6">
              <div className={`single-box${index % 2 === 0 ? '' : ' bg-f78acb'}`}>
                <div className="icon">
                  {item.icon}
                </div>
                <h3>{t(item.title)}</h3>
                <br />
                <p>{t(item.desc)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-8">
            <p className="text-center mt-5">
              {t(bot.contact.desc) }
              <a href={`mailto:${bot.contact.email}`}>{bot.contact.email}</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Main;
