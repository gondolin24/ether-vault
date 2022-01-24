import * as React from 'react';
import {Avatar, Button, Card, Title, Paragraph, TextInput} from 'react-native-paper';
import {List} from 'react-native-paper';
import {StyleSheet} from "react-native";
import * as Clipboard from "expo-clipboard";

enum WalletProp {
    PK = 'PK',
    WA = 'WA',
    MK = 'MK'
}

export default function WalletCart({}) {
    const etherWallet = {
        address: '',
        mnemonic: '',
        privateKey: ''
    }

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
            title={`Wallet ${Math.random().toFixed(3)}`}
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
                description={`${Math.random()} - ETH`}
                right={props => <List.Icon {...props} icon="content-copy"/>}
            />
        </List.Accordion>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
    },
});





