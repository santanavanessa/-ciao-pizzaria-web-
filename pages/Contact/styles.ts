import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactContainer = styled(motion.section)`
  position: relative;
  max-width: 100vw;
  min-height: 100vh;
  margin-top: 4rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors["base-background"]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  h2,
  h3 {
    margin: 0.5rem 0;
  }

  p {
    margin: 0.3rem 0;
  }

  @media (min-width: 1440px) {
    width: 100vw;
    height: 100vh;
    padding: 0;
  }

  @media (max-width: 768px) {
    max-width: 100vw;
    margin-top: 4rem;
  }

  @media (max-width: 480px) {
    max-width: 100vw;
    padding: 0;
    margin-top: 5.5rem;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["base-white"]};
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors["brand-orange"]};
  overflow: hidden;
  position: relative;
  border-radius: 0 6px 6px 0;
  padding: 2.3rem 2.2rem;
  overflow: hidden;

  .form-title {
    color: ${({ theme }) => theme.colors["base-white"]};
    letter-spacing: 0.25px;
  }

  @media (max-width: 768px) {
    width: inherit;
    border-radius: 0 0 6px 6px;
    padding: 2rem;

    form {
      grid-template-columns: 1fr;
    }
  }
`;

export const ContactInfoContainer = styled.div`
  padding: 2.3rem 2.2rem;
  position: relative;

  svg {
    color: ${({ theme }) => theme.colors["brand-orange"]};
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;
  font-size: 0.95rem;
`;

export const SocialMediaInfo = styled.div`
  padding: 2rem 0 0 0;

  .social-icons {
    display: flex;
    margin-top: 0.5rem;
  }

  .social-icons a {
    width: 35px;
    height: 35px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors["brand-orange"]};
    text-align: center;
    line-height: 35px;
    margin-right: 0.5rem;
    transition: 0.3s;
  }

  .social-icons a:hover {
    transform: scale(1.15);
  }

  a:focus {
    outline: 2px solid ${({ theme }) => theme.colors["brand-orange"]};
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0 0 0;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 1rem 0;
  label {
    color: ${({ theme }) => theme.colors["base-white"]};
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
  }

  p {
    color: ${({ theme }) => theme.colors["dark-gray-text"]};
  }

  .formInput input,
  .formInput textarea {
    width: 100%;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors["base-text"]};
    font-weight: 500;
    font-size: 0.95rem;
    border: 2px solid ${({ theme }) => theme.colors["base-background"]};
    background: none;
    letter-spacing: 0.5px;
    transition: 0.3s;
    }
  

  .formInput input:focus,
  .formInput textarea:focus {
    outline: 1px solid ${({ theme }) => theme.colors["base-white"]};
  }

  .formInput span {
  display: none;
}

.formInput input[focused="true"] ~ span,
.formInput textarea[focused="true"] ~ span {
  display: block;
}

  ::placeholder {
    color: ${({ theme }) => theme.colors["base-background"]};
    font-size: 0.95rem;
    font-weight: 400;
    pointer-events: none;
  }
`;

export const FormButton = styled.button`
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  max-width: 20rem;
  transition: 0.4s;
  line-height: 1.3rem;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors["base-white"]};
  border: 2px solid ${({ theme }) => theme.colors["base-background"]};
  font-size: 0.95rem;
  letter-spacing: 0.06rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors["brand-orange"]};
  line-height: 1;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors["base-white"]};
  }

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors["base-white"]};
  }
`;
