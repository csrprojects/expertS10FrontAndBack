import { Container, Form, Background, BackNavigation } from './styles';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';

export function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNavigate() {
        navigate(-1);
    }

    async function handleSignUp({ name, email, password }) {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos');
        }
        try {
            await api.post('/users', {
                name,
                email,
                password,
            });
            alert('Usuário criado com sucesso');
            navigate(-1);
        } catch (error) {
            if (error.response) {
                return alert(
                    `${error.response.data.status} : ${error.response.data.error}`
                );
            } else {
                return alert('Erro ao criar usuário');
            }
        }
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    icon={FiUser}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    icon={FiMail}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    title="Cadastrar"
                    onClick={() => handleSignUp({ name, email, password })}
                />
                <BackNavigation>
                    <button type="button" onClick={handleNavigate}>
                        <FiArrowLeft /> Voltar para login
                    </button>
                </BackNavigation>
            </Form>
            <Background />
        </Container>
    );
}
