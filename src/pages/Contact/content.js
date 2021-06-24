import React from 'react';
import { Mail, MapPin, Phone } from 'react-feather';
// eslint-disable-next-line import/prefer-default-export
export const contact = {
  title: 'contact.title',
  email: {
    icon: <Mail />,
    title: 'contact.email.title',
    email: 'anu@pcsitspl.com',
  },
  address: {
    icon: <MapPin />,
    title: 'PCS IT Solutions Pvt. Ltd.',
    addresses: [
      '2nd Floor, Godrej Millennium, 9, Koregaon Park Road, Pune - 411001.',
      '6th Floor, Pentagon P2, Magarpatta City, Pune - 411013',
    ],
  },
  phone: {
    icon: <Phone />,
    title: 'contact.phone.title',
    phones: [
      '+ (91) 93597 60780',
      '+ (91) 93730 97062‬',
    ],
  },
};
