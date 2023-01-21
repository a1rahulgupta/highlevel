const transectionRepository = require('./repository')

exports.debitCreditAmount = async (req, res) => {
    console.log(req.body)
    try {
        let payload = {
            amount: req.body.amount,
            description: req.body.description,
            type: req.body.type,
            walletId : req.params.walletId,
            transectionId: Date.now()
        }
        console.log(payload)
        let transection = await transectionRepository.debitCreditAmount({
            ...payload
        });
        let updateWallet = await transectionRepository.updateWalletAmount({
            walletId : req.params.walletId,
            type: req.body.type,
            amount: req.body.amount
        })
        res.status(200).json({
            status: true,
            data: transection,
        })
    } catch (err) {
        console.log("==",err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}







exports.getWalletTransection = async (req, res) => {
    try {
        let wallet = await transectionRepository.wallet(req.params.walletId)
        if (!wallet) {
            return res.status(400).json({
                type: "Invalid",
                msg: "Wallet not Found",
            })
        }
        res.status(200).json({
            status: true,
            data: wallet
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            msg: "Something went wrong",
            err: err
        })
    }
}