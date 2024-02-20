## Include other branch and add update secret function
![1708448498985](https://github.com/as183789043/Authentication-and-Security/assets/56618553/8a0a0e83-e86f-46c9-8cd7-354f8bbed808)

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
  );
  ALTER TABLE users ADD COLUMN secret TEXT;
  ```
### Run Web page (terminal)
```bash
node index.js 
```
