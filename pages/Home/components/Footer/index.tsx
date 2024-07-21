import { InstagramLogo, LinkedinLogo, TiktokLogo, TwitterLogo } from "phosphor-react";
import {
  AboutFooterContainer,
  FooterContainer, FooterContent, SocialMediaLinks
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent className="container">
      <SocialMediaLinks>
      <a href="https://www.instagram.com" target='_blank'>
                <InstagramLogo size={24} weight='fill'/>
              </a>
              <a href="https://www.twitter.com/" target='_blank'>
                <TwitterLogo size={24} weight='fill'/>
              </a>
              <a href="https://www.linkedin.com/" target='_blank'>
                <LinkedinLogo size={24} weight='fill'/>
              </a>
              <a href="https://www.tiktok.com/" target='_blank'>
                <TiktokLogo size={24} weight='fill'/>
              </a>
      </SocialMediaLinks>

      <AboutFooterContainer>
        <span>Ciao Pizzaria &copy; 2024</span>
      </AboutFooterContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
