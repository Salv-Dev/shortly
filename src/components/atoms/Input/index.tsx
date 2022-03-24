import { Container, Ipt, ErrorMessage } from './styles';

interface Props {
    placeholder?: string,
    error?: boolean,
    errorMsg?: string
}

const Input = ({ placeholder, error = false, errorMsg = 'Algo deu errado :(' }: Props) => {
  return (
      <Container>
          <Ipt placeholder={placeholder} error={error}/>
          { error && <ErrorMessage>{errorMsg}</ErrorMessage>}
      </Container>
  );
}

export default Input;