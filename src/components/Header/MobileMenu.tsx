import { X } from "phosphor-react";
import { MobileMenuContainer } from "./styles";
import { useEffect } from "react";

export type MobileMenuProps = {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
};

export function MobileMenu({
  menuIsVisible,
  setMenuIsVisible,
}: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);


  const handleMenuItemClick = () => {
    setMenuIsVisible(false);
  };

  return (
    <MobileMenuContainer className="container" isVisible={menuIsVisible}>
        <X size={32} onClick={() => setMenuIsVisible(false)} />

      

      <nav>
        <a href="/" onClick={handleMenuItemClick}>
          Página Inicial
        </a>
        <a href="/about" onClick={handleMenuItemClick}>
          Sobre Nós
        </a>
        <a href="/contact" onClick={handleMenuItemClick}>
          Contato
        </a>
      </nav>
    </MobileMenuContainer>
  );
}
