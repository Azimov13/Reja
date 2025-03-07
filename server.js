const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://BOB98:tMV7j5ZloJ2bQlyJ@cluster0.5fwmz.mongodb.net/Reja?retryWrites=true&w=majority";
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
      let PORT = 6012;
      server.listen(PORT, function () {
        console.log(
          ` The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
