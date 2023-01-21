const walletRoutes = require("./Wallet/routes");
const transectRoutes = require('./Transections/routes')
module.exports = app => {
    app.use("/wallet", walletRoutes);
    app.use("/transect", transectRoutes);
}