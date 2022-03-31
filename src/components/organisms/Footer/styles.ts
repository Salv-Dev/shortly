import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 800px;
    background-color: ${props => props.theme.palette.primary.light.main};
    padding: 60px 20px;
`;

export const WrapperList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 20px;
`;