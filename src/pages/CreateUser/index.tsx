import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import HeaderAdmin from '../../components/HeaderAdmin';

import { Container, Form } from './styles';

const CreateUser: React.FC = () => {
  const [newNome, setNewNome] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newTelefone, setNewTelefone] = useState('');

  function cancelUserCreation(): void {
    console.log('cancel');

    setNewNome('');
    setNewEmail('');
    setNewTelefone('');
  }

  async function submitUserCreation(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    console.log(newNome, newEmail, newTelefone);
    // TODO
    const nome = newNome;
    const email = newEmail;
    const telefone = newTelefone;
    const senha = '12345';

    const users = { nome, email, telefone, senha };

    try {
      await api.post('usuarios', users);
      alert(`Usuário ${nome} criado!`);

      setNewNome('');
      setNewEmail('');
      setNewTelefone('');
    } catch (err) {
      alert(`Erro ao tentar criar o usuário ${nome}!`);
    }
  }

  return (
    <>
      <HeaderAdmin />
      <Container>
        <div>
          <h3>Novo Usuário</h3>
        </div>

        <Form onSubmit={submitUserCreation}>
          <span>Nome</span>
          <input
            value={newNome}
            onChange={e => setNewNome(e.target.value)}
            placeholder="Insira seu nome"
          />

          <span>Email</span>
          <input
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
            placeholder="Insira seu email"
          />

          <span>Telefone</span>
          <input
            value={newTelefone}
            onChange={e => setNewTelefone(e.target.value)}
            placeholder="Insira seu telefone"
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

export default CreateUser;
