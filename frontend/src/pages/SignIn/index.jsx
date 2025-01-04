import { Container, Form, Background } from './styles';
import { FiLock, FiMail } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth/useAuth';
import { useState } from 'react';


export function SignIn() {
    const { signIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" icon={FiMail} type="text" onChange={e=>setEmail(e.target.value)} />
                <Input placeholder="Senha" type="password" icon={FiLock} onChange={e=>setPassword(e.target.value)} />
                <Button title="Entrar" onClick={handleSignIn}/>
                <Link to="/register">Criar conta</Link>
            </Form>
            <Background />
        </Container>
    );
}
