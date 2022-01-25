import * as React from 'react';
import {Button, FlatList, ScrollView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import getEtherBalance from "../hooks/fetch/getEtherBalance";
import createWallet from "../hooks/fetch/createWallet";
import * as Clipboard from 'expo-clipboard';
import WalletCart from "../components/vault/WalletCard";

export default function TabOneScreen({navigation}: RootTabScreenProps<'TabOne'>) {

    const {etherWallet, createNewWallet} = createWallet()

    const items = Array(10).map(()=>{
        return Math.random().toString()
    })

    const copyToClipboard = () => {
        Clipboard.setString('hello world');
    };


    const renderItem = ({item}) => (
        <WalletCart/>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{'Wallets'}</Text>

            <FlatList style={styles.one} data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} renderItem={renderItem}/>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            {/*<EditScreenInfo path="/screens/TabOneScreen.tsx"/>*/}
            <Button
                onPress={() => {
                    createNewWallet()
                }}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />

            <Button
                onPress={() => {
                }}
                title="Create New Wallet"
                color="#efefef"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={copyToClipboard}
                title="Copy to Clipboard"
                color="red"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={copyToClipboard}
                title="Copy to Clipboard"
                color="red"
                accessibilityLabel="Learn more about this purple button"
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    one: {
        width: '80%',
    },
});
