import { Container, Ipt, ErrorMessage } from './styles';

interface Props {
    placeholder?: string,
    error?: boolean
}

const Input = ({ placeholder, error = false }: Props) => {
  return (
      <Container>
          <Ipt placeholder={placeholder} error={error}/>
          { error && <ErrorMessage>Por favor, adicione uma url.</ErrorMessage>}
      </Container>
  );
}

export default Input;