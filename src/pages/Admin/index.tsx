import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import HeaderAdmin from '../../components/HeaderAdmin';

import { Container, TableContainer } from './styles';

import Edit from '../../assets/edit.svg';
import Delete from '../../assets/delete.svg';

interface User {
  id: string;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}

interface Response {
  users: User[];
}

const Admin: React.FC = () => {
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

  function editItem(): void {
    alert('funcionalidade indisponível');
  }

  function deleteItem(): void {
    alert('funcionalidade indisponível');
  }

  return (
    <>
      <HeaderAdmin />

      <Container>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {usuarios &&
                usuarios.map(usuario => (
                  <tr key={usuario.id}>
                    <td className="nome">{usuario.nome}</td>
                    <td className="email">{usuario.email}</td>
                    <td className="telefone">{usuario.telefone}</td>
                    <td>
                      <a onClick={editItem}>
                        <img src={Edit} alt="GoFinances" />
                      </a>

                      <a onClick={deleteItem}>
                        <img src={Delete} alt="GoFinances" />
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Admin;
