const dotenv = require("dotenv");
dotenv.config()

const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = process.env.MONGO_URL;
  
  

mongodb.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
(err, client) => {
  if (err) {
    console.log("MongoDB ulanishda XATOLIK yuz berdi");
  } else {
    console.log("MongoDB ulanish muvaffaqiyatli amalga oshirildi");
    module.exports = client;

                    // process.env.PORT || 
    const app = require("./app");
    const server = http.createServer(app);
    let PORT =process.env.PORT || 3003;
    server.listen(PORT, function () {
      console.log(
        `Server muvaffaqiyatli ishlayapti, PORT: ${PORT}, http://localhost:${PORT})`
      );
    });
  }
});