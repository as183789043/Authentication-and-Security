## Use package to cache session and :   [passport](https://www.npmjs.com/package/passport)
![passport-local](https://github.com/as183789043/Authentication-and-Security/assets/56618553/92c1acc5-44ff-4567-902c-69a54b75cad0)

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

### cookie
![cookie](https://github.com/as183789043/Authentication-and-Security/assets/56618553/39fb4e73-94b5-4cfd-8014-9abf01fe7893)



### cookie check pass
![cookie_check_pass](https://github.com/as183789043/Authentication-and-Security/assets/56618553/15004f87-35a2-4a5b-a2f0-bf6fe3a4d182)

### cookie check error (redriect to login)
![cookie_check_error](https://github.com/as183789043/Authentication-and-Security/assets/56618553/b352ec08-b745-454c-8929-13f20bf6953a)


