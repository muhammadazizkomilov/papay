const MemberModel = require("../schema/member.model"); //schema modulni chaqirvolyapmiz
const  Definer = require("../lib/mistake");

//membermodel aslida mongodb class
class Member {
    constructor() {
        this.memberModel = MemberModel; //shartli ravishda kichiklashtirib oldik
    }

    async signupData(input) {
      try {
        const new_member = new this.memberModel(input); //new memberda class sifatida foydalanib uni ichiga datani berib

        try{
         const result = await new_member.save(); //ojectni iciga save datadan foydalanib member xosil qilamiz
        
        } catch(mongo_err) {
          console.log(mongo_err);
          throw new Error (Definer.auth_errl);
        }

         console.log(result);

        result.mb_password = "";
        return result;
      } catch(err) {
        throw err;
      }
    }

};
 module.exports = Member;