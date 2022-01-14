import React from 'react';

import Header from '../Header';
import { Container } from './index.styles';

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default Layout;
