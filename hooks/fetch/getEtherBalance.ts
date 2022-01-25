import * as React from 'react';
import {EthService} from "../../service";

interface EtherBalanceProp {
    address: string
}

export default function getEtherBalance(props: EtherBalanceProp) {
    const [ethBalance, setEthBalance] = React.useState(null);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function getEthBalance() {
            try {
                const balance = await EthService.getBalance(props.address)
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
