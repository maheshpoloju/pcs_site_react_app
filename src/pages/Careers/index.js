import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../../components/PageTitle';
import { careers } from './content';

const Careers = () => {
  const { t } = useTranslation('careers');
  return (
    <div>
      <PageTitle title={t(careers.title)} subtitle={t(careers.subtitle)} />
      <section className="features-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="row">
            {careers.careers.map((item, index) => (
              <div key={`careers-${index}`} className="col-lg-12 col-md-12">
                <div className="single-features client">
                  <h4 className="mb-4">{item.title}</h4>
                  {item.items.map((e, i) => (
                    <React.Fragment key={`careers-items-${i}`}>
                      <h5>{t(e.title)}</h5>
                      <ul>
                        {e.list.map((l, j) => <li key={`careers-item-${i}-${j}`}>{t(l)}</li>)}
                      </ul>
                    </React.Fragment>
                  ))}
                  <a href={`mailto:${item.email}?subject=${item.subject}`} className="btn btn-primary">{t(careers.apply)}</a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
