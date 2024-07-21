// OurProducts.tsx
import { ProductCard } from "../ProductCard";
import { TitleText } from "../../../../components/Typography";
import { OurProductsContainer, ProductList } from "./styles";
import { products } from "../../../../assets/data/products";


export function OurProducts() {
  return (
    <OurProductsContainer className="container" id="products">
      <TitleText size="l" color="subtitle">
        Nossas Pizzas
      </TitleText>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </OurProductsContainer>
  );
}
