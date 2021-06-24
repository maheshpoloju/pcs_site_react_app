import React from 'react';
import { useTranslation } from 'react-i18next';
import Image1 from '../../assets/img/1.png';

import { about } from './content';
import Features from './features';

const Body = () => {
  const { t } = useTranslation('about');
  return (
    <>
      <section className="about-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={Image1} alt="image1" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <div className="bar" />
                </div>
                {about.content.map((item, index) => <p key={`item-${index}`}>{t(item.desc)}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
};

export default Body;
