
import { AboutContainer, AboutText } from "./styles"
import aboutImg from "../../src/assets/about-img.jpg";
import { RegularText, TitleText } from "../../src/components/Typography"
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <AboutContainer as={motion.section} className="container" id="about"
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1,
      duration: 0.6,
      ease: "easeInOut",
      type: "tween",
    }}
    >
        <AboutText>
            <TitleText size="l" color="subtitle">
                Sobre Nós
            </TitleText>
            <RegularText size="l" color="subtitle">Aqui, a tradição encontra a inovação, e nossos mestres pizzaiolos combinam técnicas 
            clássicas com ingredientes contemporâneos para encontrarem a melhor combinação de sabores. </RegularText>
            <RegularText size="l" color="subtitle">Desde a massa, feita em fermentação natural e  delicadamente amassada à mão, até o molho de tomate preparado 
                com tomates suculentos, cada detalhe é cuidadosamente planejado para levar até você o sabor autêntico e irresistível da pizza artesanal.
            </RegularText>
            
        </AboutText>
        <img 
        src={aboutImg} 
        alt="Foto de um pizzaiolo colocando uma pizza no forno. O pizzaiolo veste um avental branco e uma camiseta preta. 
        Ele segura uma pá com uma pizza fresca, pronta para assar." />
    </AboutContainer>
  )
}

export default AboutPage