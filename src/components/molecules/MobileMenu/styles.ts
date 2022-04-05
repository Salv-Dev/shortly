import styled from 'styled-components';

export const Container = styled.nav`
    position: absolute;
    margin: 20px;
    width: 100%;
    height: 400px;
    background-color: ${props => props.theme.palette.common.violet}
`;