import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../src/components/QuantityInput";
import { AddCartWrapper, CardFooter, Description, Name, ProductCardContainer, ProductCardContent,  ProductCardImg} from "./styles";
import { formatMoney } from "../../../../src/utils/formatMoney"; 
import { useCart } from "../../../../src/components/hooks/useCart";
import { useState } from "react";
import { RegularText, TitleText } from "../../../../src/components/Typography";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: string;
}
interface ProductProps {
    product: Product;
}
export function ProductCard({ product }: ProductProps) {
    const [quantity, setQuantity] = useState(1);
    const { addProductToCart }  = useCart();

    function handleIncrease() {
        setQuantity(state => state + 1);
    }

    function handleDecrease() {
        setQuantity(state => state - 1);
    }

    function handleAddToCart() {
        const productToAdd = {
             ...product,
             quantity,
        }

        addProductToCart(productToAdd)
    }

    const formattedPrice = formatMoney(product.price)

    return (
        <ProductCardContainer>
                <ProductCardImg src={`/products/${product.photo}`} />
            <ProductCardContent>
            <Name>{product.name}</Name>
            <Description>{product.description}</Description>
            <CardFooter>
                <div className="product-price">
                <RegularText size="s">R$</RegularText>
                <TitleText  className="price-number" size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill"/>
                    </button>
                </AddCartWrapper>
            </CardFooter>
            </ProductCardContent>
          
        </ProductCardContainer>
    )
}