import React from 'react';
import { useTranslation } from 'react-i18next';

import { clients } from './content';

const Body = () => {
  const { t } = useTranslation('clients');
  return (
    <section className="features-area ptb-80 bg-f9f6f6">
      <div className="container">
        <div className="row">

          {clients.clients.map((item, index) => (
            <div key={`client-${index}`} className="col-lg-12 col-md-12">
              <div className="single-features client">
                <div className="text-center">
                  <a href={item.url}>
                    <img src={item.image} height="100" alt={item.alt} />
                  </a>
                </div>

                <h3>{item.title}</h3>
                <p>{t(item.desc)}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Body;
