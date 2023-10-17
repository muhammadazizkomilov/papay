// const Meber = require("../models/Member");

// let memberController = module.exports; //membercga 1ta object yasadik,hamda objecti tenglashtirdik modulesga

// memberController.signup = async (req, res) => {
//     try {                                //pq cotroller prosesni nomi
//         console.log(`POST:cont/signup`); //reqni turini qoyamiz
//         const data = req.body; //reqni body qismidan malumot olamiz
//         const member = new member();
//         const new_member = await member.signupData(data);

//         res.send("done");   //ochilib qolmasligi un 
//     }   catch (err) {
//         console.log(`ERROR, cont/signup, ${err.message}`);

//     }
    
// };
const Member = require("../models/Member"); // Member nomli klassni chaqirvolyapmiz

let memberController = module.exports; // memberController nomli obyektni yaratamiz va uni modulga eksportlaymiz

memberController.signup = async (req, res) => {
    try {
        console.log(`POST:cont/signup`);
        const data = req.body; // `input` o'zgaruvchisini `req.body` dan olish
        const member = new Member(); // Member klassini ishlatamiz
        const new_member = await member.signupData(data);

        res.send("done");
    } catch (err) {
        console.log(`ERROR, cont/signup, ${err.message}`);
    }
};



// //     console.log("POST cont.signup"); //har bitta contrullaer reques kelganda bizga korsatib tursin
// //     res.send("signup sahifadasiz"); 
// };

memberController.login = (req, res) => {
    console.log("POST cont.signup"); //har bitta contrullaer reques kelganda bizga korsatib tursin
    res.send("login sahifadasiz"); 
};

memberController.logout = (req, res) => {
    console.log("GET cont.logout"); //har bitta contrullaer reques kelganda bizga korsatib tursin
    res.send("logout sahifadasiz"); 
    
};