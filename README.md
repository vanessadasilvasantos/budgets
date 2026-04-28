# Orçamento de Granito

Aplicação web para cálculo de orçamento de granito, com seleção de material e modelo, regras de cálculo por tipo de frontão/saia e personalização de parâmetros comerciais.

## ✨ Funcionalidades

- Cálculo automático do valor total com atualização em tempo real.
- Seleção de material e modelo (com imagem ilustrativa).
- Configuração de medidas (comprimento e largura).
- Personalização de:
	- largura da saia;
	- largura do frontão;
	- valor do metro de acabamento;
	- valor do material por m²;
	- quantidade de grapas;
	- valor da instalação;
	- inclusão de cuba.
- Adição de fecha com controle de quantidade.
- Botão para copiar mensagem comercial com saudação por horário.
- Interface responsiva para desktop e mobile.

## 🧱 Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- MUI Icons

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js 18+ (recomendado Node.js 20+)
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### Build de produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 📁 Estrutura principal

- [app/page.tsx](app/page.tsx): tela principal com formulário, UI e integração dos cálculos.
- [app/src/calculos](app/src/calculos): regras de cálculo separadas por responsabilidade.
	- [app/src/calculos/base.ts](app/src/calculos/base.ts)
	- [app/src/calculos/frontao-saia.ts](app/src/calculos/frontao-saia.ts)
	- [app/src/calculos/adicionais.ts](app/src/calculos/adicionais.ts)
	- [app/src/calculos/fecha.ts](app/src/calculos/fecha.ts)
	- [app/src/calculos/total.ts](app/src/calculos/total.ts)
- [app/src/components](app/src/components): componentes reutilizáveis de interface.
- [app/src/data/materiais.tsx](app/src/data/materiais.tsx): materiais e preços base.
- [app/src/data/modelos.tsx](app/src/data/modelos.tsx): modelos e metadados de cálculo.

## 🧮 Regras de cálculo (resumo)

O valor total considera:

- valor base da chapa (comprimento × largura × valor do material);
- valor de frontão e saia conforme o modelo selecionado;
- acabamento por metro linear;
- adicionais (cuba, furo/colagem, grapas, instalação);
- fecha (quando ativado).

As regras estão modularizadas para facilitar manutenção e evolução do projeto.

## 📌 Observações

- O projeto foi desenvolvido para apoiar orçamentos rápidos e padronizados.
- Os valores e parâmetros podem ser ajustados na interface para refletir cenários reais de venda.

---

Feito com Next.js + TypeScript.
