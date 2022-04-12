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
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: ${props => props.theme.palette.common.white};
    border-radius: ${props => props.theme.borderRadius};
    animation: ${fadeIn} .3s ease-in-out;
`;

export const OriginalUrl = styled.p`
    padding: 20px;
`;

export const ShortenedUrl = styled.p`
    padding: 20px;
    color: ${props => props.theme.palette.primary.light.accent};
`;

export const Hr = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.palette.primary.light.background};
`;