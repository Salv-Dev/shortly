import { keyframes } from "styled-components";
import styled from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        top: -30px;
    }
    to {
        opacity: 1;
        top: 0;
    }
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    z-index: 2;
    animation: ${fadeIn} .3s ease-in-out;
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