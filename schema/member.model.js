const mongoose = require("mongoose"); 
const memberSchema = new mongoose.Schema({
    mb_nick: {
        type: String,
        required:true,
        index: {unique: true, sparse: true} //mbnick boshqa odamlar ishlata olmasin,dbda ishlatilgan bolsa
    },
    mb_phone: {
        type: String,
        required: true
    },
    mb_password: {
        type: String,
        required: true,
        select: false //pasword maxfiy bolgani un db qaytarmasiligi un 
    },
    mb_type: {
        type: String,
        required: false,
        default: "USER",
        enum: {
            values: member_type_enums, //skimani yasadik
            message: "{VALLUE} is not among permited values"
          }
        },
        mb_status: {
            type: String,
            required: false,
            default: "ACTIVE",
            enum: {
                values: member_status_enums, //skimani yasadik
                message: "{VALLUE} is not among permited values"
            }
        },
        mb_full_name: {
            type: String,
            required:false,
        },
        mb_address: {
            type: String,
            required: false
        },
        mb_image: {
            type: String,
            required: false
        },
        mb_point: {
            type: Number,
            required: false,
            default: 0
          }
        });
        
        module.exports = mongoose.model("Member", memberSchema); //mongoose require qilganiizga ikkita nara talab qilinadi kelajakdagi dbaga tablisani members qib yozsa ochib beradi. aynan qaytgan narssa model 