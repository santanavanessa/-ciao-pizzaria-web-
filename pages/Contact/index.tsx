import { useState } from "react";
import { toast } from "sonner";
import ContactInfo from "./ContactInfo";
import {
  ContactContainer,
  ContactForm,
  FormButton,
  FormContainer,
  InputContainer,
} from "./styles";
import { TitleText } from "../../src/components/Typography";
import { FormInput } from "./FormInput";

interface Values {
  name: string;
  surname: string;
  email: string;
  subject: string;
  content: string;
}

const initialValues: Values = {
  name: '',
  surname: '',
  email: '',
  subject: '',
  content: '',
};

const ContactPage = () => {
  const [values, setValues] = useState<Values>(initialValues);

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      required: true,
      label: 'Seu nome',
      errorMessage: "O nome deve ter entre 3 e 20 caracteres",
      pattern: "^[A-Za-zÀ-ÖØ-öø-ÿ\\s]{3,20}$",
    },
    {
      id: 2,
      name: 'surname',
      type: 'text',
      required: true,
      label: 'Seu sobrenome',
      errorMessage: "O sobrenome deve ter entre 3 e 20 caracteres",
      pattern: "^[A-Za-zÀ-ÖØ-öø-ÿ\\s]{3,20}$",
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      required: true,
      label: 'Seu melhor e-mail',
      errorMessage: "Por favor, digite um e-mail válido",
    },
    {
      id: 4,
      name: 'subject',
      type: 'text',
      required: true,
      label: 'Assunto da mensagem',
    },
    {
      id: 5,
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Sua mensagem',
      errorMessage: 'A mensagem deve ter no mínimo 10 caracteres',
      minLength: 10,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensagem enviada com sucesso!');
    setValues(initialValues);  // Limpa o formulário
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <ContactContainer>
      <ContactForm onSubmit={handleSubmit} className="container">
        <ContactInfo />
        <FormContainer>
          <TitleText size="l" className="form-title">
            Fale com a gente!
          </TitleText>
          <InputContainer>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name as keyof Values]}
                onChange={onChange}
              />
            ))}
          </InputContainer>
          <FormButton type="submit" className="btn">
            Enviar mensagem
          </FormButton>
        </FormContainer>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;
