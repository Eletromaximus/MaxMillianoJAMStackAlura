import React from 'react';
import Text from '../../components/fundation/Text';
import {CapaStyle} from './styles/styles';
import Image from 'next/image';


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



    </CapaStyle>
  );
}
export default Capa;
