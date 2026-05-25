# Avenida XV | Cardápio

## Descrição

Este projeto é uma landing page em formato de cardápio para o Avenida XV. Escolhi esse tema porque ele parece algo que poderia ser usado de verdade no restaurante da minha sogra, então tentei manter uma aparência mais humana, suave e próxima de um cardápio real.

A ideia não foi criar um sistema. Mantive uma página simples com apresentação do cardápio, informações do restaurante, formulário básico para cumprir a atividade e localização com mapa. No cardápio, organizei as categorias de forma mais completa e separei itens com foto dos itens textuais para a leitura ficar melhor, principalmente no desktop.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro
- Imagens em WebP

## Estrutura do projeto

- `imagens/`: imagens do cardápio em formato WebP.
- `.gitignore`: arquivos que não precisam entrar no repositório.
- `index.html`: estrutura principal da página.
- `README.md`: explicação do projeto e da checklist.
- `script.js`: JavaScript usado apenas para melhoria progressiva.
- `styles.css`: estilos, variáveis, responsividade e dark mode.

## Como executar

Para abrir o projeto, basta executar o arquivo `index.html` no navegador.

Também é possível usar o Live Server do VS Code. O projeto foi feito com HTML, CSS e JavaScript puro, então não precisa instalar dependências.

## Checklist da atividade UTFPR

- Estrutura Semântica Rigorosa: organizei o layout com `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `footer` e `address`. Também usei `aria-labelledby` nas seções principais e mantive a ordem de títulos com `h1`, `h2`, `h3`, `h4` e `h5`.
- Sistema de Design com Variáveis: deixei cores, fontes, espaçamentos, bordas, sombras, radius e transições centralizados no `:root` do CSS. Isso facilita trocar o visual sem mexer em várias partes do arquivo.
- Layout Híbrido Flex & Grid: usei Flexbox no header, navegação, botões e footer. Usei Grid no cardápio, na seção sobre, na localização e em blocos maiores de conteúdo. No desktop, as categorias usam Grid para ocupar melhor a tela.
- Interface Responsiva: construí primeiro pensando no mobile e depois ajustei para tablet e desktop com breakpoints em `768px`, `1024px` e `1200px`. Também conferi para não criar scroll horizontal.
- Microinterações de Feedback: coloquei hover suave nos links do menu, botões e cards do cardápio. A página também usa a animação `fade-up`, mas de forma discreta.
- Curadoria de Código com IA: usei IA como apoio para revisar o cardápio e reorganizar o CSS responsivo. Depois ajustei manualmente para tirar efeitos que pareciam artificiais e deixar a página mais próxima de um cardápio real.
- Dark Mode Nativo: mantive `@media (prefers-color-scheme: dark)`, então o site acompanha automaticamente o tema do sistema operacional.
- Sticky Headers e Scroll Snap: o cabeçalho usa `position: sticky`. Também usei `scroll-behavior: smooth` e `scroll-snap-type: y proximity`, porque queria uma navegação suave sem travar a rolagem.
- Otimização de Performance e Assets: as imagens estão em WebP dentro de `imagens`, a imagem principal usa `fetchpriority="high"` e as imagens secundárias usam `loading="lazy"`. Também evitei bibliotecas externas e fontes pesadas.
- Acessibilidade Avançada com Teclado: usei `:focus-visible` em links, botões e campos. O menu mobile tem `aria-label`, `aria-controls` e `aria-expanded`, e as imagens têm textos alternativos descritivos.

## Curadoria de código com IA

Usei IA como apoio, principalmente para revisar a estrutura dos cards do cardápio e o CSS responsivo. Eu não aceitei tudo automaticamente. Fui ajustando o que fazia sentido para o projeto, removendo o que parecia muito genérico e deixando o visual mais fiel ao Avenida XV.

Uma mudança importante foi separar os itens com foto em `featured-menu-grid` e os itens sem foto em `menu-list`. Isso deixou o desktop mais organizado, porque os pratos sem imagem aparecem como linhas de cardápio, com nome e preço bem alinhados. Também agrupei as bebidas por tipo, mostrando sabores de refrigerantes, sucos, chás, sodas, cervejas e drinks sem inventar preços onde eu não tinha essa informação.

Depois das alterações, validei manualmente se os cards continuaram parecidos com um cardápio real, se a página abriu bem no mobile, se os textos ficaram legíveis, se a navegação por teclado funcionou e se o HTML continuou semântico.

## Testes realizados

- Testei a página em largura de celular e desktop.
- Conferi o menu mobile abrindo e fechando.
- Naveguei usando Tab para verificar o foco visual.
- Testei a validação nativa do formulário.
- Conferi se as imagens carregam e se não existe scroll horizontal.
- Revisei o modo escuro pelo tema do sistema.
- Conferi se o cardápio completo ficou legível em telas grandes, sem cards vazios enormes.
