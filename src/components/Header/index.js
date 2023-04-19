/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a>
        <FaHome size={24} />
        Home
      </a>
      <a>
        <FaSignInAlt size={24} />
        Entrar
      </a>
      <a>
        <FaUserAlt size={24} />
        Perfil
      </a>
    </Nav>
  );
}
