import { Minus, Plus } from "phosphor-react";
import {IconWrapper, QuantityInputContainer} from "./styles";

interface QuantityInputProps {
    size?: "medium" | "small" ;
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export function QuantityInput({ 
    onIncrease, 
    onDecrease, 
    quantity, 
    size = "small",
 }: QuantityInputProps) {
    return (
        <QuantityInputContainer size={size}>
            <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
                <Minus size={16}  weight="bold"/> 
            </IconWrapper>
             <input type="number" readOnly value={quantity}/>
             <IconWrapper onClick={onIncrease}>
                <Plus size={16} weight="bold"/> 
            </IconWrapper>
        </QuantityInputContainer>
    )
}