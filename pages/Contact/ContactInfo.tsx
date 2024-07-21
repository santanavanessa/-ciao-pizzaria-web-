import { Envelope, InstagramLogo, LinkedinLogo, MapPin, Phone, TiktokLogo, TwitterLogo } from 'phosphor-react'
import { ContactInfoContainer, Information, SocialMediaInfo } from './styles'
import { RegularText, TitleText } from '../../src/components/Typography'



export default function ContactInfo() {
  return (
    <ContactInfoContainer>
        <TitleText size="l">Informações de Contato</TitleText>
        <RegularText size="m" color="subtitle">
        Teremos o prazer de responder todas as suas dúvidas e/ou sugestões.
          </RegularText>

          <div className="info">
            <Information>
              <TitleText size="m">Localização</TitleText>
              <MapPin size={28} weight='fill'/>
              <RegularText size="m">Avenida ACM, 11553</RegularText>
            </Information>
            <Information>
              <TitleText size="m">Atendimento por e-mail</TitleText>
              <Envelope size={28} weight='fill'/>
              <RegularText size="m">ciaopizzaria@email.com</RegularText>
              <RegularText size="m">Nosso prazo médio de resposta é de 8h úteis.</RegularText>
            </Information>
            <Information>
            <TitleText size="m">Atendimento por WhatsApp</TitleText>
            <Phone size={28} weight='fill'/>
            <RegularText size="m">De segunda-feira a sábado das 9h às 19h no seguinte número:</RegularText>
              
              <RegularText size="m">123-456-789</RegularText>
            </Information>
          </div>

          <SocialMediaInfo>
            <TitleText size="m">Nossas redes sociais :</TitleText>
            <div className="social-icons">
              <a href="https://www.instagram.com" target='_blank'>
                <InstagramLogo size={28} weight='fill'/>
              </a>
              <a href="https://www.twitter.com/" target='_blank'>
                <TwitterLogo size={28} weight='fill'/>
              </a>
              <a href="https://www.linkedin.com/" target='_blank'>
                <LinkedinLogo size={28} weight='fill'/>
              </a>
              <a href="https://www.tiktok.com/" target='_blank'>
                <TiktokLogo size={28} weight='fill'/>
              </a>
            </div>
          </SocialMediaInfo>
    </ContactInfoContainer>
  )
}
