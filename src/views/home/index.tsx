import * as React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { HomeWrapper } from './styled';

export const Home = () => (
  <HomeWrapper>
    <Header />
    <Content />
  </HomeWrapper>
);
