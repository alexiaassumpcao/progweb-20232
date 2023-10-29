# Endpoints
Endpoints v1.

## Auth

### get /v1/auth/:user-id
Endpoint para pegar informação de login do usuário.
- Body
none.
- Response
*200* OK
```
{
    "id":uuid,
    "id_usuario":uuid,
    "senha": string,
}
```
*404*
*401*
*403*

### post /v1/auth
Endpoint para criar authenticação do usuário.
- Body
```
{
    "id_usuario":uuid,
    "senha": string,
}
```
- Response
*201* Created
*422*

### put /v1/auth/:user-id
Endpoint para editar authenticação do usuário.
- Body
```
{
    "senha": string,
}
```
- Response
*200* OK
*422*
*401*
*403*

### delete /v1/auth/:user-id
Endpoint para deletar authenticação do usuário.
- Body
none.
- Response
*200* OK
*404*
*401*
*403*

## Usuário
### post /v1/users
Endpoint para criar usuário.
- Body
```
{
    "email": string,
    "nome": string,
    "descricao":string || null
}
```
- Response
*200* OK
*422*
*401*
*403*

### put /v1/users/:user-id
Endpoint para editar usuário.
- Body
```
{
    "email": string,
    "nome": string,
    "descricao":string || null
}
```
- Response
*200* OK
*422*
*401*
*403*
*404*

### get /v1/users/:user-id
Endpoint para buscar informações de um usuario.
- Body
none.
- Response
*200* OK
*404*
*401*
*403*

### get /v1/users/:user-id/favs
Endpoint que busca os posts de um usuario.
- Body
none.
- Reponse
*200*
*404*
*401*
*403*

### post /v1/users/:user-id/favs/:post-id
Endpoint para adicionar um post na listagem de favoritos
- Body
none.
- Response
*200*
*404*
*401*
*403*

### delete /v1/users¹:user-id/favs/:post-id
Endpoint para retirar um post dos favoritos de um usuario.
- Body
none.
- Response
*200*
*401*
*403*
*404*

### get /v1/users?name=&email=
Endpoint para buscar e listar usuarios.
- Body
none.
- Response
*200*
*401*
*403*

### delete /v1/users/:user-id
Endpoint para deletar usuario e os posts criados pelo usuario.
- Body
none
- Response
*200*
*404*
*403*
*401*

## Posts
### post /v1/posts
Endpoint para criar post.
- Body
```
{
    "titulo": string,
    "texto": string,
    "thumb": string
}
```
- Response
*200*
*422*
*401*
*403*

### put /v1/posts/:post-id
Endpoint para buscar um post.
- Body
```
{
    "titulo": string,
    "texto": string,
    "thumb": string
}
```
- Response
*200*
*404*
*401*
*403*
*422*

### get /v1/posts/:post-id
Endpoint para buscar informacoes de um post.
- Body
none.
- Response
*200*
*404*
*401*
*403*

### get /v1/posts?titulo=&texto=&user-id=
Endpoint para listar e buscar posts.
- Body
none.
- Response
*200*
*401*
*403*

### delete /v1/posts¹:post-id
Endpoint para deletar um post.
- Body
none.
- Response
*200*
*404*
*401*
*403*


