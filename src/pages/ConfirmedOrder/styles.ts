import styled from "styled-components";

export const ConfirmedOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  p {
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
    

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
      margin-bottom: 2rem;

      section {
        flex-direction: column-reverse;

      img {
      width: 60%;
      margin-bottom: 2rem;
      
      }
    }
  }

`;

export const OrderDetailsContainer = styled.div`
  padding: 2rem;
  border-radius: 6px;
  position: relative;
  background: ${({ theme }) => theme.colors["base-background"]};
  gap: 2rem;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    inset: -3px;
    z-index: -1;
    border-radius: 7px;
    background: hsla(44, 71%, 52%, 1);

    background: linear-gradient(
      90deg,
      hsla(44, 71%, 52%, 1) 0%,
      hsla(35, 79%, 57%, 1) 50%,
      hsla(28, 60%, 52%, 1) 100%
    );

    background: -moz-linear-gradient(
      90deg,
      hsla(44, 71%, 52%, 1) 0%,
      hsla(35, 79%, 57%, 1) 50%,
      hsla(28, 60%, 52%, 1) 100%
    );

    background: -webkit-linear-gradient(
      90deg,
      hsla(44, 71%, 52%, 1) 0%,
      hsla(35, 79%, 57%, 1) 50%,
      hsla(28, 60%, 52%, 1) 100%
    );

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#DBAC2C", endColorstr="#E8A13D", GradientType=1 );

    

  }

  @media screen and (min-width: 768px){
    min-width: 32rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 90%;
    text-align: initial;

  } 
`;
