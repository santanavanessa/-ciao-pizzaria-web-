import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  @media screen and (max-width: 800px) {
    width: 100%;

    .complete-order-subtitle{ 
        text-align: center;
        margin-bottom: 1rem;
    }
  }
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const AddressFormContainer = styled.div`
  width: 100%;

  .row {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    > div {
      flex: 1;
    }
    + .row {
      margin-top: 1rem;
    }

    .cep {
      max-width: 9rem;
    }
    .complement {
      flex: 2;
    }
    .city {
      flex: 1.5;
    }
    .uf {
      flex: 0.4;
    }
  }
  @media (max-width: 500px) {
    .row {
      flex-direction: column;
    }
    .cep {
      max-width: 100% !important;
    }
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
  }

  

  @media screen and (max-width: 620px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
