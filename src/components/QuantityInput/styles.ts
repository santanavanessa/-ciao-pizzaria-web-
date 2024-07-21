import styled, { css } from "styled-components";

interface QuantityInputContainerProps {
  size?: "small" | "medium";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 4px;
  gap: 4px;
  border-radius: 6px;


  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["base-text"]};
    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  padding: 0;
  background: none; 
  transition: color 0.4s, opacity 0.4s;
  color: ${({ theme }) => theme.colors["brand-orange"]};
  z-index: 4;
  
  

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-orange-dark"]};
  }
`;
