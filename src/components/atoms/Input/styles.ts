import styled from 'styled-components';

export const Ipt = styled.input`
    border: none;
    font-size: 18px;
    padding: 15px;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.palette.primary.light.main};
    font-weight: bold;
`;