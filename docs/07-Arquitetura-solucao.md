# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da solução](images/exemplo-arquitetura.png)

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.

##### Funcionalidade 1 - Cadastro de Usuários

Permite a inclusão, leitura, alteração e exclusão de usuários para o sistema

* **Estrutura de dados:** Usuário
* **Instruções de acesso:**
  * Abra o site e efetue o cadastro;
  * Acesse o menu principal e escolha a opção "Com a imagem do avatar";
* **Tela da funcionalidade**:


![tela de cadastro](https://github.com/user-attachments/assets/907571b9-af71-4d7a-9783-6ec65026d162)



Funcionalidade 2 - homepage
Dashboard com perfil, abas, comunidade etc..

Instruções de acesso:

apos login acessar homepage do site;

tera disponivel seção de perfil, incio, sobre ansiedade, dicas e tecnicas e comunidade.

Tela da funcionalidade:
![tela incial](https://github.com/user-attachments/assets/915f41c6-4c23-470d-a52f-cb9fc83d023f)

Funcionalidade 3 - Abas de dicas e tecnicas e comunidade
pagina de treinos

Instruções de acesso:

apos acessar homepage, clicar no botao "comunidade ou dicas e tecnicas",

sendo possivel acessar cada uma das partes, como buscar por atividades quizes e acesso a comunidade que organiza com mais pessoas que utilizam o site.
Tela da funcionalidade:

![aba de dicas e tecnicas](https://github.com/user-attachments/assets/81d6ae1a-0429-44b5-8d3f-d7da40e2019e)
![aba da comunidade](https://github.com/user-attachments/assets/a6252929-df2c-42e5-8243-2c539281e98a)

### Estruturas de dados

Guarda as informações do cadastro e login do usuário.

##### Estrutura de dados - Dados do usuário


Estrutura de dados do usuário:

 {
      "id": 7,
      "nome": "teste",
      "email": "teste@gmail.com",
      "senha": "123456",
      "celular": "11999999999",
      "bio": "",
      "avatar": "http://localhost:3000/assets/img/user.png"
    }


### Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução.


**Fonts:**

* Fonte awesome - https://fontawesome.com/

**Scripts:**

* jQuery - https://jquery.com/
* Bootstrap - https://getbootstrap.com/
* GSAP - https://gsap.com/
* ScrollReveal - revealjs.org 


## Hospedagem

* Backend - [render.com](https://helpstress-backend.onrender.com)
* Frontend - [netlify.com](http://helpstress.netlify.app)

> **Links úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando seu site no Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
