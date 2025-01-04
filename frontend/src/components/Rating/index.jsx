import { Container } from './styles';
import PropTypes from 'prop-types';

export function Rating({ rating = 0, maxRating = 5 }) {
    return (
        <Container>
            {[...Array(maxRating)].map((_, index) => {
                if (index > maxRating || rating == null) return null;
                const ratingIndex = index + 1;
                return (
                    <span key={ratingIndex}>
                        {ratingIndex <= rating ? (
                            <span>&#9733;</span>
                        ) : (
                            <span>&#9734;</span>
                        )}
                    </span>
                );
            })}
        </Container>
    );
}

Rating.propTypes = {
    rating: PropTypes.number,
    maxRating: PropTypes.number,
};
