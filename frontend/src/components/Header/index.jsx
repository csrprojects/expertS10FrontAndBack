import { Container, Profile } from './styles';
import { Link } from 'react-router-dom';
import { Input } from '../Input';
import { useAuth } from '../../hooks/auth/useAuth';
import { useNavigate } from 'react-router-dom';
import { ButtonText } from '../ButtonText';
import avatarImg from '../../assets/avatarImg.png';
import { api } from '../../services/api';
import PropTypes from 'prop-types';

export function Header({onChange}) {
    const { user, signOut } = useAuth();
    const navegate = useNavigate();

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarImg;

    function handleSignOut() {
        navegate('/');
        signOut();
    }

    return (
        <Container>
            <Link to="/">RocketMovies</Link>
            <Input placeholder="Pesquise filmes..." onChange={onChange}/>
            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <ButtonText title="Sair" onClick={handleSignOut} />
                </div>
                <Link to="/profile">
                    <img src={avatarUrl} alt={`foto de ${user.name}`} />
                </Link>
            </Profile>
        </Container>
    );
}

Header.propTypes = {
    onChange: PropTypes.func,
};
