import React, { Component } from 'react';

import { Links } from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilter from './LinksListFilter';

const Link = () => (
  <div>
    <PrivateHeader title="Your Links" />
    <div className="page-content">
      <LinksListFilter />
      <AddLink />
      <LinksList />
    </div>
  </div>
);

export default Link;
