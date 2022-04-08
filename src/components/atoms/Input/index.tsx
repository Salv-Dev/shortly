import { forwardRef } from 'react';
import { Container, Ipt, ErrorMessage } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string,
    error?: boolean,
    errorMsg?: string
}

const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, error = false, errorMsg = 'Algo deu errado :(',  ...props }, ref) => {
  return (
      {...props.type === 'checkbox' ? 
        <Ipt ref={ref} type="checkbox" {...props}/>
        :
        <Container>
            <Ipt ref={ref} placeholder={placeholder} error={error} {...props}/>
            { error && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </Container>
        }
  );
})

export default Input;