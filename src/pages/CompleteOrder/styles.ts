import styled from "styled-components"

export const CompleteOrderContainer = styled.form`
    width: 100vw;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 6rem;

    @media screen and (max-width: 768px) {
    flex-direction: column;
  }
    
`;

export const SectionBaseStyle = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
`;