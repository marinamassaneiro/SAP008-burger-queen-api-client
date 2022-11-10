<div align="center">

  <img alt="Logo Burguer Queen" src="https://github.com/marinamassaneiro/SAP008-burger-queen-api-client/blob/main/src/assets/logo.svg" style="height: 150px;">

  # **Burguer Queen**

  <img src='https://img.shields.io/github/languages/top/marinamassaneiro/SAP008-burger-queen-api-client
'>
  <img src='https://img.shields.io/github/package-json/keywords/marinamassaneiro/SAP008-burger-queen-api-client
'>
  <img src='https://img.shields.io/github/last-commit/marinamassaneiro/SAP008-burger-queen-api-client
'>

  

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Node.js" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" style="height: 30px;"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style="height: 30px;"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style="height: 30px;"/>

  <br>

  **Status do Projeto:** _Em processo_ <br>
  **Desenvolvido por:** [Joyce Teodoro](https://github.com/dodojoy) e [Marina Massaneiro](https://github.com/marinamassaneiro) 
    
  <!-- O **resultado final** pode ser visitado [aqui](https://marinamassaneiro.github.io/SAP008-burger-queen-api-client
/)!! -->
</div>

## **Indice**
- [1. Apresentação](#1-apresentação)
- [2. Funcionalidades do produto](#3-funcionalidades)
- [3. Protótipo de Alta Fidelidade e Considerações da Pesquisa UX](#4-protótipo-de-alta-fidelidade-e-considerações-da-pesquisa-ux)
- [4. Histórias de Usuário](#6-histórias-de-usuário)
  - [4.1 História 1](#41-história-de-usuário-1)
  - [4.2 História 2](#42-história-de-usuário-2)
  - [4.3 História 3](#43-história-de-usuário-3)
  - [4.4 História 4](#44-história-de-usuário-4)
- [5. Objetivos de Aprendizagem](#7-objetivos-de-aprendizagem)
- [6. Considerações Técnicas](#8-considerações-técnicas)
- [7. Fonte das Imagens](#9-fonte-das-imagens)

***

## **1. Apresentação**
---

Burguer Queen API Client foi o quarto projeto realizado no Bootcamp de Desenvolvimento Web da [Laboratória](https://hub.laboratoria.la/br).

Esse é um projeto de simulação com demanda de cliente. O objetivo é a criação de um sistema de restaurante com relação entre salão e cozinha utilizando SPA. Para isso recebemos as exigências de interface para o(a) garçom/garçonete e cozinheiro(a), documentação que especifica o comportamento esperado da API e as histórias de usuário. O projeto também traz como objetivo de aprendizagem consolidar metodologias de trabalho em equipes, portanto, foi  desenvolvido pela dupla: [Joyce Teodoro](https://github.com/dodojoy) e [Marina Massaneiro](https://github.com/marinamassaneiro).

---
## **2. Funcionalidades do produto**
- Apenas pessoas cadastradas possuem acesso ao aplicativo.
- Ao criar um cadastro a pessoa usuária será direcionada à página de login e então poderá logar no aplicativo.
- A partir da função informada no cadastro o usuário será redirecionado para a timeline de salão ou cozinha.


## **3. Protótipo de Alta Fidelidade e Considerações da Pesquisa UX e UI**
---
<!-- Pensando na melhor fluidez dos  -->


## **4. Histórias de Usuário**
---

As histórias de usuário foram desenvolvidas pelo Product Owner em trabalho com o cliente de acordo com as necessidades do negócio. Levando em conta a definição de pronto:

  * Você deve ter recebido code review de pelo menos uma parceira.
  * Fez testes unitários e, além disso, testou seu produto manualmente.
  * Você fez testes de usabilidade e incorporou o feedback do usuário.
  * Você deu deploy de seu aplicativo e marcou sua versão (tag git).

### **4.1 História de Usuário 1**

> Eu, como garçom/garçonete quero entrar no sistema de pedidos.

* **Critérios de aceitação:**
  * Acessar uma tela de login.
  * Inserir email e senha.
  * Receber mensagens de erros compreensíveis, conforme o erro e as informações inseridas.
  * Entrar no sistema de pedidos caso as credenciais forem corretas.

### **4.2 História de Usuário 2**

> Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a cozinha para serem preparados em ordem.

* **Critérios de aceitação:**
  * Anotar o nome do cliente.
  * Adicionar produtos aos pedidos.
  * Excluir produtos.
  * Ver resumo e o total da compra.
  * Enviar o pedido para a cozinha (guardar em algum banco de dados).
  * Funcionar bem em um tablet.

### **4.3 História de Usuário 3**

> Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

* **Critérios de aceitação:**
  * Ver os pedidos ordenados à medida em que são feitos.
  * Marcar os pedidos que foram preparados e estão prontos para serem servidos.
  * Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

### **4.4 História de Usuário 4**

> Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

* **Critérios de aceitação:**
  * Ver a lista de pedidos prontos para servir.
  * Marcar os pedidos que foram entregues.

* **Definição de pronto:**
  * Para essa história é necessário também que os dados sejam mantidos intactos, mesmo depois que um pedido for finalizado. Tudo isso para poder ter estatísticas no futuro.

## **5. Objetivos de Aprendizagem:**
---

## **6. Considerações técnicas:**
---


## **7. Fonte das imagens**
---

<!-- - Background protótipo versão final: Photo by <a href="">Pickled Stardust</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> --> -->