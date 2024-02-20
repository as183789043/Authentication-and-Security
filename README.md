## Use package to cache session and :   [passport-google-oauth2](https://www.npmjs.com/package/passport-google-oauth2)

![passport-google-oauth2](https://github.com/as183789043/Authentication-and-Security/assets/56618553/ff3ccfc7-a129-4272-8b10-b02aaf36602d)

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

### Setting Oauth Client ID and Client Secret  [Google_Cloud](https://console.cloud.google.com/)
![GCP](https://github.com/as183789043/Authentication-and-Security/assets/56618553/471367f4-0409-41ba-b749-45b049794bdd)

### Webpage button to OAuth 
![1708443846029](https://github.com/as183789043/Authentication-and-Security/assets/56618553/8d13e4ef-00ff-4e52-9f87-1205ea37d7e4)

## Google OAuth pass redrict to local webpage
![1708443884144](https://github.com/as183789043/Authentication-and-Security/assets/56618553/9890111b-e3a6-4886-be82-e0924570b20a)
