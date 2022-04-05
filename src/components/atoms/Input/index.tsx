import { Container, Ipt, ErrorMessage } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string,
    error?: boolean,
    errorMsg?: string
}

const Input = ({ placeholder, error = false, errorMsg = 'Algo deu errado :(', ...props }: Props) => {
  return (
      {...props.type === 'checkbox' ? 
        <Ipt type="checkbox" {...props}/>
        :
        <Container>
            <Ipt placeholder={placeholder} error={error} {...props}/>
            { error && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </Container>
        }
  );
}

export default Input;