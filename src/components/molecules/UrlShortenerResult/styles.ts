import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.palette.common.white};
    border-radius: ${props => props.theme.borderRadius};
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