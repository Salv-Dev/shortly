import styled from 'styled-components';

export const Container = styled.footer`
    background-color: ${props => props.theme.palette.primary.light.main};    
`;

export const WrapperFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 60px 20px;

    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 60px 100px;
        gap: 40px;

        & > a {
            flex: 1;
        }
    }

    @media (min-width: 1200px) {
        max-width: 900px;
        margin: 0 auto;
        padding: 60px 0;
    }

    @media (min-width: 1400px) {
        max-width: 1200px;
        gap: 80px;
    }
`;

export const WrapperList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;

    @media (min-width: 1000px) {
        flex-direction: row;
        margin-top: 0;
    }

    @media (min-width: 1400px) {
        gap: 80px;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    margin-top: 40px;

    @media (min-width: 1000px) {
        width: auto;
        margin-top: 0;
    }
`;