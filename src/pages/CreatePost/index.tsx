import React, { useState, useEffect, FormEvent } from 'react';

// import { useState, useEffect } from 'react';

import api from '../../services/api';

import HeaderAdmin from '../../components/HeaderAdmin';

import { Container, Form } from './styles';

const CreatePost: React.FC = () => {
  // variaveis
  const currentUser = null;
  const [newTitulo, setNewTitulo] = useState('');
  const [newUsuario, setNewUsuario] = useState('');
  const [newImagem, setNewImagem] = useState('');
  const [newTexto, setNewTexto] = useState('');
  // const [newTelefone, setNewTelefone] = useState('');

  const [usuarios, setUsers] = useState<any[] | null>(null);

  useEffect(() => {
    // utilizada para desparo de efeitos colaterais
    async function loadUsers(): Promise<void> {
      const { data } = await api.get('usuarios');

      const { users } = data;

      console.log(data);
      setUsers(data);
    }

    loadUsers();
  }, []);

  function cancelUserCreation(): void {
    console.log('cancel');

    try {
      // await api.post('/transactions/import', data);
    } catch (err) {
      // console.log(err.response.error);
    }
  }

  async function submitPostCreation(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    console.log(newTitulo, newUsuario, newImagem, newTexto);
    // TODO
    const titulo = newTitulo;
    const usuario = newUsuario;
    const foto = newImagem;
    const texto = newTexto;

    const post = { titulo, usuario, foto, texto };

    try {
      await api.post('posts', post);
      alert(`Post ${titulo} criado!`);

      setNewTitulo('');
      setNewUsuario('Selecione...');
      setNewImagem('');
      setNewTexto('');
    } catch (err) {
      alert(`Erro ao tentar criar o usuário ${titulo}!`);
    }
  }

  return (
    <>
      <HeaderAdmin />
      <Container>
        <h3>Nova Postagem</h3>

        <Form onSubmit={submitPostCreation}>
          <span>Título</span>
          <input
            value={newTitulo}
            onChange={e => setNewTitulo(e.target.value)}
            placeholder="Insira o título do post"
          />

          <span>Usuário</span>
          <select
            value={newUsuario}
            onChange={e => setNewUsuario(e.target.value)}
          >
            <option>Selecione...</option>
            {usuarios &&
              usuarios.map(usuario => <option>{usuario._id}</option>)}
          </select>

          <span>Imagem</span>
          <input
            value={newImagem}
            onChange={e => setNewImagem(e.target.value)}
            placeholder="Insira a URL da imagem"
          />

          <span>Texto</span>
          <textarea
            value={newTexto}
            onChange={e => setNewTexto(e.target.value)}
            placeholder="Insira o conteúdo da sua postagem"
          />

          <div>
            <button
              className="cancelButton"
              onClick={cancelUserCreation}
              type="button"
            >
              Cancelar
            </button>

            <button className="submitButton" type="submit">
              Salvar
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default CreatePost;
