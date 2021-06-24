import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../../components/PageTitle';
import { contact } from './content';

const Contact = () => {
  const { t } = useTranslation('contact');
  return (
    <div>
      <PageTitle title={t(contact.title)} />
      <section className="contact-info-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  {contact.email.icon}
                </div>
                <h3>{t(contact.email.title)}</h3>
                <p><a href={`mailto:${contact.email.email}`}>{contact.email.email}</a></p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  {contact.address.icon}
                </div>
                <h3>{contact.address.title}</h3>
                {contact.address.addresses.map((item, index) => (
                  <>
                    <p key={`address-${index}`}>{item}</p>
                    <br />
                  </>
                ))}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="icon">
                  {contact.phone.icon}
                </div>
                <h3>{t(contact.phone.title)}</h3>
                {contact.phone.phones.map((item, index) => (
                  <p key={`phone-${index}`}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
