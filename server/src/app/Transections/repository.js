const Transection = require("./model");
const Wallet = require("../Wallet/model");
exports.wallet = async (walletId) => {
    const walletDetails = await Transection.find({walletId:walletId}).populate("walletId")
    return walletDetails;
};
exports.debitCreditAmount = async payload => {
    const newTransection = await Transection.create(payload);
    return newTransection
}
exports.updateWalletAmount = async payload => {
    let amount = payload.type == "credit" ? payload.amount : -payload.amount
    const newWalletUpdate = await Wallet.findOneAndUpdate({ "_id" : payload.walletId },
    { $inc: { "balance" :amount } });
    return newWalletUpdate
}