import styled from 'styled-components';

export const Container = styled.div`
    height: 150px;
    margin: 20px;
    background: url('/images/bg-shorten-mobile.svg') no-repeat;
    background-position: right top;
    background-color: ${props => props.theme.palette.common.violet};
    border-radius: ${props => props.theme.borderRadius};
`;