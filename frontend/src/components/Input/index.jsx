import { Container } from './styles';
import PropTypes from 'prop-types';

export function Input({ icon: Icon = null, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    );
}

Input.propTypes = {
    isnew: PropTypes.bool,
    icon: PropTypes.elementType,
};
