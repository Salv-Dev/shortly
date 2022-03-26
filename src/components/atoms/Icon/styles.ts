import styled from 'styled-components';

interface Props {
    src: string,
    variant?: string
}

export const Container = styled.div<Props>`
    width: 75px;
    height: 75px;
    border-radius: ${props => {
                        switch(props.variant) {
                            case 'rounded':
                                return '50%';
                            case 'square':
                                return '0px';
                            default:
                                return props.theme.borderRadius;
                        }
                    }};
    background: ${props => `url(${props.src})`} no-repeat;
    background-position: center;
    background-size: 35px;
    background-color: ${props => props.theme.palette.common.violet};
`;