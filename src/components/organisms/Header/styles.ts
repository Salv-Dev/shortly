import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 40px 20px 40px 20px;
`;

export const Label = styled.label`
    & ~ input {
        display: none;
    }

    & ~ input ~ nav {
        display: none;
    }

    & ~ input:checked ~ nav {
        display: flex;
    }
`;