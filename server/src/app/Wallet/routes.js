const router = require("express").Router();
const walletController = require("./controller");
router.post("/setup", walletController.createWallet);
router.get("/getWallet", walletController.getWallet);
 router.get("/:id", walletController.getWalletById);
module.exports = router;