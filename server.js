console.log(" web serverni boshlash ");
const express = require("express");
const app = express();
const http = require("http");

// 1: kirish code
app.use(express.static("public")); // "tashqaridan kelayotgan saproslar uchun hizmat qiladi :"
app.use(express.json()); // "krib kelayotgan datani OJBKECT ga ogirib beradi:"
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3:  views code               BSS: beackend sayt rendring => ejs orqari Frond end ni yasemiz  beackend da. //

app.set("views", "views");
app.set(" view engine ", "ejs");

// 4: routing code
app.get("/hello", function (req, res) {
  res.end(` <h1>  HELLO WORLD </h1> `);
});

app.get("/gift", function (req, res) {
  res.end(` <h1> siz sovgalar bolimidasiz </h1> `);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(` the server is running successfully on port ${PORT} `);
});
