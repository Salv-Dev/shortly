import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 800px;
    background-color: ${props => props.theme.palette.primary.light.main};
    padding: 40px 20px;
`;