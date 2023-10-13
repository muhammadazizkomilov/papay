let memberController = module.exports; //membercga 1ta object yasadik,hamda objecti tenglashtirdik modulesga

memberController.home = (req, res) => {
    console.log("GET cont.home"); //har bitta contrullaer reques kelganda bizga korsatib tursin
    res.send("home sahifadasiz"); 
};

memberController.signup = (req, res) => {
    console.log("POST cont.signup"); //har bitta contrullaer reques kelganda bizga korsatib tursin
    res.send("signup sahifadasiz"); 
};

memberController.login = (req, res) => {
    console.log("POST cont.login"); //har bitta contrullaer reques kelganda bizga korsatib tursin
    res.send("login sahifadasiz"); 
};

memberController.logout = (req, res) => {
    console.log("GET cont.logout"); //har bitta contrullaer reques kelganda bizga korsatib tursin
    res.send("logout sahifadasiz"); 
    
};