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
        background: ${({
          theme: {
            tag: { background },
          },
        }) => background};
        color: ${({
          theme: {
            tag: { font },
          },
        }) => font};
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
