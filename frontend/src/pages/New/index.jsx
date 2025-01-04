import { Container, Main, Title, Form, Space, Tags, Footer } from './styles';
import { Header } from '../../components/Header';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { InputTag } from '../../components/InputTag';
import { Textarea } from '../../components/Textarea';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { useAuth } from '../../hooks/auth/useAuth';
import { api } from '../../services/api';

export function New() {
    const navigate = useNavigate();
    //const { user } = useAuth();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);

    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState('');

    function handleAddTag() {
        if (newTags) {
            setTags((prevTags) => [...prevTags, newTags]);
            setNewTags('');
        }
    }

    function handleDelTag(tag) {
        setTags((prevTags) => prevTags.filter((item) => item !== tag));
    }

    async function handleNewNotes({ title, description, rating, tags }) {
        if (newTags) {
            return alert('Você deixou uma tag no campo sem adicionar. Clique em "+" para adicionar a tag ou deixe o campo vazio para prosseguir.');
          }
    
        try {
            await api.post('/notes', {
                title,
                description,
                rating,
                tags,
            });
            alert('Nota criada com sucesso');
            navigate(-1);
            
        } catch (error) {
            if (error.response) {
                return alert(
                    `${error.response.data.status} : ${error.response.data.error}`
                );
            } else {
                return alert('Erro ao criar nota');
            }
        }
    }

    function handleNavigate() {
        navigate(-1);
    }

    function handleDelMovie() {
        const confirmDelete = confirm('Deseja excluir este filme?');
        if (confirmDelete) {
            setTitle('');
            setDescription('');
            setRating(0);
            setTags([]);
            setNewTags('');

            alert('Filme excluído com sucesso');
        }
    }

    return (
        <Container>
            <Header />
            <Main>
                <Form>
                    <Title>
                        <button type="button" onClick={handleNavigate}>
                            <FiArrowLeft size={20} />
                            Voltar
                        </button>
                        <h1>Novo Filme</h1>
                    </Title>
                    <Space>
                        <Input
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </Space>
                    <Textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Tags>
                        <h2>Marcadores</h2>
                        <div>
                            {tags &&
                                tags.map((tag, index) => (
                                    <InputTag
                                        key={index}
                                        value={tag}
                                        onclick={() => handleDelTag(tag)}
                                    />
                                ))}
                            <InputTag
                                placeholder="Novo marcador"
                                value={newTags}
                                isnew
                                onChange={(e) => setNewTags(e.target.value)}
                                onclick={handleAddTag}
                            />
                        </div>
                    </Tags>
                    <Space>
                        <Button title="Excluir filme" data-view={'inverse'} onClick={handleDelMovie}/>
                        <Button
                            title="Salvar alterações"
                            onClick={() =>
                                handleNewNotes({
                                    title,
                                    description,
                                    rating,
                                    tags,
                                })
                            }
                        />
                    </Space>
                </Form>
            </Main>
            <Footer />
        </Container>
    );
}
