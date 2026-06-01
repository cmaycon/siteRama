# Ministério Apostólico Ramá - Landing Page

Esta é a landing page oficial do Ministério Apostólico Ramá, desenvolvida com React, TypeScript e Vite. O projeto foca em uma apresentação moderna, acolhedora e funcional para membros e visitantes.

## Tecnologias Utilizadas

- **React 18**: Biblioteca para construção da interface.
- **TypeScript**: Tipagem estática para maior segurança e manutenibilidade.
- **Vite**: Ferramenta de build rápida para o desenvolvimento web moderno.
- **Vanilla CSS**: Estilização personalizada seguindo a identidade visual da igreja.
- **Lucide React**: Biblioteca de ícones leves e elegantes.

## Identidade Visual

- **Cor Primária (Amarelo):** `#f9c403` (extraída do logo oficial).
- **Cor de Destaque (Azul Marinho):** `#001f3f` (complementar ao amarelo do logo).
- **Tipografia:** Combinação de fontes Sans-serif para legibilidade e Serif para títulos impactantes.

## Estrutura do Projeto

- **Navbar:** Navegação fixa com logo e links rápidos.
- **Início (Hero):** Mensagem de boas-vindas com visual de alto impacto.
- **Sobre Nós:** História e essência do ministério.
- **Propósito:** Missão, Visão e Valores apresentados de forma clara.
- **Programação:** Cronograma semanal de cultos e eventos.
- **Localização:** Endereço físico com mapa interativo (placeholder).
- **Ofertas:** Informações bancárias e QR Code para dízimos e ofertas.
- **Contato:** Formulário funcional para mensagens.
- **Rodapé:** Redes sociais, marca e versículo bíblico marcante.

## Como Executar

Para rodar o projeto localmente:

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Para gerar a versão de produção:
   ```bash
   npm run build
   ```

## Convenções de Desenvolvimento

- **Componentes:** Localizados em `src/components`, cada um com seu arquivo `.tsx` e `.css` correspondente.
- **Estilos Globais:** Definidos em `src/index.css` utilizando variáveis CSS para cores e fontes.
- **Assets:** Imagens e logos armazenados na pasta `assets/`.
