import React from 'react';
import { useTranslation } from 'react-i18next';

import { bot } from './content';

const How = () => {
  const { t } = useTranslation('bot');
  return (
    <section className="services-area-two ptb-80 bg-f9f6f6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="single-features client">
              <h2 className="text-center text-uppercase">{t(bot.how.title)}</h2>
              <p className="text-center mb-4">{t(bot.how.desc)}</p>
              <br />
              <div className="row">
                <div className="col-lg-6 col-md-12 services-content">
                  {bot.how.content.map((item, index) => (
                    <React.Fragment key={`how-item-${index}`}>
                      <div className="section-title mt-4">
                        <h4>{t(item.title)}</h4>
                        <div className="bar" />
                      </div>

                      <div className="row">
                        {item.items.map((e, i) => (
                          <div key={`how-item-items-${i}`} className="col-lg-6">
                            <div className="box" style={{ marginTop: 10, padding: '8px 12px', minHeight: 55 }}>
                              {e.icon}
                              {' '}
                              {t(e.title)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                <div className="col-lg-6 col-md-12 align-self-center">
                  <ul className="service-list mt-5">
                    {bot.how.list.map((e, i) => <li key={i}>{t(e)}</li>)}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
