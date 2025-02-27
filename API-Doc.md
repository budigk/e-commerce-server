# E-COMMERCE API Official Documentation

### List of Endpoints:
## users
| HTTP METHOD | URL                 | DESKRIPSI          |
| ----------- | ------------------- | ------------------ |
| **POST**    | /api/users/register | Register User Baru |
| **POST**    | /api/users/login    | Login User |
<br>
## categories
| HTTP METHOD | URL                 | DESKRIPSI          |
| ----------- | ------------------- | ------------------ |
| **POST**    | /api/categories          | Insert New Category |
| **GET** | /api/categories | Get All Category List
| **PUT** | /api/categories/:id | Update Category By `id` |
| **DELETE** | /api/categories/:id | Delete Categories By `id` |
<br>
## products
| HTTP METHOD | URL                 | DESKRIPSI          |
| ----------- | ------------------- | ------------------ |
| **POST**    | /api/products          | Insert New Product |
| **GET** | /api/products | Get All Product List
| **PUT** | /api/products/:id | Update Product By `id` |
| **DELETE** | /api/products/:id | Delete Product By `id` |
<br>
## carts
| HTTP METHOD | URL                 | DESKRIPSI          |
| ----------- | ------------------- | ------------------ |
| **POST**    | /api/carts          | Insert New Product |
| **GET** | /api/carts | Get All Cart List
| **PUT** | /api/carts/:id | Update Cart By `id` |
| **PATCH** | /api/carts/:id | Update Qty Cart By `id` |
| **DELETE** | /api/carts/:id | Delete Cart By `id` |
<br>
----
## Register New User
- HTTP Method : `POST`
- URL : `/users/register`
- Request Body : `json`
- Request Params : *none*
- Request Headers : *none*
- Response : `string`

#### Request Body Example
```json
{
    "email": "admin@mail.com",
    "password": "123456",
    "role": "admin"
}
```
OR
```json
{
    "email": "cust@mail.com",
    "password": "123456"
}
```
#### Response Success Status : `201`

```json
{
    "role": "[admin || cust]"
    "access_token": "[access_token]"
}
```
#### Response Error Status : `400`
```json
{
    "message": "[error message]",
}
```
---
## Login User
- HTTP Method : `POST`
- URL : `/users/login`
- Request Body : `json`
- Request Params : *none*
- Request Headers : *none*
- Response : `string`

#### Request Body Example
```json
{
    "email": "admin@mail.com",
    "password": "123456"
}
```
#### Response Success Status : `200`
```json
{
    "role": "[admin || cust]",
    "access_token": "[access_token]"
}
```
#### Response Error Status : `400`
```json
{
    "message": "Email or Password is incorrect"
}
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]"
}
```
---

## Insert New Category
- HTTP Method : `POST`
- URL : `/categories`
- Request Body : `json`
- Request Params : *none*
- Request Headers : `access_token`
- Response : `json`

#### Request Body Example
```json
{
    "name": "Fashion"
}
```
#### Response Success Status : `201`
```json
{
    "id": 1,
    "name": "Fashion",
    "updatedAt": "2021-06-30T11:09:31.251Z",
    "createdAt": "2021-06-30T11:09:31.251Z"
}
```
#### Response Error Status : `400` OR `500`
```json
{
    "message": "[Error Message]"
}
```
---
## Get All Category List
- HTTP Method : `GET`
- URL : `categories`
- Request Body : *none*
- Request Params : *none*
- Request Headers : `access_token`
- Response : `json`

#### Response Success Status : `200`
```json
[
    {
        "id": 1,
        "name": "Fashion",
        "createdAt": "2021-06-30T11:57:31.060Z",
        "updatedAt": "2021-06-30T11:59:58.911Z",
    },
    {
        "id": 1,
        "name": "Grocery",
        "createdAt": "2021-06-30T11:57:31.060Z",
        "updatedAt": "2021-06-30T11:59:58.911Z",
    }
]
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]",
}
```
---
## Update Category By id
- HTTP Method : `PUT`
- URL : `/categories/:id`
- Request Body : `json`
- Request Params : `id`
- Request Headers : `access_token`
- Response : `json`

#### Response Success Status : `200`
```json
{
    "id": 1,
    "name": "Fashion",
    "updatedAt": "2021-06-30T11:09:31.251Z",
    "createdAt": "2021-06-30T11:09:31.251Z"
}
```
#### Response Error Status : `404`
```json
{
    "message": "Category with id <id> not found"
}
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]"
}
```
---
## Delete Category By id
- HTTP Method : `DELETE`
- URL : `/categories/:id`
- Request Body : *none*
- Request Params : `id`
- Request Headers : `access_token`
- Response : `json`

#### Response Success Status : `200`
```json
{
    "message": "category success to delete"
}
```
#### Response Error Status : `404`
```json
{
    "message": "Category with id <id> not found"
}
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]"
}
```
---


## Insert New Product
- HTTP Method : `POST`
- URL : `/products`
- Request Body : `json`
- Request Params : *none*
- Request Headers : `access_token`
- Response : `json`

