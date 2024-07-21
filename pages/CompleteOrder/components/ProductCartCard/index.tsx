import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../src/components/QuantityInput";
import { RegularText } from "../../../../src/components/Typography";
import {
  ActionsContainer,
  ProductCartCardContainer,
  RemoveButton,
} from "./styles";
import { CartItem } from "../../../../src/contexts/CartContext";
import { formatMoney } from "../../../../src/utils/formatMoney";
import { useCart } from "../../../../src/components/hooks/useCart";

interface productCartCardProps {
  product: CartItem;
}
export function ProductCartCard({ product }: productCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(product.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(product.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(product.id);
  }

  const productTotal = product.price * product.quantity;
  const formattedPrice = formatMoney(productTotal);

  return (
    <ProductCartCardContainer>
      <div>
        <img src={`/products/${product.photo}`} />
        <div>
          <RegularText color="subtitle">{product.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={product.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </ProductCartCardContainer>
  );
}
