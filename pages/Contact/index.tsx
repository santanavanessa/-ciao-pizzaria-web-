import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import ContactInfo from "./ContactInfo";
import { ContactContainer, ContactForm, FormButton, FormContainer, InputContainer } from "./styles";
import { TitleText } from "../../src/components/Typography"; 

function ContactPage() {
  // Declarar uma nova variável, dados com state e atribuir o objeto

  const [data, setData] = useState({
    // O setData é um objeto que recebe os dados através do state;

    name: "",
    surname: "",
    email: "",
    subject: "",
    content: "",
  });

  // Declarar a variável para receber a mensagem

  const [message, setMessage] = useState("");

  // Receber os dados dos campos do formulário

  const inputValue = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  //Quando o usuário digitar o valor do campo, chamar com onChange a função inputValue
  //Executar a função onSubmit e chamar a função sendMsg

  const sendMsg = async (e) => {
    e.preventDefault();
    if (data.content.length < 10) {
      setContentError("A mensagem deve ter pelo menos 10 caracteres.");
      return;
    } else {
      setContentError("");
    }
    // Manipular os dados recebidos e enviá-los para uma API

    const headers = {
      headers: {
        // Indicar que os dados serão enviados em formato de objeto
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("http://localhost:8080/message", data, headers)
      .then((response) => {
        setMessage(response.data.message);
        toast.success("Mensagem cadastrada com sucesso!");
        //Limpar dados do state e dados dos campos do formulário
        setData({
          name: "",
          surname: "",
          email: "",
          subject: "",
          content: "",
        });
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        toast.error("Erro: Mensagem não cadastrada");
      });
  };

  const [contentError, setContentError] = useState("");

  return (
    <ContactContainer>
      <ContactForm onSubmit={sendMsg}>
        <ContactInfo />
        <FormContainer>
          <TitleText size="l" className="form-title">Fale com a gente!</TitleText>

          <InputContainer>
            <label htmlFor="name">Seu nome</label>
            <input
              type="text"
              name="name"
              className="input"
              required
              onChange={inputValue}
              value={data.name}
              pattern="[A-Za-zÀ-ÿ\s]{3,}" // Permitindo letras e espaços, com pelo menos 3 caracteres
              title="Por favor, insira um nome válido com pelo menos 3 caracteres. Apenas letras e espaços são permitidos."
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="surname">Seu sobrenome</label>
            <input
              type="text"
              name="surname"
              className="input"
              required
              onChange={inputValue}
              value={data.surname}
              pattern="[A-Za-zÀ-ÿ\s]{3,}" // Permitindo letras e espaços, com pelo menos 3 caracteres
              title="Por favor, insira um sobrenome válido com pelo menos 3 caracteres. Apenas letras e espaços são permitidos."
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="email">Seu melhor e-mail</label>
            <input
              type="email"
              name="email"
              className="input"
              required
              onChange={inputValue}
              value={data.email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Formato de email
              title="Por favor, insira um e-mail válido."
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="subject">Assunto da mensagem</label>
            <input
              type="text"
              name="subject"
              className="input"
              required
              onChange={inputValue}
              value={data.subject}
              pattern=".{3,}" // Pelo menos 3 caracteres
              title="O assunto deve ter pelo menos 3 caracteres."
            />
          </InputContainer>

          <InputContainer className="textarea">
            <label htmlFor="content">Digite sua mensagem</label>
            <textarea
              name="content"
              className="input"
              required
              onChange={inputValue}
              value={data.content}
            >
            </textarea>
            {contentError && <span className="error">{contentError}</span>}
          </InputContainer>

          <FormButton type="submit" className="btn">Enviar mensagem</FormButton>
        </FormContainer>
      </ContactForm>
    </ContactContainer>
  );
}

export default ContactPage;
