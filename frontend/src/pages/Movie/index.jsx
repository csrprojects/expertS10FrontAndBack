import { Container, Main, Section, Title, Publish, Tags, Nav } from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import avatarImg from '../../assets/avatarImg.png';
import { useAuth } from '../../hooks/auth/useAuth';
import { Header } from '../../components/Header';
import { Rating } from '../../components/Rating';
import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Tag } from '../../components/Tag';
import { api } from '../../services/api';
import { ptBR } from 'date-fns/locale';

export function Movie() {
    const params = useParams();
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarImg;

    useEffect(() => {
        async function fetchMovie() {
            try {
                const response = await api.get(`/notes/${params.id}`);
                if (response.data.user_id !== user.id) {
                    alert('Filme não encontrado');
                    return navigate(-1);
                }
                setNote(response.data);
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
                    alert('Não foi possível baixar o filme');
                }
                navigate(-1);
            }
        }
        fetchMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    async function handleDelMovie(id) {
        const confirmDelete = confirm('Deseja excluir este filme?');
        if (confirmDelete) {
            try {
                await api.delete(`/notes/${id}`);
                alert('Filme excluído com sucesso');
                navigate(-1);
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
                    alert('Não foi possível excluir o filme');
                }
            }
        }
    }

    function handleDate(date) {
        const formattedDate = format(
            parseISO(date),
            "dd'/'MM'/'yy 'às' HH:mm",
            {
                locale: ptBR,
            }
        );
        return formattedDate;
    }

    function handleSignOut() {
        navigate('/');
        signOut();
    }

    function handleNavigate() {
        navigate(-1);
    }

    return (
        <Container>
            <Header />
            <Main>
                <Section>
                    <Nav>
                        <button type="button" onClick={handleNavigate}>
                            <FiArrowLeft size={20} />
                            Voltar
                        </button>
                        <button
                            type="button"
                            onClick={() => handleDelMovie(note.id)}
                        >
                            Excluir Filme
                        </button>
                    </Nav>
                    {note && (
                        <>
                            <Title>
                                <h1>{note.title}</h1>
                                <Rating rating={note.rating} />
                            </Title>
                            <Publish>
                                <span>
                                    <img
                                        src={avatarUrl}
                                        alt={`foto de ${user.name}`}
                                    />{' '}
                                    por
                                    {` ${user.name}`}
                                </span>
                                <span>
                                    <FiClock /> {handleDate(note.created_at)}
                                </span>
                            </Publish>
                            <Tags>
                                {note.tags.map((tag) => (
                                    <Tag key={tag.id} title={tag.name} />
                                ))}
                            </Tags>
                            <p>{note.description}</p>
                        </>
                    )}
                </Section>
            </Main>
        </Container>
    );
}
