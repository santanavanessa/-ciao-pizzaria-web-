# Ciao Pizzaria

Este projeto é uma aplicação web para um serviço de delivery de pizzas chamado Ciao Pizzaria. A plataforma permite ao usuário explorar o cardápio, adicionar pizzas ao carrinho e finalizar seu pedido escolhendo uma das opções de pagamento e endereço de entrega. Além disso, a aplicação apresenta uma página de contato com um formulário para enviar mensagens para a empresa.

## Funcionalidades

- **Adicionar Pizzas ao Carrinho:** Permite selecionar os sabores de pizza e adicioná-los ao carrinho.
- **Gerenciar Carrinho de Compras:** Exibe e permite ajustar itens no carrinho.
- **Finalizar Pedido:** Permite escolher o endereço e método de pagamento, e finalize o pedido.
- **Resumo do Pedido:** Exibe um resumo do pedido.
- **Páginas Adicionais:** Inclui páginas "Sobre Nós", "Contato" e uma página de erro 404.

## Tecnologias Utilizadas

- **Vite** - Ferramenta de build rápida para desenvolvimento.
- **Styled-components** - Para estilização baseada em componentes.
- **Framer Motion** - Animações e transições suaves.
- **React Router DOM** - Gerenciamento de rotas.
- **Sonner** - Notificações e mensagens.

## Problemas Encontrados e Soluções

- **Erro ao rodar o comando `npm run dev`:**

    ```
    error when starting dev server:
    Error: listen EACCES: permission denied 127.0.0.1:5173
    
    ```

    **Solução:** Modifiquei o script `dev` no `package.json` para:

    ```` 
    "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "serve": "vite preview"
    }
    ````