"use client";
import { HeaderContainer } from "./styles";
import { HeaderButton, HeaderButtonsContainer } from "./styles";
import { List, MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";


export function Header() {
  const { cartQuantity } = useCart();
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MobileMenu
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HeaderContainer>
        <nav>
          <div className="mobile-nav-items">
            <button className="header-menu-button">
              <List
                size={32}
                onClick={() => setMenuIsVisible(true)}
                className="mobile-menu"
              />{" "}
            </button>
            <a href="/" className="logo">
              Ciao Pizzaria
            </a>
          </div>
          <div className="desktop-nav-items">
          
            <a href="/about">Sobre Nós</a>
            <a href="/contact"> Contato </a>
            
          </div>
          <HeaderButtonsContainer>
              <HeaderButton variant="gray">
                <MapPin size={20} weight="fill" />
                Salvador, BA
              </HeaderButton>
            </HeaderButtonsContainer>
          

          <a href="/completeOrder">
            <HeaderButton variant="orange" className="shopping-cart">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </a>
        </nav>
      </HeaderContainer>
    </>
  );
}
