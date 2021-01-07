import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        a {
            color: #333;
            text-decoration: none;
            &:hover {
                text-decoration: none;
            }
        }
    }
    html, body {
        overflow: auto;

        font-family: 'Noto Sans KR', sans-serif;
        background-color: $light-background-color;
        -webkit-text-size-adjust: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: background-color 0.3s, color 0.3s;

        div[role='group'] {
            -webkit-overflow-scrolling: touch;
        }
    }
`
