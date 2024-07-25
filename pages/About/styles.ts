import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled(motion.section)`
  display: grid;
  padding-block: 5rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(300px, auto);
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: -3.5rem;

  img {
    flex: 1;
    border-radius: 6px;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
    margin-top: 1.5rem;

    img {
      margin-bottom: 4rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    row-gap: 4rem;
    padding: 0 2rem;

    img {
      margin-top: 4rem;
    }
  }
`;

export const AboutText = styled.div`
  padding: 3rem 0;
`;
