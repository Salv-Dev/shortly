import styled from 'styled-components';

interface Props {
    error?: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Ipt = styled.input<Props>`
    border: 3px solid ${props => props.error ? props.theme.palette.common.red : props.theme.palette.common.white};
    font-size: 18px;
    padding: 15px;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.error ? props.theme.palette.common.red : props.theme.palette.primary.light.main};
    font-weight: bold;

    ::-webkit-input-placeholder {
        color: ${props => props.error ? props.theme.palette.common.red : props.theme.palette.primary.light.text};
        opacity: 0.5;
    }

    :-moz-placeholder {
        color: ${props => props.error ? props.theme.palette.common.red : props.theme.palette.primary.light.text};
        opacity: 0.5;
    }

    ::-moz-placeholder {
        color: ${props => props.error ? props.theme.palette.common.red : props.theme.palette.primary.light.text};
        opacity: 0.5;
    }

    :-ms-input-placeholder {
        color: ${props => props.error ? props.theme.palette.common.red : props.theme.palette.primary.light.text};
        opacity: 0.5;
    }
`;

export const ErrorMessage = styled.p`
    font-size: 0.8rem;
    font-style: italic;
    color: ${props => props.theme.palette.common.red};
    margin-top: 10px;
`;