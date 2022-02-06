import * as React from 'react';
import {DataStorage} from "../../service/store";


export default function loadAppState() {
    const [savedState, setSavedState] = React.useState([]);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function getSavedState() {
            try {
                const savedState = await DataStorage.getWallets()
                console.log(savedState)
                setSavedState(savedState)
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.log(e);
            } finally {
            }
        }
        getSavedState();
    }, []);

    return savedState;
}
