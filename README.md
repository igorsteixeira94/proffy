<p align="center">
<img src="https://user-images.githubusercontent.com/47749249/89240844-b897e700-d5d3-11ea-850d-5f95d08833c7.png" width="320px"/>
<p align="center"><i>Sua plataforma de estudos online. Criada pela: RocketSeat para o Next Level Week#2</i></p>
</p>
<p align="center">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/igorsteixeira94/proffy?color=%236842c2">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/igorsteixeira94/proffy?color=%236842c2&logoColor=%236842c2" />
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/igorsteixeira94/proffy?color=%236842c2">
</p>

<h1 align="center">Índice</h1>

[Como Usar](#como-usar)  | [Tecnologias](#rocket-tecnologias) |  [Features](#features-implementadas) |  [Screenshot](#screenshot)
:-------:                | ------:                            |:-------:                             | ------:



## Como Usar

🐋️ *via docker*

```shell
git clone git@github.com:igorsteixeira94/proffy.git
cd proffy
docker-composer up
##Ps.Localhost rodando na porta 3000
```

 👨‍💻️ *sem docker*

```shell
git clone git@github.com:igorsteixeira94/proffy.git
cd proffy

#Iniciando o Servidor localhost:3333
cd server
yarn install
yarn start

#Iniciando o Web localhost:3000
cd web
yarn install
yarn start
```



## :rocket: Tecnologias

* BackEnd (Api):
  * NodeJs;
  * Express;
  * Knex;
  * Sqlite3;
  * Cors;
* FrontEnd (Web):
  * ReacJs;
  * React Router DOM;
* 🏗️ Mobile (Expo):
  * React-Native;
  * Expo-cli;



## Screenshot

### Web

<p align="center">
<img src="https://user-images.githubusercontent.com/47749249/89241645-eb42df00-d5d5-11ea-9e7f-d497e2794fb4.png" width="400px"/>
<img src="https://user-images.githubusercontent.com/47749249/89241649-ebdb7580-d5d5-11ea-84c1-77a596233305.png" width="400px"/>
</p>

### Mobile
<p align="center">
<img src="https://user-images.githubusercontent.com/47749249/89241878-7de37e00-d5d6-11ea-8dae-ebbcf8589565.png" width="300px" height="600px"/>
<img src="https://user-images.githubusercontent.com/47749249/89241881-7f14ab00-d5d6-11ea-8a18-af0ec3504d77.png" width="300px" height="600px"/>
</p>


## Features Implementadas

* BackEnd:
  * [x] Criar Proffys;
  * [x] Listar Proffys;
  * [x] Criar de Conexões;
  * [x] Listar de Conexões.
  
* FrontEnd:
  * [x] Landing Page;
  * [x] Criar Proffys;
  * [x] Listar Proffys;
  * [x] Criar de Conexões;
  * [x] Listar de Conexões.
  
* Mobile:

  - [x] Landing Page;

  * [ ] Listar Proffys;
  * [ ] Favoritar Proffys;
  * [ ] Listar de Conexões.



## Estrutura do Projeto

```bash
$ tree
.
├── docker-compose.yml
├── README.md
├── mobile
│   ├── app.json
│   ├── App.tsx
│   ├── assets
│   │   ├── favicon.png
│   │   ├── icon.png
│   │   └── splash.png
│   ├── babel.config.js
│   ├── package.json
│   ├── src
│   │   ├── assets
│   │   │   ├── icons
│   │   ├── components
│   │   │   └── PageHeader
│   │   │       ├── index.tsx
│   │   │       └── styles.ts
│   │   ├── pages
│   │   │   ├── Favorites
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── GiveClasses
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── Landing
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   └── TeacherList
│   │   │       ├── index.tsx
│   │   │       └── styles.ts
│   │   ├── routes
│   │   │   ├── AppStack.tsx
│   │   │   └── StudyTabs.tsx
│   │   └── @types
│   │       └── index.d.ts
│   ├── tsconfig.json
│   └── yarn.lock
├── server
│   ├── Dockerfile
│   ├── knexfile.ts
│   ├── package.json
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   ├── ClassesController.ts
│   │   │   └── ConnectionsController.ts
│   │   ├── database
│   │   │   ├── connection.ts
│   │   │   └── migrations
│   │   │       ├── 00_create_users.ts
│   │   │       ├── 01_create_classes.ts
│   │   │       ├── 02_create_class_schedule.ts
│   │   │       └── 03_create_connection.ts
│   │   ├── routes.ts
│   │   ├── server.ts
│   │   └── utils
│   │       └── convertHourToMinutes.ts
│   ├── tsconfig.json
│   └── yarn.lock
└── web
    ├── Dockerfile
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── README.md
    ├── src
    │   ├── App.tsx
    │   ├── assets
    │   │   ├── images
    │   │   │   ├── icons
    │   │   └── styles
    │   │       └── global.css
    │   ├── components
    │   │   ├── Input
    │   │   │   ├── index.tsx
    │   │   │   └── styles.css
    │   │   ├── PageHeader
    │   │   │   ├── index.tsx
    │   │   │   └── styles.css
    │   │   ├── Select
    │   │   │   ├── index.tsx
    │   │   │   └── styles.css
    │   │   ├── TeacherItem
    │   │   │   ├── index.tsx
    │   │   │   └── styles.css
    │   │   └── TextArea
    │   │       ├── index.tsx
    │   │       └── styles.css
    │   ├── index.tsx
    │   ├── pages
    │   │   ├── Landing
    │   │   │   ├── index.tsx
    │   │   │   └── styles.css
    │   │   ├── TeacherForm
    │   │   │   ├── index.tsx
    │   │   │   └── styles.css
    │   │   └── TeacherList
    │   │       ├── index.tsx
    │   │       └── styles.css
    │   ├── react-app-env.d.ts
    │   ├── routes.tsx
    │   └── services
    │       └── api.tsx
    ├── tsconfig.json
    └── yarn.lock
```

