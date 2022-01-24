import * as React from 'react';
import {EthService} from "../../service";


export default function createWallet() {
    const [etherWallet, setEtherWallet] = React.useState({
        address:'',
        mnemonic: '',
        privateKey: ''
    });

    const [create, setCreate] = React.useState(false)

    const createNewWallet = () => {
        setCreate(!create)
    }

    React.useEffect(() => {
        EthService.createWalletAndKey().then((obj) => {
                setEtherWallet(obj)
            }
        )
    }, [create])


    return {
        etherWallet, createNewWallet
    };
}
