import * as React from 'react';
import {StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Initial Release</Text>
            <Text>Ability to create a wallet</Text>
            <Text>Ability to delete a wallet</Text>
            <Text>export address and keys</Text>
            <Text>Secure everything runs on your device</Text>

            <Text style={styles.title}>Export Features</Text>
            <Text>Able to export wallet to meta mask using secrets</Text>
            <Text>PLEASE PLEASE save your secrets</Text>
            <Text style={styles.title}>Upcoming features</Text>
            <Text>See wallet transactions</Text>
            <Text>Import Wallets</Text>
            <Text>Transfer ETH to another wallet</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        marginLeft: 10
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
