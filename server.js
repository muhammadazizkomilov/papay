const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const mongoose = require("mongoose");
const connectionString = process.env.MONGO_URL;
 mongoose.connect(
  connectionString, {
    
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
(err, goose) => {
  if (err) console.log("MongoDB ulanishda XATOLIK yuz berdi");
  else {
    console.log("MongoDB ulanish muvaffaqiyatli amalga oshirildi");   // module.exports = client; mongos sabab kk emas!
    console.log(goose); //moongose clieantni beradi
    const app = require("./app"); // process.env.PORT || 
    const server = http.createServer(app);
    let PORT =process.env.PORT || 3003;
    server.listen(PORT, function () {
      console.log(
        `Server muvaffaqiyatli ishlayapti, PORT: ${PORT}, http://localhost:${PORT})`
      );
    });
  }
})