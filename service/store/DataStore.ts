import AsyncStorage from "@react-native-async-storage/async-storage";

export class DataStore {

    getWallets() {
        return this.getData('wallets')
    }

    async updateWallets(wallets: any) {
        await this.storeData('wallets', wallets)
    }


    private storeData = async (key: string, value: any) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
        }
    }

    private getData = async (key: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    }

}
