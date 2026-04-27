console.log(" web serverni boshlash: ");
const express = require("express");
const app = express();
const http = require("http");

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: kirish code
app.use(express.static("public")); // "tashqaridan kelayotgan saproslar va foydlanuvchilar uchun hizmat qiladi :"
app.use(express.json()); // "krib kelayotgan datani OJBKECT ga ogirib beradi:"
app.use(express.urlencoded({ extended: true })); // bu kod bn HTML TRADITIONAL formda yozilgan kodlani qabul qvoladi

// 2: Session code

// 3:  views code               BSS: beackend sayt rendring => ejs orqari Frond end ni yasemiz  beackend da. //

app.set("views", "views");
app.set("view engine", "ejs");

// 4: routing code
// app.get("/hello", function (req, res) {
//   res.end(` <h1>  HELLO WORLD </h1> `);
// });

// app.get("/gift", function (req, res) {
//   res.end(` <h1> siz sovgalar bolimidasiz </h1> `);
// });

app.post("/create-item", (req, res) => {
  // POST: o'zi bilan malumotli olib keladi datapase ga osha maumotni yozadi!
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  // get: ni malumot o'qish uchun ishlatamiz
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    ` the server is running successfully on port ${PORT}, http://localhost:${PORT} `,
  );
});
