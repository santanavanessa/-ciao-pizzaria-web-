import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors["base-white"]};
    background: ${({ theme }) => theme.colors["brand-orange"]};
    font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    transition: 0.4s;
    line-height: 1.3rem;
    margin-top: 0.7rem;
   
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors["brand-orange-dark"]};
    }
    `;