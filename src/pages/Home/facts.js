import React from 'react';
import { Link } from 'react-router-dom';
import Odometer from 'react-odometerjs';
import { useTranslation } from 'react-i18next';
import Map from '../../assets/img/map.png';
import { facts } from './content';

const Facts = () => {
  const { t } = useTranslation('home');
  const [counts, setCounts] = React.useState(facts.facts.map(() => 0));

  React.useEffect(() => {
    setCounts(facts.facts.map((e) => t(e.count)));
  }, [t]);

  return (
    <section className="funfacts-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>{t(facts.title)}</h2>
          <div className="bar" />
        </div>

        <div className="row">
          {facts.facts.map((item, index) => (
            <div key={`fact-${index}`} className="col-4">
              <div className="funfact">
                <h3>
                  <Odometer value={counts[index]} duration={300} />
                  +
                </h3>
                <p>{t(item.title)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-cta-box">
          <h6>{t(facts.footer.title)}</h6>
          <p>{t(facts.footer.desc)}</p>
          <Link to="/contact" className="btn btn-primary">{t(facts.footer.contactUs)}</Link>
        </div>

        <div className="map-bg">
          <img src={Map} alt="map" />
        </div>
      </div>
    </section>
  );
};

export default Facts;
