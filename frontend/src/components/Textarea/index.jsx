import {  Container } from "./styles";
import PropTypes from 'prop-types';

export function Textarea({value, ...rest}) {
  return (
    <Container value={value} {...rest}>
    </Container>
  );
}

Textarea.propTypes = {
  value: PropTypes.string,
};