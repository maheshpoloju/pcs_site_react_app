import React from 'react';
import {
  Bookmark, CheckSquare, ChevronsRight, Feather,
} from 'react-feather';

/* eslint-disable import/prefer-default-export */
export const footer = {
  title: 'footer.title',
  subtitle: 'footer.subtitle',
  routes: [
    { icon: <Bookmark />, title: 'footer.routes.0' },
    { icon: <CheckSquare />, title: 'footer.routes.1' },
    { icon: <ChevronsRight />, title: 'footer.routes.2' },
    { icon: <Feather />, title: 'footer.routes.3' },
  ],
  copyright: 'footer.copyright',
};
