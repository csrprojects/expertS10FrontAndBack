import { Container, Text } from './styles';
import { Rating } from '../Rating';
import PropTypes from 'prop-types';
import { Tag } from '../Tag';

export function MoviePost({ data, ...rest }) {
    return (
        <Container type="button" {...rest}>
            <h1>{data.title}</h1>
            <Rating rating={data.rating} />
            <Text>{data.description}</Text>
            {data.tags && (
                <footer>
                    {data.tags.map((tag) => (
                        <Tag key={tag.id} title={tag.name} />
                    ))}
                </footer>
            )}
        </Container>
    );
}

MoviePost.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        rating: PropTypes.number,
        description: PropTypes.string,
        tags: PropTypes.array,
    }),
};
