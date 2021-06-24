import React from 'react';
import { useTranslation } from 'react-i18next';
import { features } from './content';

const Features = () => {
  const { t } = useTranslation('home');
  return (
    <section className="features-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>{t(features.title)}</h2>
          <div className="bar" />
          <p>{t(features.desc)}</p>
        </div>
        <div className="row">
          {features.features.map((item, index) => (
            <div key={`feature-${index}`} className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className={`icon ${(index % 2 === 0) ? 'bg-eb6b3d' : ''}`}>
                  {item.icon}
                </div>
                <h3>{t(item.title)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
