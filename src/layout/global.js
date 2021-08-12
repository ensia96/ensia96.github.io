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

    del {
        text-decoration: line-through;
    }

    a {
        color: ${({ theme: { font } }) => font};
        text-decoration: none;
        &:hover {
            text-decoration: none;
        }
    }

    .gatsby-highlight {
        display: grid;
    }

    details {
        ::-webkit-details-marker {
            display: none;
        }

        transform-origin: center;
        transition: 200ms linear;

        &[open] summary ~ * {
          animation: open 0.3s ease-in-out;
        }

        @keyframes open {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        margin-top: .25em;
        border-radius: 4px;
        border: .25em solid ${({ theme: { main } }) => main};

        &>:nth-child(2) {
            margin-top: 0.5em;
        }

        &>:not(:first-child) {
            padding: 0 0.5em;
        }

        &>table {
            margin: 1em;
            width: -webkit-fill-available
        }

        &>summary {
            cursor: pointer;
            font-weight: 500;
            color: ${({ theme: { main } }) => main};
            padding: 0.1em 0.5em 0.2em;
            background: ${({ theme: { font } }) => font};
        }

        &>summary:before {
            content: 'ㅡ';
            margin-right: 0.5em;
        }

        &[open]>summary {
            border-bottom: .25em solid ${({ theme: { main } }) => main};
            &:before {
                content: 'ㅁ';
                margin-right: 0.5em;
            }
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
