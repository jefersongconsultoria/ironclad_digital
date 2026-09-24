# IronClad — Site institucional

Site estático pronto para GitHub Pages, sem dependências e sem etapa de build.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `ironclad-site`).
2. Envie **todos os arquivos e a pasta `assets`** para a raiz do repositório.
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde o link de publicação.

## Configurar o assistente/chatbot

Abra `script.js` e altere apenas:

```js
const CHATBOT_TITLE = "Seu título aqui";
const CHATBOT_SRC = "https://SEU-ENDERECO-DO-CHATBOT";
```

O site já possui botão flutuante, modal responsivo e `iframe` preparados.

## WhatsApp

O site está configurado para:

`+1 555-917-6418`

Link utilizado:

`https://wa.me/15559176418`

## Tema automático

- Das **06:00 às 17:59**: tema claro.
- Das **18:00 às 05:59**: tema escuro.
- O visitante pode escolher **Automático / Claro / Escuro**.
- A escolha manual é salva no navegador.

## Estrutura

- `index.html` — conteúdo do site
- `styles.css` — visual, responsividade e animações
- `script.js` — tema, menu, animações e integração do assistente
- `404.html` — fallback simples para GitHub Pages
- `site.webmanifest` — configuração básica de app/PWA
- `assets/` — logo e ícones

## Personalização rápida

Procure por estes textos no `index.html` para ajustar rapidamente:

- `IronClad`
- `+1 555-917-6418`
- `Automate · Secure · Advance`

O layout foi construído sem frameworks para facilitar manutenção e publicação direta no GitHub.
