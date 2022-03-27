import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 250px;
    background-color: ${props => props.theme.palette.common.white};
    border-radius: ${props => props.theme.borderRadius};

    &:not(:last-child) {
        margin-bottom: 80px;
    }

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: -80px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 8px;
        height: 80px;
        background-color: ${props => props.theme.palette.primary.light.accent};
    }
`;

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px;
`;

export const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 2rem;
    color: ${props => props.theme.palette.primary.light.main};
    text-align: center;
`;

export const Desc = styled.p`
    font-size: 14px;
    color: ${props => props.theme.palette.primary.light.text};
    text-align: center;
    line-height: 1.4rem;
    margin-bottom: 10px;
`;