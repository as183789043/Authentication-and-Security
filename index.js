import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'secrets',
  password: 'systex',
  port: 5432,
  })
  
db.connect()

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  try{
  const username=req.body.username
  const password=req.body.password
  if ((await db.query('SELECT * FROM users WHERE email=$1',[username])).rows.length >0 ){
    res.send("Email already exists , Try logging in  ")

  }else{
  const register = await db.query("INSERT INTO users (email,password) values($1,$2)",[username,password])
  res.render("secrets.ejs")}
  }catch(err){
    console.log(err)
  }
});

app.post("/login", async (req, res) => {
  const username=req.body.username
  const password=req.body.password
  try{
      const query = await db.query('SELECT * FROM users WHERE email=$1',[username])

      if(query.rows[0].password == password){
        res.render('secrets.ejs')
      }else{
        res.send('Email or Password error, Try again')
      }
    }
  catch(err){
    console.log(err)
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
