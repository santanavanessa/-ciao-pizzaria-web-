// OurProducts.tsx
import { ProductCard } from "../ProductCard";
import { TitleText } from "../../../../src/components/Typography";
import { OurProductsContainer, ProductList } from "./styles";
import { products } from "./../../../../src/assets/data/products";
import { motion } from "framer-motion";

export function OurProducts() {
  return (
    <OurProductsContainer className="container" id="products">
      <TitleText size="l" color="subtitle">
        Nossas Pizzas
      </TitleText>
      <ProductList as={motion.div}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 1,
          ease: "easeInOut",
          type: "tween",

        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </OurProductsContainer>
  );
}
