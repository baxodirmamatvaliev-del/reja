const http = require("http");
const mongodb = require("mongodb");
const { connect } = require("http2");

let db;
const connectionString =
  "mongodb+srv://LEO:kpif2Ftqk0AHZ7s9@cluster0.tp9ctte.mongodb.net/ /reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR: ON CONNECTION MongoDB");
    else {
      console.log("MongoDB connecton secceed :)");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          ` the server is running successfully on port ${PORT}, http://localhost:${PORT} `,
        );
      });
    }
  },
);
