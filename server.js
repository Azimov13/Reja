const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://BOB98:4624923e@bob.we5u2.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("ERROR: on connection Mongodb");
    else {
      console.log("Mongodb connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          ` The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
