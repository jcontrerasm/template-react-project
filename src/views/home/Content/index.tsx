import * as React from 'react';
import { Slider } from './components/Slider';
import { reactAnimate } from '../../../assets/images'

export const Content = () => (
  <React.Fragment>
    <Slider image={reactAnimate} name="react"/>
  </React.Fragment>
);
