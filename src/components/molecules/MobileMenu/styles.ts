import styled from 'styled-components';

export const Container = styled.nav`
    position: absolute;
    top: 100px;
    left: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    height: 400px;
    background-color: ${props => props.theme.palette.common.violet};
    border-radius: ${props => props.theme.borderRadius};
`;