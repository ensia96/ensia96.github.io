import styled from 'styled-components'

export default styled.a`
  display: inline-block;
  font-size: 95%;
  padding: 2px 6px;
  font-weight: bolder;
  border-radius: 8px;
  transform-origin: center;
  animation: flutter 2s infinite linear;

  background-color: #ffffff;
  color: #333333;

  @-webkit-keyframes flutter {
    0% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-5deg);
    }
    60% {
      transform: rotate(5deg);
    }
    65% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes flutter {
    0% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-5deg);
    }
    60% {
      transform: rotate(5deg);
    }
    65% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`
