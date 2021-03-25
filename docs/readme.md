
# Deca Wallet API

## This Collection contains sample request from the deca-wallet API

It contains the following endpoints
* Signup

**Note** : This API is still in development and hence does not contain all required endpoints for this project.

## Indices

* [Authentication](#authentication)

  * [Signup User endpoint](#1-signup-user-endpoint)
  * [Signup User endpoint (Duplicate user case)](#2-signup-user-endpoint-(duplicate-user-case))
  * [Signup User endpoint (invalid payload case)](#3-signup-user-endpoint-(invalid-payload-case))


--------


## Authentication
## Authentication Routes

It contains the following endpoints
* Signup



### 1. Signup User endpoint


Creates a user and returns a token payload


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3000/api/auth/signup
```



***Body:***

```js        
{
    "name":"Ekene",
    "email":"testuser21@gmail.com",
    "password":"inspired",
    "mainCurrency":"USD"
}
```



***More example Requests/Responses:***


##### I. Example Request: Signup User endpoint



***Body:***

```js        
{
    "name":"Ekene",
    "email":"testuser21@gmail.com",
    "password":"inspired",
    "mainCurrency":"USD"
}
```



##### I. Example Response: Signup User endpoint
```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNThlZmE3YjllYTI3MzEwNDg2YTliYyIsIm5hbWUiOiJFa2VuZSIsIm1haW5DdXJyZW5jeSI6IlVTRCIsImlhdCI6MTYxNjQ0MTI1NSwiZXhwIjoxNjE2NTI3NjU1fQ.AJK6OtU0iGWX0v0FXcOMmq6J5LVPOOkhaE6RYFjBfH4",
    "msg": "Account created succesffully"
}
```


***Status Code:*** 200

<br>



### 2. Signup User endpoint (Duplicate user case)


This returns a status code of 400 error and a duplicate user error message 


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3000/api/auth/signup
```



***Body:***

```js        
{
    "name":"Ekene",
    "email":"testuser21@gmail.com",
    "password":"inspired",
    "mainCurrency":"USD"
}
```



***More example Requests/Responses:***


##### I. Example Request: Signup User endpoint (Duplicate user case)



***Body:***

```js        
{
    "name":"Ekene",
    "email":"testuser21@gmail.com",
    "password":"inspired",
    "mainCurrency":"USD"
}
```



##### I. Example Response: Signup User endpoint (Duplicate user case)
```js
{
    "msg": "This email address is unavailable"
}
```


***Status Code:*** 400

<br>



### 3. Signup User endpoint (invalid payload case)


This returns a status code of 400 if payload is invalid


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3000/api/auth/signup
```



***Body:***

```js        
{
    "email":"testuser1@gmail.com",
    "password":"inspired",
    "mainCurrency":"USD"
}
```



***More example Requests/Responses:***


##### I. Example Request: Signup User endpoint (invalid payload case)



***Body:***

```js        
{
    "email":"testuser1@gmail.com",
    "password":"inspired",
    "mainCurrency":"USD"
}
```



##### I. Example Response: Signup User endpoint (invalid payload case)
```js
{
    "error": "\"name\" is required"
}
```


***Status Code:*** 400

<br>



---
[Back to top](#deca-wallet-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-03-25 10:40:37 by [docgen](https://github.com/thedevsaddam/docgen)
