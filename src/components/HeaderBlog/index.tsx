import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

// import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const HeaderBlog: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <nav>
        <>
          <Link to="/">Admin</Link>
        </>
      </nav>
    </header>
    <div className="slogan">
      <h1>
        A utopia da
{' '}
<span>realidade virtual</span>
      </h1>
      <h2>
        Entenda como as promessas tecnológicas da realidade virtual podem
        impactar na vida de milhares de pessoas em um futuro próximo.
      </h2>
    </div>
  </Container>
);

export default HeaderBlog;
