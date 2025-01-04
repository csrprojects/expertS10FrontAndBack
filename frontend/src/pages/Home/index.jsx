import { Container, Title, Posts, Main } from './styles';
import { MoviePost } from '../../components/MoviePost';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth/useAuth';

export function Home() {
    const { signOut } = useAuth();
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await api.get(`/notes?title=${search}`);
                setMovies(response.data);
            } catch (error) {
                if (error.response.data.status) {
                    if (error.response.data.status === 401) {
                        handleSignOut();
                    } else {
                        alert(
                            `${error.response.data.status} : ${error.response.data.error}`
                        );
                    }
                } else if (error.message) {
                    alert(error.message);
                } else {
                    alert('Não foi possível buscar os filmes');
                }
            }
        }
        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const handleNavigate = (route) => {
        navigate(route);
    };

    function handleSignOut() {
        navigate('/');
        signOut();
    }

    return (
        <Container>
            <Header onChange={(e) => setSearch(e.target.value)} />
            <Main>
                <Title>
                    <h1>Meus Filmes</h1>
                    <Button
                        title="Adicionar Filme"
                        icon={FiPlus}
                        onClick={() => handleNavigate('/new')}
                    />
                </Title>
                <Posts>
                    {movies &&
                        movies.map((movie, index) => (
                            <MoviePost
                                key={index}
                                data={movie}
                                onClick={() =>
                                    handleNavigate(`/movie/${movie.id}`)
                                }
                            />
                        ))}
                </Posts>
            </Main>
        </Container>
    );
}
