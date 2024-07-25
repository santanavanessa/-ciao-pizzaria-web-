import { Link } from "react-router-dom";
import { NotFoundContainer } from "./styles";
import { RegularText, TitleText } from "./../../src/components/Typography";
import pageNotFoundImg from "../../src/assets/not-found.svg";
import { motion } from "framer-motion";
export function NotFoundPage() {
  return (
    <NotFoundContainer
      as={motion.div}
      className="container"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <TitleText size="l">Página não encontrada!</TitleText>

      <motion.img src={pageNotFoundImg} alt="Ilustração de página não encontrada"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
      }}
      
      />

      <div>
      <RegularText size="l" color="subtitle">
      A página que você está procurando não está disponível. 

      <br />
      Por favor, volte para a página inicial
        
        
      </RegularText>
      </div>

      <button>
        <Link to="/">Ir para a página inicial</Link>
      </button>
    </NotFoundContainer>
  );
}
