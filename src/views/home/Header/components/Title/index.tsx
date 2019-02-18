import * as React from 'react';

interface Props {
  totalFollowing: number;
}

export const Title: React.SFC<Props> = ({ totalFollowing }) => (
  <div>FOLLOWING {totalFollowing}</div>
)
