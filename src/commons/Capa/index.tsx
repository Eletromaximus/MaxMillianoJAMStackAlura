import React from 'react';
import Text from '../../components/fundation/Text';
import {CapaStyle} from './styles';
import Image from 'next/image';
import x from './images/linkedin.svg'

function Capa() {
  return (
    <CapaStyle>
      <Text
        tag='h1'
        variant='Title'
        textAlign={{
          md: 'center',
        }} >
        Bem vindo ao meu Portifólio
      </Text>

      <Image
        src='/Github-light.png'
        alt="Github"
        width={200}
        height={200}
      />

    </CapaStyle>
  );
}
export default Capa;
