const Wallet = require("./model");
exports.getWallet = async () => {
    const wallet = await Wallet.find();
    return wallet;
};
exports.walletById = async id => {
    const wallet = await Wallet.findById(id);
    return wallet;
}
exports.createWallet = async payload => {
    const newWallet = await Wallet.create(payload);
    return newWallet
}