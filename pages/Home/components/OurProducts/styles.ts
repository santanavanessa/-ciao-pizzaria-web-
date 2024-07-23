import { motion } from "framer-motion";
import styled from "styled-components";

export const OurProductsContainer = styled(motion.section)`
    width: 100%;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
        padding: 0 2rem;
      
    }
    @media (max-width: 800px) {
      margin-top: 26rem;
    
  }

  @media (max-width: 450px) {
    margin-top: 24rem;
  } 
`;

export const ProductCardContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
`;

export const ProductList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;

    @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }


`