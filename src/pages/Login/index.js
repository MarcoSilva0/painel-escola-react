import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small>Oi</small>
      </Title>
    </Container>
  );
}
