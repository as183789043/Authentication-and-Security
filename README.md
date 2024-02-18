
## Use package to encrypt user password : [bcrypt](https://www.npmjs.com/package/bcrypt)
![bcrypt](https://github.com/as183789043/Authentication-and-Security/assets/56618553/fcd6a4d6-b4d4-4dd7-abe7-6e89979d97ea)

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
### Protect User password
![salt_db](https://github.com/as183789043/Authentication-and-Security/assets/56618553/72c7fc90-b1dd-4d5f-997a-fe66fd38d340)
