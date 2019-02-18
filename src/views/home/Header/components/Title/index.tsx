import * as React from 'react';
import { TitleWrapper } from './styled';

interface Props {
  text: string;
}

export const Title: React.SFC<Props> = ({ text }) => (
  <TitleWrapper>{text}</TitleWrapper>
)
