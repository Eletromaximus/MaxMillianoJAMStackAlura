import React from 'react';
import { Grid } from '../../components/fundation/layout/Grid';
import Text from '../../components/fundation/Text';

import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardInfoWrapper,
  CardDescription,
} from './styles';

interface Props {
 size: number;
 title: string;
 children?: string | React.ReactNode;
}

export const HighLightCard = ({ size,  title, children }: Props) => (
  <Grid.Col value={size}>
    <CardWrapper>
      <CardImage>
        {children}
      </CardImage>
      <CardInfoWrapper>
        <CardTitle>
          <Text
            variant="paragraph1"
            tag="h2"
            color="inherit"
          >
            {title}
          </Text>
        </CardTitle>
        <CardDescription>
          Relógio Pomodoro
        </CardDescription>
      </CardInfoWrapper>
    </CardWrapper>
  </Grid.Col>
);