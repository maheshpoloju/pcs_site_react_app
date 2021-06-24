import React from 'react';
import { useTranslation } from 'react-i18next';

import { bot } from './content';

const Need = () => {
  const { t } = useTranslation('bot');
  return (
    <section className="features-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>{t(bot.need.title)}</h2>
          <div className="bar" />
          <p>{t(bot.need.desc)}</p>
        </div>
        <div className="row">
          {bot.need.items.map((item, index) => (
            <div key={`need-${index}`} className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className={`icon${index % 2 === 0 ? ' bg-eb6b3d' : ''}`}>
                  {item.icon}
                </div>

                <h3>{t(item.title)}</h3>
                <p>{t(item.desc)}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Need;
