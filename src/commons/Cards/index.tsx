import React from 'react';
import { CardStyle } from './styles';
import Link from 'next/link';

interface Props {
  url: string;
  children: string | React.ReactNode;
}

export default function Card({ url, children }: Props) {
  return(
    <CardStyle>
      <Link href={url}>
        <a>
          {children}
        </a>
      </Link>
      
    </CardStyle>
  )
}