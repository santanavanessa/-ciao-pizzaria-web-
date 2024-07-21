import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .container {
        width: 100%;
        max-width: 70rem;
        margin-right: auto;
        margin-left: auto;


    }
`;

export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

interface HeaderButtonProps {
    variant: "gray" | "orange"
}
   


export const HeaderButton = styled.button<HeaderButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    font-size: ${({ theme}) => theme.textSizes["text-regular-s"]};

    ${({ variant }) =>
    variant === "gray" &&
    css`
    background: ${({ theme }) => theme.colors["gray-bg"]};
    color: ${({ theme}) => theme.colors["dark-gray-text"]};
      svg {
        color: ${({ theme}) => theme.colors["dark-gray-text"]};
      }
    `}

    ${({ variant }) =>
    variant === "orange" &&
    css`
    background: ${({ theme }) => theme.colors["gray-bg"]};
    color: ${({ theme}) => theme.colors["brand-orange-dark"]};
      svg {
        color: ${({ theme}) => theme.colors["brand-orange-dark"]};
      }
    `}

`;

