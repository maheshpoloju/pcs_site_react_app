import React from 'react';
import { useTranslation } from 'react-i18next';

import { bot } from './content';

const Services = () => {
  const { t } = useTranslation('bot');
  return (
    <section className="services-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-12 col-md-12 services-content">
            <div className="section-title">
              <h2>{t(bot.services.title)}</h2>
              <br />
              <p>{t(bot.services.desc)}</p>
            </div>

            <br />
            <br />

            <div className="row">
              {bot.services.services.map((item, index) => (
                <div key={`service-${index}`} className="col-lg-4">
                  <div className="row">

                    <div className="col-lg-12" style={{ marginTop: 30 }}>
                      <div className="section-title">
                        <h4 className="text-center">{t(item.title)}</h4>
                        <div className="bar" style={{ margin: '20px auto' }} />
                      </div>
                    </div>

                    {item.items.map((e, i) => (
                      <div key={`item-${i}`} className="col-lg-12">
                        <div className="box" style={{ minHeight: 142 }}>
                          <h5>
                            {e.icon}
                            {' '}
                            {t(e.title)}
                          </h5>
                          <p>{t(e.desc)}</p>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
