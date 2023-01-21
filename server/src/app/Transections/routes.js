const router = require("express").Router();
const transectionController = require("./controller");
router.post("/:walletId", transectionController.debitCreditAmount);
 router.get("/:walletId", transectionController.getWalletTransection);
module.exports = router;