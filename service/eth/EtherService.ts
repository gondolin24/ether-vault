const ethers = require('ethers')

export class EtherService {


    async createWalletAndKey() {
        const wallet = await ethers.Wallet.createRandom()
        // return {
        //     address: await wallet.address,
        //     mnemonic: wallet.mnemonic.phrase,
        //     privateKey: await wallet.privateKey
        // }
        return {
            address:'121212',
            mnemonic: '2323',
            privateKey: Math.random().toString()
        }
    }

    async checkWallet() {
        let w = new ethers.Wallet('')
        const gg = 0
    }


    async getTransactions() {
        let provider = new ethers.providers.EtherscanProvider("ropsten");
        return await provider.getHistory('0xaC3D2f9b4B63cb34E257BBf10EABB6D7BCCce08F')
    }

    /**
     *
     * @param {String} address
     */
    async getBalance(address) {
        let provider = new ethers.providers.EtherscanProvider("ropsten");
        const balance = await provider.getBalance(address);
        return ethers.utils.formatEther(balance)
    }

}
