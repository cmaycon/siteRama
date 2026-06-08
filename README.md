# Ministério Apostólico Ramá - Landing Page

Esta é a Landing Page oficial do **Ministério Apostólico Ramá**, desenvolvida para apresentar a igreja, sua história, missão, programação de cultos, localização, formas de contribuição e canal de contato com a comunidade.

O site foi construído com foco em performance, responsividade e design moderno, utilizando tecnologias web modernas.

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando a seguinte stack de tecnologia:

- **[React](https://reactjs.org/) (v18)** - Biblioteca JavaScript para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript para tipagem estática e maior segurança no código.
- **[Vite](https://vitejs.dev/)** - Build tool e servidor de desenvolvimento extremamente rápido.
- **[Lucide React](https://lucide.dev/)** - Conjunto de ícones consistentes e modernos.
- **CSS3 / Vanilla CSS** - Estilização customizada com variáveis CSS e animações integradas.
- **Intersection Observer API** - Utilizada para efeitos dinâmicos de revelação de elementos ao rolar a página (*scroll reveal*).

---

## 📋 Funcionalidades

- **Navegação Fluida (Navbar):** Menu responsivo com transições suaves e âncoras para seções específicas.
- **Seção Sobre Nós:** Apresentação da história e da essência da igreja.
- **Missão, Visão e Valores:** Exposição clara do propósito do ministério.
- **Programação Semanal:** Agenda de cultos e encontros semanais atualizada.
- **Localização Interativa:** Integração com Google Maps para fácil localização física do templo.
- **Dízimos e Ofertas:** Área dedicada para contribuições via transferência bancária tradicional ou Pix (com chave CNPJ e QR Code).
- **Formulário de Contato:** Formulário estruturado para que visitantes e membros enviem mensagens diretamente.
- **Animações de Scroll:** Efeito dinâmico de surgimento gradual dos elementos (*fade-in / slide-up*) conforme o usuário navega pela página.

---

## 📁 Estrutura de Pastas

```text
siteRama/
├── assets/                 # Recursos visuais (imagens, QR code, logos)
├── src/
│   ├── components/         # Componentes React reutilizáveis e modulares
│   │   ├── About.tsx       # Seção "Sobre Nós" (e CSS correspondente)
│   │   ├── Contact.tsx     # Formulário de contato (e CSS correspondente)
│   │   ├── Footer.tsx      # Rodapé do site (e CSS correspondente)
│   │   ├── Hero.tsx        # Banner de entrada (e CSS correspondente)
│   │   ├── Location.tsx    # Seção com mapa e endereço (e CSS correspondente)
│   │   ├── Navbar.tsx      # Barra de navegação e menu mobile (e CSS correspondente)
│   │   ├── Offers.tsx      # Dízimos e Ofertas (e CSS correspondente)
│   │   ├── Purpose.tsx     # Missão, Visão e Valores (e CSS correspondente)
│   │   └── Schedule.tsx    # Calendário e horários dos cultos (e CSS correspondente)
│   ├── App.tsx             # Componente raiz que orquestra as seções do site
│   ├── index.css           # Estilos globais e variáveis de tema
│   └── main.tsx            # Ponto de entrada do React
├── index.html              # Estrutura HTML principal
├── package.json            # Scripts e dependências do projeto
├── tsconfig.json           # Configuração do TypeScript
└── vite.config.ts          # Configuração do bundler Vite
```

---

## 🔧 Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar a aplicação em sua máquina de desenvolvimento:

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) e o **npm** (ou Yarn/pnpm) instalados em seu computador.

### 1. Clonar o repositório
```bash
git clone https://github.com/cmaycon/siteRama.git
cd siteRama
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Executar em modo de desenvolvimento
```bash
npm run dev
```
O servidor local iniciará e o endereço da aplicação estará visível no terminal (geralmente `http://localhost:5173`).

### 4. Compilar para produção (Build)
Para gerar uma build otimizada para publicação:
```bash
npm run build
```
Os arquivos prontos para produção serão gerados na pasta `dist`.

### 5. Visualizar a Build de produção localmente
```bash
npm run preview
```

---

## 📄 Licença

Este projeto está sob a licença descrita no arquivo [LICENSE](LICENSE) na raiz do repositório.

---

Ministério Apostólico Ramá — *Um lugar de Deus para sua Família!*
