import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Conteudo } from './styles';

interface ItemListProps {
  titulo: string;
  data: string;
  texto: string;
  usuario: string;
  foto: string;
}

const ItemList: React.FC<ItemListProps> = (props: ItemListProps) => (
  <Container>
    <img src={props.foto} />
    <Conteudo>
      <h1>{props.titulo}</h1>
      <h2>{props.data}</h2>
      <p>{props.texto}</p>
      <h2>{props.usuario}</h2>
    </Conteudo>
  </Container>
);

export default ItemList;
