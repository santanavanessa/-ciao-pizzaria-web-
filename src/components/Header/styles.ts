import styled from "styled-components";
import { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 0 7.5rem;
  background: ${({ theme }) => theme.colors["base-background"]};
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 10;

  .header-menu-button {
    cursor: pointer;
    background: transparent;
    border: 0;
  }

  nav {
    width: 100vw;
  }
 

   nav, .desktop-nav-items {
    display: flex;
    gap: 8rem;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;

 
  

    @media (max-width: 350px) {
      gap: 4rem;

    }
  }

  .mobile-nav-items {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .mobile-menu {
    display: none;
  }

  @media (max-width: 900px) {
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    .desktop-nav-items {
      display: none;
    }

    .mobile-menu {
      display: block;
      min-width: 1.5rem;
    }
  }

  .logo {
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    margin-top: -0.5rem;
    margin-left: -1rem;
    font-weight: bold;
    letter-spacing: -0.1px;
    text-decoration: none;

    @media (max-width: 800px) {
     font-size: 1.8rem;
      margin-left: 1rem;
      margin-top: 0;
    }

    @media (max-width: 350px) {
      font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
    }
  }

  a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
    font-weight: bold;
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 680px) {
    display: none;
  }
`;

interface HeaderButtonProps {
  variant: "orange" | "gray";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.2rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors["base-white"]};
    background-color: ${({ theme }) => theme.colors["brand-orange"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ variant }) =>
    variant === "orange" &&
    css`
      background: #f2f2f2;
      color: #272221;
      svg {
        color: ${({ theme }) => theme.colors["brand-orange"]};
      }
    `}

  ${({ variant }) =>
    variant === "gray" &&
    css`
      background: ${({ theme }) => theme.colors["gray-bg"]};
      color: ${({ theme }) => theme.colors["dark-gray-text"]};
      svg {
        color: ${({ theme }) => theme.colors["dark-gray-text"]};
      }
    `}
`;

interface MobileMenuContainerProps {
  isVisible: boolean;
}

export const MobileMenuContainer = styled.section<MobileMenuContainerProps>`
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f26e30;
  background: linear-gradient(135deg, #f26e30, #e18e4e);
  color: ${({ theme }) => theme.colors["base-white"]};

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }
    `}

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors["base-white"]};
    font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
  }
`;
