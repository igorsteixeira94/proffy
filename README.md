<p align="center">
<img src="https://user-images.githubusercontent.com/47749249/89240844-b897e700-d5d3-11ea-850d-5f95d08833c7.png" width="320px"/>
<p align="center"><i>Sua plataforma de estudos online. Criada pela: RocketSeat para o Next Level Week#2</i></p>
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
##Ps.:server roda na porta 3333 e web na porta 3000, ainda não 'linkei' os dois containers.
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

* 🏗️ BackEnd (Api):
  * NodeJs;
  * Express;
  * Knex;
  * Sqlite3;
  * Cors;
* 🏗️ FrontEnd (Web):
  * ReacJs;
  * React Router DOM;
* 🏗️ Mobile ()



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
  * [x] Criação de classes (Professor/aula/horários disponíveis);
  * [x] Listagem de classes;
  * [x] Criador de Conexões;
  * [x] Listagem de conexões.

* FrontEnd:
  * [ ] Criação de classes (Professor/aula/horários disponíveis);
  * [x] Listagem de classes;
  * [ ] Criador de Conexões;
  * [x] Listagem de conexões.

