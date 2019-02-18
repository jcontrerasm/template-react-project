import * as React from 'react';
import { SliderWrapper } from './styled';

interface Props {
  image: string;
  name: string;
}

export const Slider: React.SFC<Props> = ({ image, name }) => (
  <SliderWrapper>
    <img src={image} alt={name}/>
  </SliderWrapper>
)
