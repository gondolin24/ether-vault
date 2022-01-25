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

export default function WalletCart({}) {
    // get data from provider

    const etherWallet = {
        address: '',
        mnemonic: '',
        privateKey: ''
    }
    const etherBalance = getEtherBalance({
        address: '0xaC3D2f9b4B63cb34E257BBf10EABB6D7BCCce08F'
    });

    const copyToClipboard = (walletProperty: WalletProp) => {
        switch (walletProperty) {
            case 'PK': {
                Clipboard.setString(etherWallet.privateKey);
                break
            }
            case 'WA': {
                Clipboard.setString(etherWallet.address);
                break
            }
            case 'MK': {
                Clipboard.setString(etherWallet.mnemonic);
                break
            }
            default: {
                Clipboard.setString(etherWallet.address);
            }
        }

        Clipboard.setString(etherWallet.privateKey);
    };

    return (
        <List.Accordion
            style={styles.listItem}
            title={`Wallet ${etherBalance}`}
            left={props => <List.Icon {...props} icon="bank"/>}>
            <List.Item
                title="Balance"
                description={`${Math.random()} - ETH`}
                right={props => <List.Icon {...props} icon="ethereum"/>}
            />
            <List.Item
                title="Address"
                description={`${Math.random()}${Math.random()}`}
                onPress={() => {
                    copyToClipboard(WalletProp.WA)
                }}
                right={props => <List.Icon {...props} icon="content-copy"/>}
            />

            <List.Item
                title="Private Key"
                description={`${Math.random()} - ETH`}
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
                description={`***** *** **** ****`}
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





