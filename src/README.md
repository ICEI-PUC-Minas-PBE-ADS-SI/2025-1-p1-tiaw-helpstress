# Código-fonte


Esta é a pasta destinada à manutenção do programa que será desenvolvido no contexto desta disciplina.

Se necessário, deve-se descrever neste arquivo os aspectos relevantes da estrutura de diretórios criada para a organização do código.

Assim ficou nossa distribuição dentro da pasta src:

```HELPSTRESS
src/  (esta pasta aqui)
│
├── db/
│   └── db.json 
│
├── public/ (seu site - front-end)
│   ├── assets/
│      ├── css/
│      │   ├── styles.css
│      │   └── blog.css
│      │   ├── comunidade.css
│      │   └── comunidadeMobile.css
│      │   ├── comunidadeOff.css
│      │   └── detalhes.css
│      │   ├── dicasTecnicas.css
│      │   └── dormir.css
│      │   ├── editarPerfil.css
│      │   └── exercicios.css
│      │   ├── meditacao.css
│      │   └── respiracao.css
│      │   ├── tags.css 
│      │
│      ├── js/
│      │   ├── auth.js
│      │   └── cadastro.js
│      │   ├── cloudinary.js
│      │   └── confirmarExclusao.js
│      │   ├── editarPerfil.js
│      │   └── login.js
│      │   ├── perfil.js
│      │   └── profileTags.js
│      │   ├── script.js
│      │   └── scriptComunidade.js
│      │   ├── scriptComunidadeMobile.js
│      │   └── scriptTecnicas
│      │
│      ├── img/
│      │   ├── jpg, png, svg e gif
│   
│   
│
│── ├── index.html
│   ├── login.html
│   ├── ansiedadeBlog.html
│   └── dormirbem.html
│   ├── cadastro.html
│   ├── comunidade.html
│   ├── comunidadeOFF.html
│   └── editarPerfil.html
│   ├── confirmarExclusao.html
│   ├── detalhes.html
│   ├── dicasTecnicas.html
│   └── exercicios.html
│   └── meditacao.html
│   └── perfil.html
│   └── respiracao.html
│── README.md(este arquivo)
```

##  Como rodar o projeto

### 1. Instale as dependências
```bash
npm install
```

### 2. Inicie o backend (JSON Server + Express)
```bash
node server.js
```
O backend ficará disponível em [http://localhost:3000](http://localhost:3000)

### 3. Inicie o frontend
Você pode abrir os arquivos HTML diretamente no navegador, ou usar uma extensão como Live Server no VSCode, ou rodar um servidor local.

##  Observações
- O backend é um mock (JSON Server), ideal para testes e prototipação.
- O frontend é 100% estático, sem frameworks, focado em performance e responsividade.
- Para produção, recomenda-se migrar o backend para uma API real e adicionar autenticação JWT.

---

Desenvolvido por Thiago Grandim, Pedro Nunes e Isaac Santos. 