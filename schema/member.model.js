const mongoose = require("mongoose");
const { member_type_enums, member_status_enums, ordernary_enums } = require("../lib/config");

const memberSchema = new mongoose.Schema(
  {
    mb_nick: {
      type: String,
      reqired: true,
      index: { unique: true, sparse: true }, //mbnick boshqa odamlar ishlata olmasin,dbda ishlatilgan bolsa
    },
    mb_phone: {
      type: String,
      required: true,//TALAB QILISH BOLISHI SHART
    },
    mb_password: {
      type: String,
      required: true,
      select: false,  //pasword maxfiy bolgani un db qaytarmasiligi un 
    },
    mb_type: {
      mb_type: {
        type: String,
        required: false,
        default: "USER",
        enum: ['USER', 'ADMIN', 'PEDAL', 'RESTAURANT'] // Qo'shilgan enum ro'yxati

      
      // type: String,
      // required: false,
      // default: "USER", //BAYDEFULL YOZMASA HAM USER BOLADO
      // enum: {
      //   vales: member_type_enums, //skimani yasadik
      //   message: "{VALUE} is not among permitted values",
      },
    },
    mb_status: {
      mb_status: {
        type: String,
        required: false,
        default: 'AKTIVE',
        enum: ['ONEPAUSE', 'AKTIVE', 'DELETED']
      
      // type: String,
      // required: false,
      // default: "ACTIVE",
      // enum: {
      //   vales: member_status_enums,
      //   message: "{VALUE} is not among permitted values",
      },
    },

    mb_address: {
      type: String,
      required: false
    },
    mb_description: {
      type: String,
      required: false,
    },
    mb_image: {
      type: String,
      required: false,
    },
    mb_point: {
      type: Number,
      required: false,
      default: 0,
    },
    mb_top: {
      type: String,
      required: false,
      default: "N",
      enum: {
        values: ordernary_enums,
        message: "{VALUE} is not among permitted values",
      },
    },
    mb_views: {
      type: Number,
      required: false,
      default: 0,
    },
    mb_likes: {
      type: Number,
      required: false,
      default: 0,
    },
    mb_follow_cnt: {
      type: Number,
      required: false,
      default: 0,
    },
    mb_subscriber_cnt: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true } //createdAt updatedAt
);

module.exports = mongoose.model("Member", memberSchema);