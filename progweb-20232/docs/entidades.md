# Entidades
## Autorização
```
id: uuid - id de autorizacao - fkey
id_usuario: uuid - id do usuario - required (colocar como index unique)
email: strinf - email do usuario - required - unique
senha: string - senha do usuario - required
```

## Usuário
```
id: uuid - id do usuario - fkey
email: string - email do usuario - required - unique
descricao: string - descricao do usuario
posts: []Post - lista de posts criados pelo usuario
favs: []Post - lista de posts favoritados pelo usuario
```

## Post
```
id: uuid - id so post = fkey
id_usuario: uuid - id do usuario que criou o post - required
titulo: string - titulo do post - required
texto: string - texto do post - required
thumb: string - thumb do post
```

# Tabelas
## Auth
id - uuid - fkey
id_usuario - uuid - required - unique
email - string - required - unique
senha - string - required

## Usuario
id - uuid - fkey
nome - string - required
email - string - required - unique
descricao - string | null

## Post
id - uuid - fkey
id_usuario - uuid - required
titulo - string - required
texto - string - required
thumb - string | null

## Posts favs
id - uuid - fkey
id_usuario - uuid - required
id_post - uuid - required