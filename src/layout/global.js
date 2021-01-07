import React from 'react'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        a {
            text-decoration: none;
            &:hover {
                text-decoration: none;
            }
        }
    }
    html, body {
        overflow: auto;

        div[role='group'] {
            -webkit-overflow-scrolling: touch;
        }
    }
`
