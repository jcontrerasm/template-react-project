import * as React from 'react';
import { Home } from './home/index';
import { reactAnimate } from '../assets/images';
import { AppContainer } from './styled';

export const App = () => (
  <AppContainer>
    <Home/>
    <img src={reactAnimate} alt="react"/>
  </AppContainer>
)
