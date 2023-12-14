# Endpoints
Endpoints v1.

## Auth

### POST /api/auth
Endpoint para criar authenticação do usuário.
- Body
```
{
    "email":string,
    "password": string,
}
```
- Responses
    - `Sucesso`: Redireciona para a tela de login
    - `Falha`: 500 - internal error

### POST /api/login
Faz login do usuário. Verifica se o password e email estão corretos.
- Body
```
{
    "email":string,
    "password": string,
}
```
- Responses
    - `Sucesso`: redireciona para a página Home
    - `Falha`: 400 - bad request, Invalid credentials

### POST /api/logout
Faz o logout do usuário.
- Body
Vazio
- Responses
    - `Sucesso`: redireciona para página de Login
    - `Falha`: 500 - internal server error

## Usuário
### POST /api/register
Endpoint para criar usuário.
- Body
```
{
    "email": string,
    "name": string,
    "description":string || null
}
```
- Responses
    - `Sucesso`: redireciona para a página de auth
    - `Falha`: 500 - internal server error

### PATCH /api/register/:id
Endpoint para editar usuário.
- Body
```
{
    "email": string,
    "name": string,
    "description":string || null,
    "password": string
}
```
- Responses
    - `Sucesso`: redireciona para a página de posts
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error

### GET /api/users/:id
Endpoint para buscar informações de um usuario.
- Body
none.
- Responses
    - `Sucesso`: 200
        ```
        {
            "id": number,
            "name": string,
            "description": string
        }
        ```
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error






### GET /api/users
Endpoint para listar usuarios.
- Body
none.
- Responses
    - `Sucesso`: 200
        ```
        [
            {
                "id": number,
                "name": string,
                "description": string
            }
        ]
        ```
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error

### DELETE /api/register/:id
Endpoint para deletar usuario.
- Body
none
- Responses
    - `Sucesso`: 204 - No Content
    - `Falha`: ou 403 - Unauthorized; ou 500 - internal server error

## Posts
### POST /api/posts
Endpoint para criar post.
- Body
```
{
    "title": string,
    "text": string,
    "thumb": string
}
```
- Responses
    - `Sucesso`: redireciona para a página de posts
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error

### PATCH /api/posts/:id
Endpoint para editar post.
- Body
```
{
    "title": string,
    "text": string,
    "thumb": string
}
```
- Responses
    - `Sucesso`: 200 - objeto atualizado
    ```
    {
        "id": number,
        "title": string,
        "text": string,
        "thumb": string
    }
    ```
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error

### GET /api/posts/:id
Endpoint para buscar informacoes de um post.
- Body
none.
- Responses
    - `Sucesso`: 200 - retorna o post
    ```
    {
        "id": number,
        "title": string,
        "text": string,
        "thumb": string
    }
    ```
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error


### GET /api/posts?title=&user-id=
Endpoint para listar e buscar posts.
- Body
none.
- Responses
    - `Sucesso`: 200 - lista de posts encontrados
    ```
    [
        {
            "id": number,
            "title": string,
            "thumb": string
            "text": string
        }
    ]
    ```
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error

### DELETE /api/posts/:id
Endpoint para deletar um post.
- Body
none.
- Responses
    - `Sucesso`: 200 - No content
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error

### PATCH /api/posts/:id/fav-posts
Endpoint para favoritar e desfavoritar um post.
- Body
none.
- Responses
    - `Sucesso`: 204 - No content
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error

### GET /api/posts/fav-posts
Endpoint para listar os posts favoritos do usuário.
- Body
none.
- Reponses
    - `Sucesso`: 200 - lista de posts favoritos do usuário logado
    ```
    [
        {
            "id": number,
            "title": string,
            "text": string,
            "thumb": string
        }
    ]
    ```
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error

### GET /api/posts/:id/fav-posts
Endpoint para verificar se um post é favorito do usuário logado.
- Body
none.
- Responses
    - `Sucesso`: 200 - retorna se o post é favorito ou não do usuário logado
    ```
    {
        "postId": number,
        "userId": number,
        "isFavPost": boolean
    }
    ```
    - `Falha`: ou 401 - Unauthorized; ou 500 - internal server error



