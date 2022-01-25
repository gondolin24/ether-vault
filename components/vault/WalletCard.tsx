import * as React from 'react';
import {List} from 'react-native-paper';
import {StyleSheet} from "react-native";
import * as Clipboard from "expo-clipboard";
import getEtherBalance from "../../hooks/fetch/getEtherBalance";

enum WalletProp {
    PK = 'PK',
    WA = 'WA',
    MK = 'MK'
}

interface WalletCart {
    address: string,
    mnemonic: string,
    privateKey: string,
    walletName: string
}


function wordToSecret(word = '') {
    return word.toString().split('').map((char) => '*').join('')
}

export default function WalletCart(props: WalletCart) {
    // get data from provider

    const etherBalance = getEtherBalance({
        address: props.address
    });

    const copyToClipboard = (walletProperty: WalletProp) => {
        switch (walletProperty) {
            case 'PK': {
                Clipboard.setString(props.privateKey);
                break
            }
            case 'WA': {
                Clipboard.setString(props.address);
                break
            }
            case 'MK': {

                Clipboard.setString(props.mnemonic);
                break
            }
            default: {
                Clipboard.setString(props.address);
            }
        }

    };

    return (
        <List.Accordion
            style={styles.listItem}
            title={props.walletName}
            left={props => <List.Icon {...props} icon="bank"/>}>
            <List.Item
                title="Balance"
                description={`${etherBalance}`}
                right={props => <List.Icon {...props} icon="ethereum"/>}
            />
            <List.Item
                title="Address"
                description={`${props.address}`}
                onPress={() => {
                    copyToClipboard(WalletProp.WA)
                }}
                right={props => <List.Icon {...props} icon="content-copy"/>}
            />

            <List.Item
                title="Private Key"
                description={`${wordToSecret(props.privateKey)}`}
                onPress={() => {
                    copyToClipboard(WalletProp.PK)
                }}
                right={props => <List.Icon {...props} icon="content-copy"/>}
            />
            <List.Item
                title="Secret Recovery Phrase"
                onPress={() => {
                    copyToClipboard(WalletProp.MK)
                }}
                description={`${props.mnemonic.split(' ')
                    .map((word)=>wordToSecret(word)).join(' ')}`}
                right={props => <List.Icon {...props} icon="content-copy"/>}
            />
            <List.Item
                title="Delete Wallet"
                onPress={() => {
                }}
                right={props => <List.Icon {...props} icon="delete"/>}
            />
        </List.Accordion>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
    },
});





