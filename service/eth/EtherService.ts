import 'react-native-get-random-values'
import "@ethersproject/shims"
import {ethers } from "ethers"

export class EtherService {


    async createWalletAndKey() {
        const wallet = await ethers.Wallet.createRandom()
        return {
            address: await wallet.address,
            mnemonic: wallet.mnemonic.phrase,
            privateKey: await wallet.privateKey
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
    async getBalance(address: string) {
        let provider = new ethers.providers.EtherscanProvider("ropsten");
        const balance = await provider.getBalance(address);
        return ethers.utils.formatEther(balance)
    }

}
