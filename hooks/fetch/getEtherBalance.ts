import * as React from 'react';
import {EthService} from "../../service";

export default function getEtherBalance() {
    const [ethBalance, setEthBalance] = React.useState(null);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function getEthBalance() {
            try {
                const balance = await EthService.getBalance()
                setEthBalance(balance)
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
            }
        }

        getEthBalance();
    }, []);

    return ethBalance;
}
