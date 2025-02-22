import { motion } from "framer-motion";
import styled from "styled-components";

export const NotFoundContainer = styled(motion.div)`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    
    h1 {
        margin-bottom: 1rem;
    }
    img {
      max-width: 30rem;
      
      }


      div {
        padding: 0 2rem;
        color: ${({ theme }) => theme.colors["base-text"]};
        font-weight: bold;
      }


    @media (max-width: 768px) {
            padding: 2rem;
        }

    > button {
        padding: 1rem 2rem;
        max-width: 20rem;
        margin-bottom: 2rem;

        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.colors["brand-orange"]};
        border-radius: 6px;
        margin-left: 0.3rem;
        transition: 0.4s;

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors["base-white"]};
            white-space: nowrap;
        }

        &:hover {
            background: ${({ theme }) => theme.colors["brand-orange-dark"]}
        }

        
    }

    > p {
       line-height: 2rem;
    }
`