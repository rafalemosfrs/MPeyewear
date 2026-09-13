# MP Eyewear — My Princess

Site institucional em React, TypeScript e Vite.

## Executar

- `npm install`
- `npm run dev -- --host 127.0.0.1`
- Abra o endereço informado pelo Vite (normalmente http://127.0.0.1:5173).

## Verificar e gerar a versão de produção

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm run preview`

Para hospedagem, configure o servidor para retornar index.html nas rotas do site (React Router).

## Identidade e arquivos

- A assinatura marrom MP Eyewear foi extraída do manual fornecido, sem reconstrução do símbolo ou lettering. A versão reversa do rodapé é aplicada com CSS.
- `public/assets/images/mp-gold.png`: arquivo PNG original fornecido, usado como favicon.
- `public/assets/images/astro-blue.jpeg` e `astro-pink.jpeg`: artes fornecidas pelo cliente.
- Paleta principal: preto #111617, marrom #5A4039, off-white #F7F3EC, areia #D8C8B5 e dourado #B3925E.
- Fotografias ilustrativas locais de óculos, vindas do Unsplash: https://images.unsplash.com/photo-1511499767150-a48a237f0083 e https://images.unsplash.com/photo-1574258495973-f010dfbb5371. Não representam um catálogo de produtos da loja.
- Tipografia da interface: DM Sans, Manrope e Playfair Display, carregadas do Google Fonts, com fontes de sistema como alternativa.

## Onde editar

- `src/index.css`: estilos, vidro, efeitos, animações e versões responsivas.
- `src/pages/`: início, lentes, cuidados, espaço infantil e contato.
- `src/config/site.ts`: telefone, endereço, horários, Instagram e mensagens do WhatsApp.
- `src/components/Brand.tsx`: assinatura da marca.

As missões do Astro são mantidas apenas enquanto a página permanece aberta. Não há cadastro, envio de dados ou armazenamento persistente. As animações respeitam a preferência de movimento reduzido do dispositivo.

Horários, Instagram e condições específicas de garantia ainda dependem dos dados oficiais da loja. O redesign conserva os dados de contato já existentes.
