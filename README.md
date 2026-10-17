<<<<<<< HEAD
# Ferramentas KODAROS

![PWA offline-first](https://img.shields.io/badge/PWA-offline_first-black?style=flat-square)
![JavaScript vanilla](https://img.shields.io/badge/JavaScript-vanilla-black?style=flat-square)
![Service Worker](https://img.shields.io/badge/Service%20Worker-cache%20offline-black?style=flat-square)

Conjunto de 53 calculadoras e geradores de gestão, aquisição, lançamento, financeiro, vendas, suporte e conteúdo. Tudo roda no navegador do usuário, sem cadastro, sem custo e sem enviar dados a servidor algum.

## Problema / Por que existe

Pequenos negócios precisam de números (CAC, LTV, ponto de equilíbrio, fluxo de caixa, NPS) mas as ferramentas úteis costumam exigir cadastro, assinatura ou envio de dados para servidores externos. As fórmulas também estão espalhadas nos e-books da KODAROS sem uma forma rápida de aplicá-las. Este projeto reúne as calculadoras citadas nos e-books em um único site, 100% client-side, sem IA.

## O que faz

- 53 ferramentas em 7 categorias: Aquisição & Tráfego (13), Lançamento (6), Financeiro (8), Vendas (7), Suporte & Transformação (6), Operação & Gestão (7), Conteúdo & Marketing (6).
- Cada cálculo roda inteiramente no navegador; nada sai do dispositivo do usuário.
- Exporta resultado em PNG com 1 clique (canvas) e CSV (fluxo de caixa).
- Favoritas e recentes salvas em localStorage do navegador.
- Busca por palavra-chave (atalho /) e teclas 1 a 7 para abrir categorias.
- Service worker coloca o núcleo do site em cache para uso offline (PWA, display standalone).
- Cada ferramenta cita o e-book de referência de origem.
- Fonte única de verdade: array KODAROS_TOOLS em script.js (id, nome, categoria, e-book).

## Stack

- HTML5, CSS3 e JavaScript vanilla (sem build step, sem frameworks, sem dependências de produção)
- Service Worker (sw.js, cache kodaros-tools-v5, estratégia cache-first com fallback de rede para mesma origem)
- Web App Manifest (manifest.json, display standalone, ícones 192x192, 512x512 e maskable)
- localStorage (favoritos, recentes, persistência de inputs, eventos anônimos kodaros_events)
- Canvas API (exportação PNG de resultados e templates editáveis: cartão de visita, post Instagram, cupom)
- Fontes: Cinzel, Cormorant Garamond e Figtree (Google Fonts)
- Hospedagem: GitHub Pages (https://kelvinoliveiracode.github.io/kodarosferramentas/)
- Testes: jsdom (tests/smoke.js)

## Como funciona

index.html carrega style.css e script.js. Todas as ferramentas são declaradas em KODAROS_TOOLS. Ao abrir uma aba, os painéis são exibidos ou ocultos pela classe active. Cada calculadora lê os inputs, valida (valores não negativos), calcula com sua função dedicada e exibe o resultado. O service worker intercepta requisições GET de mesma origem, responde do cache kodaros-tools-v5 quando disponível, busca na rede caso contrário e serve ./ como fallback em caso de falha. A instalação como PWA ocorre pelo manifesto em navegadores que suportam.

## Como rodar

Não há passo de build nem dependências de produção.

1. Baixe ou clone a pasta Kodaros Ferramentas.
2. Abra index.html no navegador.
3. Para usar como PWA: acesse https://kelvinoliveiracode.github.io/kodarosferramentas/ e instale (Adicionar à tela inicial).

Para rodar os testes:

```
cd tests
npm install
npm test
```

O smoke test valida com jsdom que KODAROS_TOOLS tem 53 ferramentas, IDs únicos, cálculos (CAC, precificação, fluxo de caixa), busca vazia, favoritos e ausência de erros de runtime.

## Estrutura do projeto

```
Kodaros Ferramentas/
├── index.html          shell da PWA: 7 abas e 53 ferramentas
├── script.js           lógica das calculadoras, fórmulas, busca, favoritos, exportação, registro do SW
├── style.css           identidade visual Dossiê (pedra e ouro), responsivo
├── manifest.json       manifesto da PWA (standalone, ícones)
├── sw.js               service worker offline-first (cache kodaros-tools-v5)
├── kodaros_icon.png    ícone da aplicação / apple-touch-icon
├── icon-192.png        ícone PWA 192x192
├── icon-512.png        ícone PWA 512x512
├── icon-512-maskable.png ícone PWA maskable 512x512
├── banner.png          banner do rodapé
├── bust.png            ícone da navbar
├── kodaros_logo.png    marca
├── kodaros_og.png      imagem de compartilhamento (OG)
├── bg-salao.jpg        plano de fundo
├── robots.txt          instruções de rastreamento
├── sitemap.xml         sitemap do site
└── tests/              smoke tests em jsdom (package.json, smoke.js, node_modules)
```

## Trade-offs e decisões

- 100% client-side por decisão de privacidade: nada sai do dispositivo. Contrapartida: não há sincronização entre dispositivos nem backend.
- Sem build step: funciona abrindo o HTML direto no navegador. Contrapartida: CSS e JS não minificados.
- localStorage para favoritas e recentes: persiste apenas no navegador do dispositivo; limpar dados do navegador apaga as favoritas.
- Service worker com cache estático fixo (kodaros-tools-v5): fontes do Google Fonts não são interceptadas (apenas mesma origem).
- Exportação de resultado é PNG gerado localmente via canvas, com TXT como fallback.

## Limitações conhecidas

- Não funciona sem JavaScript habilitado.
- Não há login, portanto favoritas e histórico não saem do navegador/device.
- Na primeira visita as fontes (Google Fonts) exigem conexão; depois o service worker mantém o núcleo offline.
- Os cálculos são simulações com valores de exemplo pré-preenchidos; não substituem consulta contábil ou financeira profissional.
- Templates de cartão de visita, post e cupom exportam PNG localmente via canvas; o upload de imagem opcional funciona apenas no dispositivo.

## Licença

Todos os direitos reservados. KODAROS, 2026.

## Autor

KODAROS — kodaros01@gmail.com — https://kelvinoliveiracode.github.io/KodarosLanding/
=======
# Kodaros Ferramentas — PWA com 53 Calculadoras

![linguagem: JavaScript](https://img.shields.io/badge/linguagem-JavaScript-blue)  
![status: concluido](https://img.shields.io/badge/status-concluido-green)  
![licenca: MIT](https://img.shields.io/badge/licenca-MIT-blue)

### Descrição
PWA com 53 calculadoras de negócio, offline-first via service worker.

### O que faz
PWA com 53 calculadoras de negócio, offline-first via service worker.

### Tecnologias
- HTML5
- CSS3
- JavaScript
- PWA
- Service Worker

### Como usar
Instale as dependências e execute os testes: `npm install && npm test`

### Estrutura
Consulte a árvore do repositório para a organização exata de pastas e arquivos.

### Testes
Não há contagem de testes registrada nesta metadata. Adicione e execute testes apropriados à linguagem (pytest para Python, ./mvnw test para Java, npm test para JavaScript/TypeScript).

### Licença
MIT

### Autor
Kelvin Oliveira — github.com/KelvinOliveiraCode

---

# Kodaros Tools — PWA with 53 Calculators

![language: JavaScript](https://img.shields.io/badge/language-JavaScript-blue)  
![status: concluido](https://img.shields.io/badge/status-concluido-green)  
![license: MIT](https://img.shields.io/badge/license-MIT-blue)

### Description
PWA with 53 business calculators, offline-first via service worker.

### What it does
PWA with 53 business calculators, offline-first via service worker.

### Technologies
- HTML5
- CSS3
- JavaScript
- PWA
- Service Worker

### How to use
Install dependencies and run tests: `npm install && npm test`

### Structure
Check the repository tree for the exact folder and file organization.

### Tests
No test count recorded in this metadata. Add and run tests appropriate for the language (pytest for Python, ./mvnw test for Java, npm test for JavaScript/TypeScript).

### License
MIT

### Author
Kelvin Oliveira — github.com/KelvinOliveiraCode
>>>>>>> d17a38f7d2ae46b053dfbaea7a9e61a59455e46c
