import 'styled-components';

interface IPalette {
    light: {
        main: string,
        text: string,
        accent: string,
        background: string
    },
    dark: {
        main: string,
        text: string,
        accent: string,
        background: string
    }
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string,
        palette: {
            common: {
                black: string,
                white: string
            }
            primary: IPalette
        }
    }
}

