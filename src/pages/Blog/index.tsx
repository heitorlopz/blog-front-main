import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import HeaderBlog from '../../components/HeaderBlog';
import ItemList from '../../components/ItemList';

import { Container } from './styles';

const Admin: React.FC = () => {
  const cont = 0;
  const [destaque, setDestaque] = useState<any | null>(null);
  const [posts, setPosts] = useState<any[] | null>(null);

  useEffect(() => {
    async function loadPosts(): Promise<void> {
      const { data } = await api.get('posts');

      console.log(data[0]);

      setDestaque(data[0]);
      setPosts(data.splice(1));
    }

    loadPosts();
  }, []);

  function dateFormat(data: string): string {
    const date = new Date(data); // had to remove the colon (:) after the T in order to make it work
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const myFormattedDate = `Postado em ${day}-${
      monthIndex + 1
    }-${year} as ${hours}:${minutes}:${seconds}`;
    return myFormattedDate;
  }
  return (
    <>
      <HeaderBlog />

      <Container>
        <h3>Destaque</h3>
        {destaque && (
          <ItemList
            titulo={destaque.titulo}
            data={dateFormat(destaque.criadoEm)}
            texto={destaque.texto}
            usuario={destaque.usuario}
            foto={destaque.foto}
          />
        )}
        <h3>Notícias</h3>
        {posts &&
          posts.map(post => (
            <ItemList
              titulo={post.titulo}
              data={dateFormat(post.criadoEm)}
              texto={post.texto}
              usuario={post.usuario}
              foto={post.foto}
            />
          ))}
      </Container>
    </>
  );
};

export default Admin;
