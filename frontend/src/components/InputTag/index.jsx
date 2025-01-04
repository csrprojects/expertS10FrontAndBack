import { Container } from './styles';
import PropTypes from 'prop-types';
import { FiPlus, FiX } from 'react-icons/fi';

export function InputTag({ isnew = false, value, onclick, ...rest }) {
    
    return (
        <Container $isnew={isnew.toString()}>
            <input type="text" value={value} readOnly={!isnew} {...rest} />
           
           <button
               type="button"
               onClick={onclick}
           >
               {isnew ? <FiPlus /> : <FiX />}
           </button>
        </Container>
    );
}

InputTag.propTypes = {
    isnew: PropTypes.bool,
    value: PropTypes.string,
    onclick: PropTypes.func,
};
