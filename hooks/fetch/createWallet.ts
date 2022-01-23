import * as React from 'react';
import {EthService} from "../../service";


export default function createWallet() {
    const [etherWallet, setEtherWallet] = React.useState({
        privateKey: ''
    });

    const [hi, setHi] = React.useState(false)

    const createNewWallet = () => {
        setHi(!hi)
    }

    React.useEffect(() => {
        EthService.createWalletAndKey().then((obj) => {
                setEtherWallet(obj)
            }
        )
    }, [hi])


    return {
        etherWallet, createNewWallet
    };
}
