import styled from 'styled-components'

export default styled.a`
  display: block;
  margin-bottom: 12px;
  padding: 4px;
  padding-bottom: 12px;
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  p {
    font-size: 90%;
    line-height: 1.4;
  }
`
