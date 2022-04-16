import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    background: url('/images/bg-shorten-mobile.svg') no-repeat;
    background-position: right top;
    background-color: ${props => props.theme.palette.common.violet};
    border-radius: ${props => props.theme.borderRadius};

    @media (min-width: 700px) {
        flex-direction: row;
        padding: 30px;

        & > div:first-child {
            flex: 1;
        }
    }

    @media (min-width: 1200px) {
        
        max-width: 900px;
    }
`;

export const WrapperUrlShortenerResult = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 100px;
    margin-top: -70px;

    @media (min-width: 700px) {
        gap: 10px;
        margin-top: -35px;
    }
`;