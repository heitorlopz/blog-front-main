import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #c4c4c4;
  padding: 30px 0;

  .slogan {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: #fff;
    }

    h1 span {
      color: #00f;
    }

    h2 {
      font-size: 16px;
      color: #fff;
    }
    max-width: 600px;
  }

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 50px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #000;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 60px;
        }

        &:hover {
          opacity: 0.2;
        }
      }
    }
  }
`;
