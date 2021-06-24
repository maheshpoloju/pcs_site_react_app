import React from 'react';
import { useTranslation } from 'react-i18next';
import { whatWeDo } from './content';

const WhatWeDo = () => {
  const { t } = useTranslation('home');
  return (
    <section className="boxes-area">
      <div className="container">
        <div className="row">
          {whatWeDo.map((item, index) => (
            <div key={`what-we-do-${index}`} className="col-lg-3 col-md-6">
              <div className={`single-box ${index % 2 === 0 ? 'bg-f78acb' : ''}`}>
                <div className="icon">
                  {item.icon}
                </div>
                <h3>{t(item.title)}</h3>
                <br />
                <p>{t(item.text)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
