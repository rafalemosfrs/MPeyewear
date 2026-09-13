# MP Eyewear — My Princess

Site institucional da **MP Eyewear**, ótica localizada em Fortaleza, Ceará. O projeto apresenta os serviços da loja, orientações sobre lentes e cuidados, informações de contato e o Espaço Infantil do mascote Astro MP.

A interface segue a identidade visual da marca, com composição editorial, paleta quente, efeitos de glassmorphism, animações suaves e uma experiência responsiva para celular, tablet e desktop.

## Sumário

- [Visão geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Páginas e rotas](#páginas-e-rotas)
- [Tecnologias](#tecnologias)
- [Como executar](#como-executar)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Configuração do conteúdo](#configuração-do-conteúdo)
- [Identidade visual](#identidade-visual)
- [Componentes principais](#componentes-principais)
- [SEO, métricas e acessibilidade](#seo-métricas-e-acessibilidade)
- [Build e implantação](#build-e-implantação)
- [Manutenção](#manutenção)
- [Créditos e licenciamento](#créditos-e-licenciamento)

## Visão geral

O site foi construído como uma Single Page Application (SPA) em React. A navegação acontece no cliente por meio do React Router, enquanto cada página atualiza seu título e suas metatags de descrição.

Os principais objetivos do projeto são:

- apresentar a MP Eyewear com uma identidade visual consistente;
- facilitar o contato direto pelo WhatsApp;
- orientar clientes sobre lentes, adaptação, cuidados e garantias;
- divulgar endereço, horários, Instagram e rota no Google Maps;
- oferecer uma área infantil interativa com o Astro MP;
- manter uma boa experiência em diferentes tamanhos de tela.

## Funcionalidades

- Cabeçalho fixo com efeito de vidro, estado ativo das rotas e menu responsivo.
- Chamadas para WhatsApp com mensagens pré-preenchidas para cada assunto.
- Botão flutuante de atendimento disponível em todas as páginas.
- Guia sobre lentes de visão simples, multifocais, digitais e Free Form.
- Conteúdo sobre tratamentos, adaptação, conservação e garantias.
- Mapa incorporado, link de rota, horários e dados de contato.
- Link direto para avaliação da loja no Google.
- Espaço Infantil com:
  - alternância entre as versões azul e rosa do Astro;
  - quatro missões interativas de cuidado com os óculos;
  - indicador de progresso;
  - opção para reiniciar as missões;
  - orientações para pais e responsáveis.
- Animações de entrada baseadas em `IntersectionObserver`.
- Suporte à preferência do sistema por movimento reduzido.
- Página personalizada para rotas inexistentes.
- Vercel Analytics e Speed Insights integrados.

As missões do Astro ficam apenas no estado da página. Elas não usam cadastro, banco de dados, cookies próprios ou armazenamento persistente.

## Páginas e rotas

| Rota | Componente | Conteúdo |
| --- | --- | --- |
| `/` | `Home` | Apresentação da marca, serviços, guias, FAQ e chamadas de contato. |
| `/lentes` | `Lenses` | Tipos de lentes, recursos, comparação e adaptação aos multifocais. |
| `/cuidados-e-garantias` | `CareWarranty` | Cuidados diários, orientações de garantia e solicitação de avaliação. |
| `/espaco-infantil` | `Kids` | Universo do Astro MP, missões e conteúdo para responsáveis. |
| `/contato` | `Contact` | WhatsApp, endereço, horários, mapa, visitas e avaliação. |
| `*` | `NotFound` | Página 404 para endereços não encontrados. |

Também existem links internos para seções específicas, como:

- `/lentes#tipos-de-lentes`
- `/lentes#adaptacao`
- `/cuidados-e-garantias#cuidados`
- `/cuidados-e-garantias#garantias`
- `/espaco-infantil#missoes`

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| React 18 | Construção da interface e gerenciamento de estado. |
| TypeScript | Tipagem estática dos componentes e configurações. |
| Vite 5 | Servidor de desenvolvimento e build de produção. |
| React Router 6 | Navegação entre as páginas da SPA. |
| Tailwind CSS 3 | Classes utilitárias e tokens de cor. |
| CSS personalizado | Layout editorial, glassmorphism, responsividade e animações. |
| Lucide React | Ícones da interface. |
| Vercel Analytics | Métricas de acesso quando o site está implantado na Vercel. |
| Vercel Speed Insights | Medição de desempenho da experiência real. |

O pacote `@supabase/supabase-js` está instalado, mas não é utilizado pela aplicação atual. Nenhuma variável de ambiente é necessária para executar o site neste momento.

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior;
- npm, incluído na instalação do Node.js.

### Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/rafalemosfrs/MPeyewear.git
cd MPeyewear
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173
```

Para disponibilizar o servidor na rede local:

```bash
npm run dev -- --host 0.0.0.0
```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com atualização automática. |
| `npm run typecheck` | Verifica os tipos TypeScript sem gerar arquivos. |
| `npm run lint` | Executa o ESLint em todo o projeto. |
| `npm run build` | Gera a versão otimizada de produção em `dist/`. |
| `npm run preview` | Serve localmente o conteúdo gerado em `dist/`. |

Antes de enviar uma alteração, execute:

```bash
npm run typecheck
npm run lint
npm run build
```

## Estrutura do projeto

```text
.
├── public/
│   └── assets/images/       # Logos, mascotes e fotografias
├── src/
│   ├── components/          # Componentes reutilizáveis
│   ├── config/
│   │   └── site.ts          # Contato, endereço, links e mensagens
│   ├── pages/               # Componentes associados às rotas
│   ├── App.tsx              # Layout global, rotas e métricas
│   ├── index.css            # Estilos globais e responsivos
│   └── main.tsx             # Ponto de entrada da aplicação
├── index.html               # Metadados iniciais e dados estruturados
├── tailwind.config.js       # Paleta, fontes e animações do Tailwind
├── vite.config.ts           # Plugins e alias de importação
├── eslint.config.js         # Regras de lint
├── tsconfig.app.json        # Configuração TypeScript da aplicação
└── package.json             # Dependências e scripts
```

O alias `@` aponta para a pasta `src`. Assim, um import como `@/components/Header` resolve para `src/components/Header`.

## Configuração do conteúdo

Os dados compartilhados pelo site ficam centralizados em [`src/config/site.ts`](src/config/site.ts).

### Dados da loja

Edite o objeto `siteConfig` para alterar:

- nome da marca;
- telefone exibido;
- endereço completo;
- coordenadas e links do Google Maps;
- Instagram;
- horários de atendimento;
- link de avaliação no Google;
- frase institucional.

Exemplo:

```ts
export const siteConfig = {
  name: 'MP Eyewear',
  whatsappDisplay: '(85) 99756-0004',
  address: {
    fullAddress: 'Endereço completo da loja',
    mapsUrl: 'URL para traçar a rota',
    mapsEmbedUrl: 'URL do mapa incorporado',
  },
  instagram: 'https://www.instagram.com/...',
  hours: 'Horários de atendimento',
  googleReviewUrl: 'URL de avaliação no Google',
};
```

### WhatsApp

O número usado nos links fica em `WHATSAPP_NUMBER` e deve conter apenas código do país, DDD e número, sem espaços ou símbolos:

```ts
export const WHATSAPP_NUMBER = '558597560004';
```

As mensagens pré-preenchidas estão em `whatsappMessages`. Cada chamada usa uma chave tipada, como `general`, `lentes`, `garantia` ou `infantil`.

Para adicionar uma nova mensagem:

1. inclua a chave em `whatsappMessages`;
2. use essa chave na propriedade `messageKey` de `WhatsAppLink` ou `CTASection`;
3. execute a verificação de tipos.

### Navegação

Os links do cabeçalho e do rodapé são gerados a partir de `navLinks`. Ao criar uma página:

1. adicione o componente em `src/pages/`;
2. registre a rota em `src/App.tsx`;
3. adicione o item em `navLinks`, quando ele fizer parte da navegação principal;
4. inclua título e descrição com o componente `SEO`.

## Identidade visual

O design segue os manuais de identidade visual fornecidos para a MP Eyewear e o Astro MP.

### Paleta principal

| Cor | HEX | Aplicação |
| --- | --- | --- |
| Preto MP | `#111617` | Títulos, textos e fundos de alto contraste. |
| Marrom MP | `#5A4039` | Cor institucional e botões principais. |
| Off-white | `#F7F3EC` | Fundo principal e áreas de respiro. |
| Areia | `#D8C8B5` | Fundos secundários e divisórias. |
| Bege quente | `#B79D83` | Detalhes e grafismos. |
| Dourado fosco | `#B3925E` | Acentos usados com moderação. |
| Cinza quente | `#746E69` | Textos secundários. |

O Espaço Infantil usa variações próprias de azul, vermelho, amarelo, rosa e lilás definidas em `tailwind.config.js` e `src/index.css`.

### Tipografia

- **DM Sans:** textos e elementos da interface;
- **Manrope:** títulos e composição editorial;
- **Playfair Display:** destaques em itálico.

As fontes são carregadas pelo Google Fonts em `src/index.css`. Se a conexão externa falhar, o navegador utiliza fontes de sistema equivalentes.

### Recursos visuais

| Arquivo | Finalidade |
| --- | --- |
| `mp-wordmark.jpg` | Assinatura horizontal da MP Eyewear. |
| `mp-gold.png` | Arquivo original da marca e favicon. |
| `astro-blue.jpeg` | Versão azul e vermelha do Astro MP. |
| `astro-pink.jpeg` | Versão rosa e lilás do Astro MP. |
| `eyewear-editorial.jpg` | Fotografia principal da página inicial. |
| `eyewear-portrait.jpg` | Fotografia editorial usada em seções e guias. |

As fotografias são ilustrativas e não representam necessariamente produtos disponíveis no catálogo da loja.

## Componentes principais

| Componente | Responsabilidade |
| --- | --- |
| `Header` | Cabeçalho fixo, navegação ativa, menu móvel, bloqueio de rolagem e controle de foco. |
| `Footer` | Marca, navegação, endereço, horários e canais de contato. |
| `Brand` | Renderização padronizada da assinatura da marca. |
| `PageHero` | Cabeçalho editorial reutilizado nas páginas internas. |
| `WhatsAppLink` | Geração de links para mensagens tipadas do WhatsApp. |
| `WhatsAppFloat` | Atalho flutuante global para atendimento. |
| `CTASection` | Bloco reutilizável de chamada para ação. |
| `FAQ` | Perguntas expansíveis com estado e atributos de acessibilidade. |
| `SEO` | Atualização de título, descrição e metatags sociais por página. |
| `VisualEffects` | Animações de entrada durante a rolagem. |
| `ScrollToTop` | Restauração da posição ou navegação até uma âncora após mudança de rota. |
| `LazyImage` | Carregamento progressivo de imagens. |

## SEO, métricas e acessibilidade

### SEO

- O idioma do documento está definido como `pt-BR`.
- Cada página atualiza `title`, `description`, Open Graph e Twitter Card.
- `index.html` contém dados estruturados básicos do tipo `Store`.
- A imagem social padrão está configurada em `index.html`.

Como o projeto é uma SPA renderizada no cliente, rastreadores que não executam JavaScript podem receber apenas os metadados iniciais de `index.html`. Caso o projeto precise de SEO avançado por rota, considere renderização estática ou no servidor.

### Métricas

`Analytics` e `SpeedInsights`, da Vercel, são montados globalmente em `src/App.tsx`. Em desenvolvimento local, eles não exigem configuração adicional. A coleta efetiva depende do ambiente de implantação e das configurações do projeto na Vercel.

### Acessibilidade

O projeto inclui:

- link para pular diretamente ao conteúdo principal;
- navegação por teclado;
- fechamento do menu móvel com `Escape`;
- gerenciamento de foco no menu;
- atributos `aria-expanded`, `aria-controls` e `aria-pressed` nas interações;
- textos alternativos para imagens relevantes;
- estados de foco visíveis;
- suporte a `prefers-reduced-motion`;
- áreas interativas com tamanho adequado para toque.

Ao adicionar conteúdo, preserve a hierarquia de títulos, escreva textos alternativos objetivos e teste contraste e navegação por teclado.

## Build e implantação

Gere a versão de produção com:

```bash
npm run build
```

Os arquivos finais serão criados em `dist/`. Para conferir esse build localmente:

```bash
npm run preview
```

### Vercel

O projeto pode ser implantado diretamente na Vercel:

1. importe o repositório no painel da Vercel;
2. mantenha o framework detectado como Vite;
3. use `npm run build` como comando de build;
4. use `dist` como diretório de saída;
5. publique a implantação.

O Analytics e o Speed Insights já estão incluídos no código.

### Outros serviços de hospedagem

Como o projeto usa `BrowserRouter`, o servidor deve encaminhar rotas desconhecidas para `index.html`. Sem esse fallback, abrir diretamente uma URL como `/lentes` pode resultar em erro 404 no servidor.

Não há backend obrigatório nem variáveis de ambiente para a versão atual.

## Manutenção

### Atualizar informações comerciais

Centralize mudanças de telefone, endereço, horários e redes sociais em `src/config/site.ts`. Também revise os dados estruturados em `index.html` quando endereço ou nome da loja mudar.

### Atualizar textos

O conteúdo editorial de cada área está no respectivo arquivo dentro de `src/pages/`. As perguntas frequentes e listas de serviços são declaradas no topo das páginas que as utilizam.

### Atualizar estilos

- `src/index.css` contém a maior parte do design, animações e media queries;
- `tailwind.config.js` mantém os tokens de cores, fontes e animações utilitárias;
- os componentes compartilham classes como `btn-primary`, `text-link`, `glass` e `section-padding`.

### Adicionar imagens

1. coloque o arquivo otimizado em `public/assets/images/`;
2. use o caminho `/assets/images/nome-do-arquivo.ext`;
3. defina `width`, `height` e um texto `alt` apropriado;
4. prefira `loading="lazy"` para imagens fora da primeira dobra;
5. comprima a imagem antes de adicioná-la ao repositório.

### Checklist antes de publicar

- [ ] Confirmar telefone, endereço, horários, Instagram e link de avaliação.
- [ ] Revisar mensagens automáticas do WhatsApp.
- [ ] Verificar condições comerciais e textos de garantia com a loja.
- [ ] Testar todas as rotas em celular e desktop.
- [ ] Testar menu, FAQ, links internos e missões do Astro por teclado.
- [ ] Confirmar que todas as imagens carregam e possuem texto alternativo.
- [ ] Executar `npm run typecheck`, `npm run lint` e `npm run build`.
- [ ] Confirmar o fallback de rotas na hospedagem.
- [ ] Revisar metadados e dados estruturados após qualquer mudança comercial.

## Créditos e licenciamento

- Identidade visual e artes do Astro MP: materiais oficiais fornecidos pela MP Eyewear.
- Fotografias editoriais: [Unsplash — óculos de sol](https://images.unsplash.com/photo-1511499767150-a48a237f0083) e [Unsplash — armação sobre livro](https://images.unsplash.com/photo-1574258495973-f010dfbb5371).
- Ícones: [Lucide](https://lucide.dev/).
- Fontes: [Google Fonts](https://fonts.google.com/).

Este repositório não possui um arquivo `LICENSE`. Portanto, o código e os ativos não devem ser considerados licenciados para reutilização, redistribuição ou uso comercial fora deste projeto sem autorização dos responsáveis.
