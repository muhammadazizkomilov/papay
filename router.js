const express = require("express"); //expressni require qilishimiz kk
const router = express.Router(); // expresni ichidan routerni olib chiqamiz

//pastga qaraydi. harqanday localhost 3000imizga kirib requestimizga biz javob berayik.
router.get("/", function(req, res) {
    res.send("home sahifadasiz");
});
//pq deylik bizda menu bor. router yasab oldik
router.get("/menu", (req, res) => {
    res.send("Menu sahifadasiz");
});

router.get("/community", (req, res) => {
    res.send("Jamiyat sahifadasiz");
});
//xosil qilgan routerimizni filemizni oxirida export qilishimiz kk
module.exports = router; 