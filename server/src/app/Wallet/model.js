const mongoose = require("mongoose");
const walletSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please include the  name"],
  },
  balance: {
    type: Number,
    required: [true, "Please include the  balance"],
  },
  date:{type : Date, default: new Date()}
});
const Wallet = mongoose.model("Wallet", walletSchema);
module.exports = Wallet;