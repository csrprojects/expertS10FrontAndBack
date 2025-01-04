import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth/useAuth';
import { useNavigate } from 'react-router-dom';
import avatarImg from '../../assets/avatarImg.png';
import { api } from '../../services/api';

export function Profile() {
    const { user, updateProfile } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [old_password, setOldPassword] = useState('');

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarImg;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    function handleNavigate() {
        navigate(-1);
    }

    async function handleUpdateProfile() {
        const updated = { name, email, password, old_password };
        const userUpdated = Object.assign(user, updated);
        await updateProfile({ user: userUpdated, avatarFile });
    }

    function handleChangeAvatar(e) {
        const file = e.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <button onClick={handleNavigate}>
                    <FiArrowLeft size={24} />
                    Voltar
                </button>
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt={user.name} />
                    <label htmlFor="avatar">
                        <FiCamera size={24} />
                        <input
                            type="file"
                            id="avatar"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input
                    value={name}
                    type="text"
                    icon={FiUser}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    value={email}
                    type="text"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button title="Salvar" onClick={handleUpdateProfile} />
            </Form>
        </Container>
    );
}
