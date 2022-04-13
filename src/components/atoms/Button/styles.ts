import styled from 'styled-components';

interface Props {
    variant?: string,
    size?: string
}

export const Container = styled.button<Props>`
    border: 3px solid ${props => {
                        switch(props.variant) {
                            case 'rounded-ghost' :
                                return 'transparent';
                            default : 
                                return props.theme.palette.primary.light.accent;
                        }
                    }};
    background-color: ${props => {
                        switch(props.variant) {
                            case 'rounded-ghost' :
                                return 'transparent';
                            default : 
                                return props.theme.palette.primary.light.accent;
                        }
                    }};
    color: ${props => props.theme.palette.common.white};
    padding: ${props => props.size === 'sm'? '5px 20px' : '10px 40px'};
    font-size: ${props => props.size === 'sm'? '0.7rem' : '1rm'};
    border-radius: ${props => {
                        switch(props.variant) {
                            case 'rounded' :
                                return '30px';
                            case 'squared' : 
                                return '0px';
                            case 'rounded-ghost' :
                                return '30px';
                            default : 
                                return props.theme.borderRadius;
                        }
                    }};
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:active,
    &:hover {
        filter: saturate(150%);
        
    }
`;