import { DefaultTheme } from 'styled-components';

export const defaultTheme:DefaultTheme = {
    borderRadius: '8px',
    palette: {
        common: {
            black: '#1f1f1f',
            white: '#ffffff',
            red: '#d93f3f',
            violet: '#3b3054'
        },
        primary: {
            light: {
                main: '#232127',
                text: '#9e9aa7',
                accent: '#2acfcf',
                background: '#f0f1f6'
            },
            dark: {
                main: '#ffffff',
                text: '#bfbfbf',
                accent: '#2acfcf',
                background: '#232127'
            }
        }
    }
}