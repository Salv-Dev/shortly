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

    @media (min-width: 700px) {
        flex-direction: row;
        align-items: center;
        padding: 15px 20px;
        gap: 20px;

        & > p:first-child {
            flex: 1;
        }

        & > button {
            margin: 0 !important;
            padding: 5px 15px !important;
        }
    }

    @media (min-width: 1200px) {
        max-width: 900px;
        left: 50%;
        transform: translate(-50%, 0);
    }

    @media (min-width: 1400px) {
        max-width: 1200px;
    }
`;

export const OriginalUrl = styled.p`
    padding: 20px;

    @media (min-width: 700px) {
        padding: 0;
    }
`;

export const ShortenedUrl = styled.p`
    padding: 20px;
    color: ${props => props.theme.palette.primary.light.accent};

    @media (min-width: 700px) {
        padding: 0;
    }
`;

export const Hr = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.palette.primary.light.background};

    @media (min-width: 700px) {
        display: none;
    }
`;