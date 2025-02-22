import { TitleText } from "../../../../src/components/Typography"; 
import { ProductCartCard } from "../ProductCartCard";
import { ConfirmationSection } from "./ConfirmationSection";

import { useCart } from "../../../../src/components/hooks/useCart"; 
import { DetailsContainer, SelectedProductContainer } from "./styles";

export function SelectedProducts() {
    const { cartItems } =useCart();
    return (
        <SelectedProductContainer>
            <TitleText size="xs" color="subtitle" className="complete-order-subtitle">
                Produtos selecionados
            </TitleText>
            
            <DetailsContainer>
                {cartItems.map((item) => (
                    <ProductCartCard key={item.id} product={item}/>
                ))}
                

                <ConfirmationSection/>
            </DetailsContainer>
        </SelectedProductContainer>
    )
}