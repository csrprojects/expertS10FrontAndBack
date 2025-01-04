import { Container } from './styles';
import PropTypes from 'prop-types';

export function ButtonText({ title, icon = null, ...rest }) {
    return (
        <Container type="button" {...rest}>
            {icon}{title}
        </Container>
    );
}

ButtonText.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    icon: PropTypes.element,
};