#### Request Body Example
```json
{
    "name": "Product Name",
    "image_url": "Image URL",
    "price": 10000,
    "stock": 10,
    "categoryid": 1
}
```
#### Response Success Status : `201`
```json
{
    "id": 1,
    "name": "Product Name",
    "image_url": "Image URL",
    "price": 10000,
    "stock": 10,
    "categoryid": 1,
    "updatedAt": "2021-06-30T11:09:31.251Z",
    "createdAt": "2021-06-30T11:09:31.251Z"
}
```
#### Response Error Status : `400` OR `500`
```json
{
    "message": "[Error Message]"
}
```
---
## Get All Product List
- HTTP Method : `GET`
- URL : `/products`
- Request Body : *none*
- Request Params : *none*
- Request Headers : *none*
- Response : `json`

#### Response Success Status : `200`
```json
[
    {
        "id": 1,
        "name": "Product Name",
        "image_url": "Image URL",
        "price": 10000,
        "stock": 10,
        "categoryid": 1,
        "updatedAt": "2021-06-30T11:09:31.251Z",
        "createdAt": "2021-06-30T11:09:31.251Z",
        "category": {
            "id": 1,
            "name": "Fashion",
            "updatedAt": "2021-06-30T11:09:31.251Z",
            "createdAt": "2021-06-30T11:09:31.251Z",
        }
    }
]
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]",
}
```
---
## Update Product By id
- HTTP Method : `PUT`
- URL : `/products/:id`
- Request Body : `json`
- Request Params : `id`
- Request Headers : `access_token`
- Response : `json`

#### Response Success Status : `200`
```json
{
    "name": "Product Name",
    "image_url": "Image URL",
    "price": 10000,
    "stock": 10,
    "categoryid": 1
}
```
#### Response Error Status : `404`
```json
{
    "message": "Product with id <id> not found"
}
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]"
}
```
---
## Delete Product By id
- HTTP Method : `DELETE`
- URL : `/products/:id`
- Request Body : *none*
- Request Params : `id`
- Request Headers : `access_token`
- Response : `json`

#### Response Success Status : `200`
```json
{
    "message": "product success to delete"
}
```
#### Response Error Status : `404`
```json
{
    "message": "product with id <id> not found"
}
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]"
}
```
---


## Insert New Cart
- HTTP Method : `POST`
- URL : `/carts`
- Request Body : `json`
- Request Params : *none*
- Request Headers : `access_token`
- Response : `json`

#### Request Body Example
```json
{
    "productid": "id product",
    "qty": 1,
    "price": 10000,
    "userid": 10
}
```
#### Response Success Status : `201`
```json
{
    "id": 1,
    "productid": "id products",
    "qty": 1,
    "price": 10000,
    "userid": 10,
    "updatedAt": "2021-06-30T11:09:31.251Z",
    "createdAt": "2021-06-30T11:09:31.251Z"
}
```
#### Response Error Status : `400` OR `500`
```json
{
    "message": "[Error Message]"
}
```
---
## Get All Cart List
- HTTP Method : `GET`
- URL : `/carts`
- Request Body : *none*
- Request Params : *none*
- Request Headers : `access_token`
- Response : `json`

#### Response Success Status : `200`
```json
[
    {
        "id": 1,
        "productid": 1,
        "qty": 1,
        "price": 10000,
        "orderid": null,
        "updatedAt": "2021-06-30T11:09:31.251Z",
        "createdAt": "2021-06-30T11:09:31.251Z",
        "product": {
            "id": 1,
            "name": "Product Name",
            "image_url": "Image URL",
            "price": 10000,
            "stock": 10,
            "categoryid": 1,
            "updatedAt": "2021-06-30T11:09:31.251Z",
            "createdAt": "2021-06-30T11:09:31.251Z",
        }
    }
]
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]",
}
```
---
## Update Cart By id
- HTTP Method : `PUT`
- URL : `/carts/:id`
- Request Body : `json`
- Request Params : `id`
- Request Headers : `access_token`
- Response : `json`

#### Request Body Example
```json
{
    "id": 1,
    "productid": "id product",
    "qty": 1,
    "price": 10000,
    "userid": 10
}

#### Response Success Status : `200`
```json
{
    "id": 1,
    "productid": "id product",
    "qty": 1,
    "price": 10000,
    "userid": 10
}
```
#### Response Error Status : `404`
```json
{
    "message": "Cart with id <id> not found"
}
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]"
}
```
---
## Update Qty Cart By id
- HTTP Method : `PATCH`
- URL : `/carts/:id`
- Request Body : `json`
- Request Params : `id`
- Request Headers : `access_token`
- Response : `json`

#### Request Body Example
```json
{
    "qty": 1
}

#### Response Success Status : `200`
```json
{
    "id": 1,
    "productid": "id product",
    "qty": 1,
    "price": 10000,
    "userid": 10
}
```
#### Response Error Status : `404`
```json
{
    "message": "Cart with id <id> not found"
}
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]"
}
```
---
## Delete Cart By id
- HTTP Method : `DELETE`
- URL : `/carts/:id`
- Request Body : *none*
- Request Params : `id`
- Request Headers : `access_token`
- Response : `json`

#### Response Success Status : `200`
```json
{
    "message": "cart success to delete"
}
```
#### Response Error Status : `404`
```json
{
    "message": "cart with id <id> not found"
}
```
#### Response Error Status : `500`
```json
{
    "message": "[Error Message]"
}
```
---
