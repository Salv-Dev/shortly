import { DefaultTheme } from 'styled-components';

export const defaultTheme:DefaultTheme = {
    borderRadius: '8px',
    palette: {
        common: {
            black: '#1f1f1f',
            white: '#ffffff',
            red: '#d93f3f'
        },
        primary: {
            light: {
                main: '#b30543',
                text: '#9e9aa7',
                accent: '#2acfcf',
                background: '#bfbfbf'
            },
            dark: {
                main: '#ffffff',
                text: '#bfbfbf',
                accent: '#2acfcf',
                background: '#b30543'
            }
        }
    }
}