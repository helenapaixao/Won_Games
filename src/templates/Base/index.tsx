import React from 'react'
import { Container } from 'components/Container';
import Menu from 'components/Menu';
import { Footer } from 'templates/Auth/styles';

import * as S from './styles'


export type BaseTemplateProps = {
  children: React.ReactNode;
}


const Base = ({children}: BaseTemplateProps) => (
  <section>
    <Container >
      <Menu />
    </Container>

    {children}

  </section>
)

export default Base
