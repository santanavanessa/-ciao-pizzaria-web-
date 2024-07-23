// OurProducts.tsx
import { ProductCard } from "../ProductCard";
import { TitleText } from "../../../../src/components/Typography";
import { OurProductsContainer, ProductList } from "./styles";
import { products } from "./../../../../src/assets/data/products";
import { motion } from "framer-motion";

export function OurProducts() {
  return (
    <OurProductsContainer as={motion.section} className="container" id="products"
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity:   1,
    }}
    transition={{
      duration: 1,
      delay: 0.5,
    }}
    >
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
