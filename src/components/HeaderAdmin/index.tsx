import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

// import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const HeaderAdmin: React.FC<HeaderProps> = ({
  size = 'large',
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <h1>Hebera Games</h1>
      <nav>
        <>
          <Link to="/">Usuários</Link>
          <Link to="/newUser">Novo Usuário</Link>
          <Link to="/newPost">Nova Postagem</Link>
          <Link to="/blog">BLOG</Link>
        </>
      </nav>
    </header>
  </Container>
);

export default HeaderAdmin;
