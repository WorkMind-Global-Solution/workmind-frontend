# WorkMind – Plataforma de Aprendizado e Bem-Estar Inteligente

## 1. Descrição

O **WorkMind** é uma aplicação Front-End desenvolvida para a Global Solution 2025. Nossa solução visa preparar jovens e profissionais para as carreiras do futuro, combinando inteligência artificial, aprendizagem contínua e foco em saúde mental e sustentabilidade, tudo em um único ecossistema digital.

## 2. Status do Projeto

[![Status](https://img.shields.io/badge/Status-CONCLU%C3%8DO-brightgreen)]([workmind-frontend.vercel.app)
[![API](https://img.shields.io/badge/API_Java-Integrada-blue)](https://workmind-java.onrender.com/api/usuarios)
[![Front-End](https://img.shields.io/badge/Deploy-Vercel-black)](workmind-frontend.vercel.app)

## 3. Sumário 

* [4. Sobre o Projeto](#4-sobre-o-projeto)
* [5. Tecnologias Utilizadas](#5-tecnologias-utilizadas)
* [6. Instalação](#6-instalação)
* [7. Como Usar](#7-como-usar)
* [8. Estrutura de Pastas](#8-estrutura-de-pastas)
* [9. Rotas Principais](#9-endpoints-ou-rotas-principais)
* [10. Autores e Créditos](#10-autores-e-créditos)
* [11. Screenshots / Demonstração](#11-screenshots--demonstração-028-ponto)

## 4. Sobre o Projeto 

O WorkMind opera como um ecossistema completo de desenvolvimento pessoal e profissional (web e mobile), destacando-se por:

* **IA Mentora Personalizada:** Cria planos de estudo com foco em **Reskilling** e **Upskilling**, sugerindo pausas e meditações para o bem-estar.
* **Aprendizado Gamificado:** Utiliza missões e trilhas para aumentar o engajamento e a retenção do conteúdo.
* **Foco ESG e Inclusão:** Incentiva carreiras verdes e oferece conteúdos de inclusão social e produtiva para grupos em vulnerabilidade.
* **Impacto:** Prepara a mão de obra para profissões do futuro, promovendo saúde mental e conectando tecnologia com propósito humano.

## 5. Tecnologias Utilizadas 

| Categoria | Tecnologia | Justificativa de Uso |
| :--- | :--- | :--- |
| **Framework** | **React** | Essencial para arquitetura Single Page Application (SPA) e Componentização. |
| **Linguagem** | **TypeScript** | Garante Tipagem (Interface, Union, Intersection Types) e segurança do código. |
| **Estilização** | **Tailwind CSS** | Único framework de estilização utilizado. Garante **Responsividade** (5 *breakpoints*) e **Modo Noturno** (`dark:`). |
| **Estado Global** | **Context API** | Usada para implementar o sistema de **Tema Escuro/Claro** (`useTheme`), evitando *prop drilling*. |
| **Rotas** | **React Router DOM** | Criação de Rotas Estáticas e Dinâmicas (`/trilha/:id`). |
| **Formulários** | **React Hook Form** | Gerenciamento de formulários e validação (simulação de requisições POST). |

## 6. Instalação 

Certifique-se de ter o Node.js e o npm/yarn instalados.

```bash
# 1. Clone o repositório
git clone [URL_DO_SEU_REPOSITORIO]
cd workmind-frontend/workmind

# 2. Instale as dependências (React, TS, Tailwind, Router, RHF)
npm install

# 3. Inicie o Servidor de Desenvolvimento
npm run dev
```
## 7. Como Usar 
A aplicação pode ser acessada de duas formas:
Localmente: Após a instalação, acesse a URL fornecida pelo npm run dev (ex: http://localhost:5173).
Produção (Deploy): A versão final e integrada da aplicação está disponível publicamente na Vercel:

### URL da Aplicação Publicada (Vercel)

https://workmind-frontend.vercel.app

## 8. Estrutura de Pastas
A arquitetura do projeto é modular e segue o padrão SPA (Single Page Application):
```bash
src/
├── api/             # Camada de Serviço (Integração com API Java e Mocks)
├── components/      # Componentes reutilizáveis (Header, Footer, Botões)
│   ├── layout/      # Componentes de layout (Header, Footer)
│   └── ui/          # Componentes menores (ThemeToggleButton)
├── contexts/        # Context API (ThemeContext/useTheme)
├── data/            # Mocks e dados fixos (FAQ_DATA, COURSES_DATA)
├── hooks/           # Custom Hooks (useFetch)
├── pages/           # Componentes que representam as Rotas
│   ├── Home/
│   ├── Usuarios/    # Prova de Integração com API Java
│   └── ...
├── routes/          # Configuração do createBrowserRouter
└── types/           # Tipagem global (Usuario, TrilhaAprendizado, ContatoForm)
```
## 9. Endpoints ou Rotas Principais 
O Front-End interage ativamente com os seguintes endpoints da API Java:
```bash
Verbo HTTP	Rota Front-End	Função	Endpoint API (Real)
GET	Buscar Usuário específico por ID.	/api/usuarios/{id}
POST	/contact Cadastro de um novo usuário via formulário.	/api/usuarios
PUT	Atualização de pontuação (Gamificação).	/api/usuarios/{id}/pontuacao
DELETE	Exclusão de um usuário.	/api/usuarios/{id}
```

## 10. Autores e Créditos 
Este projeto foi desenvolvido pela equipe WorkMind como parte da disciplina de Front-End Design Engineering.

Henrique Pacheco RM562086
Rafael Siqueira  RM564900
Gustavo Bardy    RM566136

## 11. Screenshots / Links

Link do Vídeo de Demonstração
YouTube: https://youtu.be/Lm804TqGD6w
Github: https://github.com/WorkMind-Global-Solution/workmind-frontend.git 
