const walletRepository = require('./repository')
exports.createWallet = async (req, res) => {
    console.log(req.body)
    try {
        let payload = {
            name: req.body.name,
            balance: req.body.balance,
        }
        console.log(payload)
        let wallet = await walletRepository.createWallet({
            ...payload
        });
        res.status(200).json({
            status: true,
            data: wallet,
        })
    } catch (err) {
        console.log("==",err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getWalletById = async (req, res) => {
        try {
            let id = req.params.id
            let walletDetails = await walletRepository.walletById(id);
            res.status(200).json({
                status: true,
                data: walletDetails,
            })
        } catch (err) {
            res.status(500).json({
                status: false,
                error: err
            })
        }
    }
exports.getWallet = async (req, res) => {
    try {
        let wallet = await walletRepository.getWallet();
        res.status(200).json({
            status: true,
            data: wallet,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

