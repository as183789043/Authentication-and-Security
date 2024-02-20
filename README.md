# Authentication-and-Security
Use Node.js and Postgres DB to demo web page how to create security db which protect user data

## Checkout branch to get other level security

| Branch      | DB Security | Cookies and Session | Store Secert Config(.ENV File) | Oauth |
| ----------- | ----------- |----------- |----------- |----------- |
| main        | Text is not encrypted | NO | NO | NO|
| salt   | Salt Pasword  | NO | NO | NO|
| session   | Salt Pasword  | YES | NO | NO|
| dotenv   | Salt Pasword  | YES | YES | NO|

--- 

## Quick Start 
  ### prepare 
   - Node.js
   - Postrgres DB
  
  ### Clone File (terminal)
  ~~~bash
  git clone https://github.com/as183789043/Authentication-and-Security.git
  cd Authentication-and-Security
  npm i
  ~~~
  
  ### Create Databases Table Schema (sql query tool)
  ```sql
  CREATE DATABASE secrets ;
  CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100)
  )
  ```
### Run Web page (terminal)
```bash
node index.js 
```

## Some Image  About Page 
### Landing-Page
![landpage](https://github.com/as183789043/Authentication-and-Security/assets/56618553/83af4058-abf5-4dde-8f36-546c07810b86)

### Register
![register](https://github.com/as183789043/Authentication-and-Security/assets/56618553/146930b6-4d82-47ef-b6d8-1bed0ed1a255)

### Regster if email exist
![exists](https://github.com/as183789043/Authentication-and-Security/assets/56618553/db2f9a19-ca8d-4b94-bd07-d69a1395273e)


### Login 
![login success](https://github.com/as183789043/Authentication-and-Security/assets/56618553/8abaf12b-6118-4a82-84e6-cb251f05ecdd)

### Login Fail 
![1708244554967](https://github.com/as183789043/Authentication-and-Security/assets/56618553/b6c933ce-07a6-4f96-8b15-f2fc5fba1611)

### Database (No any encrypt)
![1708244597855](https://github.com/as183789043/Authentication-and-Security/assets/56618553/69d22b5d-b515-441a-bb9b-7d60444921e8)



