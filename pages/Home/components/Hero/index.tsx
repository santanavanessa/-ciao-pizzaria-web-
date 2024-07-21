import {
  BenefitsContainer,
  HeroContainer,
  HeroContent,
  HeroTitle,
} from "./styles";
import heroImg from "./../../../../src/assets/hero-img.svg";
import { RegularText } from "../../../../src/components/Typography";
import { InfoWithIcon } from "../../../../src/components/InfoWithIcon";
import { Package, Pizza, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

export function Hero() {
  const { colors } = useTheme();
  return (
    <HeroContainer id="hero">
      <HeroContent className="container">
        <div className="content-wrapper">
          <div>
            <HeroTitle size="xl">Sabor artesanal à sua porta!</HeroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Delivery de pizzas artesanais, feitas com produtos frescos e de
              qualidade.
            </RegularText>

            <BenefitsContainer>
              <InfoWithIcon
                iconBg={colors["brand-orange"]}
                icon={<ShoppingCart weight="fill" />}
                text="Compra simples e segura"
              />
              <InfoWithIcon
                iconBg={colors["brand-orange"]}
                icon={<Package weight="fill" />}
                text="Embalagem mantém a pizza intacta"
              />
              <InfoWithIcon
                iconBg={colors["brand-orange"]}
                icon={<Timer weight="fill" />}
                text="Entrega rápida e rastreada"
              />
              <InfoWithIcon
                iconBg={colors["brand-orange"]}
                icon={<Pizza weight="fill"/>}
                text="Seu pedido chega fresquinho até você"
              />
            </BenefitsContainer>
          </div>
          <img 
          src={heroImg}
           alt="Foto de uma pizza sabor marguerita" />
        </div>
      </HeroContent>
    </HeroContainer>
  );
}
