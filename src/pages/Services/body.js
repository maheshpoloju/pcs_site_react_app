import React from 'react';
import { useTranslation } from 'react-i18next';

import { services } from './content';

const Body = () => {
  const { t } = useTranslation('services');

  return (
    <section className="services-area-two ptb-80 bg-f9f6f6">
      <div className="container">
        <div className="row">

          {services.services.map((item, index) => (
            <div key={`service-${index}`} className="col-lg-12 col-md-12">
              <div className="single-features client">
                <h2 className="text-center text-uppercase mb-4">{item.title}</h2>
                <div className={`row${(index % 2 === 0) ? '' : ' flex-row-reverse'}`}>
                  <div className="col-sm-6">
                    <div className="text-center">
                      <img src={item.image} height="250px" alt={item.alt} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>
                      <ul className="service-list">
                        {item.list.map((e, i) => <li key={`${item.title}-${i}`}>{t(e)}</li>)}
                      </ul>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Body;
