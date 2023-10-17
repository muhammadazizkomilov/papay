const Member = require("../models/Member");

let memberController = module.exports;

// memberController.home = (req, res) => {
//   console.log("GET cont.home");
//   res.send("home sahifadasiz");
// };

// memberController.signup = (req, res) => {
//   console.log("POST cont.signup");
//   res.send("signup sahifadasiz");
// };

memberController.signup = async (req, res) => {
try{
console.log("POST:cont/signup");
const data = req.body, //requestni badiy qismidan malumot olamiz.

member = new Member(),

 new_member = await member.signupData(data);
console.log("i am here1991");
res.json({state: "succeed", data:new_member});
//res.send("done");
} catch(err) {
console.log(`ERROR, cont/signup, ${err.message}`);
res.json({state: 'fail',message: err.message});
}
};


memberController.login = async(req, res) => {
  try{
    console.log("POST:cont/login");
    const data = req.body, //requestni badiy qismidan malumot olamiz.
    //console.log(body:::,req.body);
    member = new Member(),
    result= await member.loginData(data);
    console.log(1991);
    res.json({state: 'succeed', data:result});
    //res.send("done");
    } catch(err) {
    console.log(`ERROR, cont/login, ${err.message}`);
    res.json({state: 'fail',message: err.message});
    }
};
console.log("Muhammadaziz");
memberController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
};