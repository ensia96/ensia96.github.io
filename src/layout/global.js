import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        color: ${({ theme: { font } }) => font};
        text-decoration: none;
        &:hover {
            text-decoration: none;
        }

        a {
            color: ${({ theme: { font } }) => font};
            text-decoration: none;
            &:hover {
                text-decoration: none;
            }
        }

        code {
            padding: 0.1em 0.6em;
            border-radius: 0.2em;
            white-space: normal;
            background: #ffe887;
            color: #c7a200;
        }
    }
    html, body {
        overflow: auto;

        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${({ theme: { background } }) => background};
        -webkit-text-size-adjust: antialiased;
        -moz-osx-font-smoothing: grayscale;

        div[role='group'] {
            -webkit-overflow-scrolling: touch;
        }
    }
`
