const express = require("express"); //expressni require qilishimiz kk
const router = express.Router(); // expresni ichidan routerni olib chiqamiz
const memberController = require("./contellers/memerbController");
// memberga dahildor
//pastga qaraydi. harqanday localhost 3000imizga kirib requestimizga biz javob berayik.

router.get("/", memberController.home);  
router.post("/signup", memberController.signup); //signup routeri member controllerni ichidagi sinupga bosin
router.post("/login", memberController.login);  //login routeri member controllerni ichidagi logingaga bosin
router.get("/logout", memberController.logout); ///logout routeri member controllerni ichidagi logautga bosin



// boshqa routerlar
//pq deylik bizda menu bor. router yasab oldik
router.get("/menu", (req, res) => {
    res.send("Menu sahifadasiz");
});

router.get("/community", (req, res) => {
    res.send("Jamiyat sahifadasiz");
});
//xosil qilgan routerimizni filemizni oxirida export qilishimiz kk
module.exports = router; 