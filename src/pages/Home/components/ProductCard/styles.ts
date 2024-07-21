import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typography";

export const ProductCardContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    text-align: center;
    box-shadow: 1px 2px 4px hsl(0, 3%, 88%);

    

`;

export const ProductCardContent = styled.div`
    padding: 0 1.25rem 1rem;
    max-width: 15rem;
   
`;

export const ProductCardImg = styled.img`
    display: block;
    margin-bottom: 1rem;
    width: fit-content;
    border-radius: 6px 6px 0 0;
   min-height: 0;
   flex: 1;
`;


export const Name = styled(TitleText).attrs({
    size: "s",
    color: "subtitle",
    weight: "700",


})`
 

`;

export const Description = styled(RegularText).attrs({
    color: "label",

})`

    font-size: ${({ theme, size}) => theme.textSizes[`text-regular-${size ?? "m"}`]};
    margin-bottom: 2rem;

`;

export const CardFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .product-price {
        margin-right: 1rem;
    }

    .price-number {
        margin-top: 1rem;
    }
    > div {
        display: flex;
        align-items: center;
        gap: 3px;

        p {
        line-height: 0.75rem;
        }
    }

`;

// Container do botão de adicionar produtos no carrinho de compras
export const AddCartWrapper = styled.div`
    width: 7.5rem;

    > button {
        width: 2.375rem;
        height: 2.375rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.colors["brand-orange-dark"]};
        color: ${({ theme }) => theme.colors["base-card"]};
        border-radius: 6px;
        margin-left: 0.3rem;
        transition: 0.4s;

        &:hover {
            background: ${({ theme }) => theme.colors["brand-orange"]}
        }
    }
`

