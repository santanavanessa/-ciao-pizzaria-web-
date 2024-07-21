import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedProductContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;


@media screen and (max-width: 768px) {
    width: 100%;

    .complete-order-subtitle{ 
        text-align: center;
        margin-bottom: 1rem;
    }
}
`;


export const DetailsContainer = styled(SectionBaseStyle)`
    border-radius: 6px;
    display: flex;
    flex-direction: column;


`;

export const ConfirmationSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`