import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    z-index: 2;
`;

export const Nav = styled.nav`
    position: absolute;
    top: 100px;
    left: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding: 40px;
    background-color: ${props => props.theme.palette.common.violet};
    border-radius: ${props => props.theme.borderRadius};
`;

export const Hr = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.palette.common.white};
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: -10px;
`;