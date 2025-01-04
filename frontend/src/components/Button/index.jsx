import { Container } from './styles';
import PropTypes from 'prop-types';

export function Button({ title, icon: Icon, ...rest }) {
    return (
        <Container type="button" {...rest}>
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    loading: PropTypes.bool,
};
