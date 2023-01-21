

const mongoose = require("mongoose");
const transectionSchema = mongoose.Schema({
    amount: {
    type: Number,
    required: [true, "Please include the  amount"],
  },
  description: {
    type: String,
    required: [true, "Please include the  description"],
  },
  
  type: {
    type: String,
    required: [true, "Please include the  type"],
  },

  walletId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallet",
},
transectionId: {
    type: String,
    required: [true, "Please include the  transectionId"],
},

  date:{type : Date, default: new Date()}
});
const Transection = mongoose.model("transection", transectionSchema);
module.exports = Transection;