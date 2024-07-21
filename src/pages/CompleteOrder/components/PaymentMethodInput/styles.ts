import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
    input {
        visibility: hidden;
        appearance: none;
    }

    input:checked + label div {
       background:  ${({ theme}) => theme.colors["gray-bg"]};
       border-color: ${({ theme}) => theme.colors["brand-orange"]};
       background: #F2F2F2;
       color: #272221;

       &:hover {
            background:  ${({theme}) => theme.colors["brand-orange-light"]};
       }

    }
`;

export const ContentContainer = styled.div`
    min-width: fit-content;
   padding: 0 1rem;
    background: ${({ theme }) => theme.colors["base-button"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    transition: 0.4s;

    svg {
        color: ${({ theme }) => theme.colors["base-text"]};
    }
    &:hover {
       background: ${({ theme }) => theme.colors["base-hover"]};;
    }

    user-select: none;
`