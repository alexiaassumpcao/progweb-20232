# Entidades
## Autorização - auth
```
id: number - id de autorizacao - fkey
user_id: number - id do usuario - required (colocar como index unique)
email: string - email do usuario - required - unique
password: string - senha do usuario - required
```

## Usuário - user
```
id: number - id do usuario - fkey
email: string - email do usuario - required - unique
description: string - descricao do usuario
```

## Post - post
```
id: number - id so post = fkey
user_id: number - id do usuario que criou o post - required
title: string - titulo do post - required
text: string - texto do post - required
thumb: string - thumb do post
```

# Tabelas
Todas as tabelas possuem `created_at` e `update_at` que são datetime.
## Auth - auth
id - number - fkey
user_id - number - required - unique
email - string - required - unique
password - string - required

## Usuario - user
id - number - fkey
name - string - required
email - string - required - unique
description - string | null

## Post - post
id - number - fkey
user_id - number - required
title - string - required
text - string - required
thumb - string | null

## Posts favs - fav_posts
id - number - fkey
user_id - number - required
post_id - number - required
deleted_at - datetime