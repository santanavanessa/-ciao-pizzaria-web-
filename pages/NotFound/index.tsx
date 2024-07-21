import { Link } from "react-router-dom";
import { NotFoundContainer } from "./styles";
import { RegularText, TitleText } from "./../../src/components/Typography";
import pageNotFoundImg from "../../assets/not-found.svg";

export function NotFoundPage() {
  return (
    <NotFoundContainer className="container">
        
        <TitleText size="l">Página não encontrada!</TitleText>

        <img src={pageNotFoundImg} alt="Ilustração de página não encontrada" />
        
        <RegularText size="l" color="subtitle">A página que você está tentando acessar não existe 
            ou foi modificada. 
            <br />
            Tente voltar para a página inicial.
        </RegularText>

        <button><Link to="/">Ir para a página inicial</Link></button>

        
    </NotFoundContainer >
  )
}
