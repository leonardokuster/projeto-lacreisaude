# Lacrei Saúde - Reprodução do Site

Este projeto é uma reprodução do site [Lacrei Saúde](https://lacrei.com.br), desenvolvido majoritariamente em **TypeScript**. O objetivo foi explorar práticas modernas de desenvolvimento Front-End, aplicar testes, e experimentar estratégias de **deploy** e **rollback**.

**🔗 Visualização:**  
O site está disponível em: [https://projeto-lacreisaude.vercel.app/](https://projeto-lacreisaude.vercel.app/)

---

## 🚀 Instruções para rodar o projeto localmente

1. **Clone o repositório**
    ```bash
    git clone https://github.com/leonardokuster/projeto-lacreisaude.git
    cd projeto-lacreisaude
    ```

2. **Instale as dependências**
    ```bash
    npm install
    ```
    ou, se preferir:
    ```bash
    yarn install
    ```

3. **Inicie o servidor local**
    ```bash
    npm run dev
    ```
    O projeto estará disponível em `http://localhost:3000`.

---

## 🏗️ Instruções para Build e Deploy

1. **Build do Projeto**
    ```bash
    npm run build
    ```
    Isso irá gerar os arquivos otimizados na pasta `./.next` (se Next.js) ou `./dist` (caso outra stack).

2. **Deploy**
   - **Vercel**: Basta conectar o repositório à plataforma Vercel e definir as variáveis de ambiente necessárias. Os builds são acionados automaticamente a cada novo commit.
   - **Outros provedores (Netlify, AWS, etc.)**: Suba os arquivos da build ou conecte o repositório diretamente.

---

## 🧪 Registro dos Testes Aplicados

- **Testes unitários**: Cobertura dos principais componentes, utilizando **Jest** e **Testing Library**.

Para rodar os testes:
```bash
npm test
```

---

## 🔄 Proposta de Rollback Simples

**Restaurar uma versão anterior no deploy** (Vercel):

1. Acesse o histórico de deploys no [Projeto Vercel](https://vercel.com/dashboard).
2. Selecione o deploy desejado.
3. Clique em "Promote to Production" para tornar esta versão ativa novamente.

Alternativa manual:
```bash
git checkout <commit-antigo>
git push origin main
```
Esse commit será automaticamente publicado pela plataforma de deploy.

---

## 📝 Comentários sobre as escolhas visuais e técnicas

- **Visual**
    - Baseado no estilo do site original, aplicando **design responsivo** com uso extensivo de **CSS-in-JS** (styled-components).
    - Priorização da acessibilidade com uso correto de tags semânticas.
    - Paleta de cores e tipografia similar ao Lacrei, reproduzida de forma customizável.

- **Técnico**
    - Uso de **TypeScript** para maior segurança de tipos.
    - Estrutura de componentes reutilizáveis e modulares.
    - Utilização de rotas dinâmicas e server side rendering, se compatível.
    - Integração contínua via Vercel (build e preview automático).

---

## 🔁 Rollback Funcional

- **Preview Deploy (Vercel):**
    - Cada branch ou PR gera um deploy de preview, permitindo testes antes de colocar em produção.
    - Possível restaurar qualquer preview anterior como principal.

- **Versão anterior no Vercel:**
    - Plataforma permite selecionar qualquer histórico de deploy, facilitando rollback instantâneo.
    - Monitoramento de performance e erros por deploy.

---

## 💡 Justificativas Visuais e Técnicas

- **Design Responsivo**: Necessário para garantir a melhor experiência em mobile e desktop.
- **Utilização de TypeScript**: Evita bugs, melhora o desenvolvimento colaborativo e facilita refatorações.
- **Automação de Deploy**: Minimiza erros humanos e garante versionamento seguro.
- **Testes aplicados**: Reduzem regressões e aceleram a evolução do projeto com mais confiança.
- **Rollbacks rápidos**: Evitam indisponibilidade em caso de erro ou bug grave.

---

> **Fique à vontade para abrir issues ou PRs com sugestões e melhorias!**

---
