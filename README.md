# progweb-20232
Aplicação desenvolvida com o intuito de aplicar os conhecimentos adquiridos na disciplina Programação Web de 2023.2.

## Grupo
Tabalho implementado pelo Grupo: Alexia Assumpção e Jessica Ruel.


## Requisitos para executar
- [NodeJS ^14](https://nodejs.org/en/download)
- [SQLite3](https://www.sqlite.org/download.html)
- [NPM](https://www.npmjs.com/package/download)

## Como executar a aplicação
- Passo 1: Clonar repositorio
```
git clone <link_do_github>
```

- Passo 2: entrar na pasta da aplicação
```
cd progweb-20232/progweb-20232
```

- Passo 3: instalar as libs de front
    - tailwind
    - flowbite
```
npm install -D tailwindcss
```

```
npm install flowbite
```
- Passo 4: instalar as outras dependencias
```
npm install
```
- Passo 5: executar 
```
node ace migration:run
```
- Passo 6: executar aplicação
```
node ace serve --watch
```

## Documentação
Parte da documentação se encontra na pasta `docs` do projeto.

## Comandos uteis
### Executar migrations
```
node ace migration:run
```

### listar rotas
```
node ace list:routes
```

### executar
```
node ace serve --watch
```

### tailwind
```
npm install -D tailwindcss
```

### flowbite
```
npm install flowbite
```

### para criar novo modelo com migration e factory
```
node ace make:model User -m -f
```