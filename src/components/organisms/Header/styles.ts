import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 40px 20px 40px 20px;
`;

export const Label = styled.label`
    z-index: 3;

    & ~ input {
        display: none;
    }

    & ~ input ~ div {
        display: none;
    }

    & ~ input:checked ~ div {
        display: flex;
    }
`;