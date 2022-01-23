import * as React from 'react';
import {Button, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import getEtherBalance from "../hooks/fetch/getEtherBalance";
import createWallet from "../hooks/fetch/createWallet";

export default function TabOneScreen({navigation}: RootTabScreenProps<'TabOne'>) {
    const etherBalance = getEtherBalance();
    const {etherWallet, createNewWallet} = createWallet()

    return (

        <View style={styles.container}>
            <Text style={styles.title}>{}</Text>

            <Text style={styles.title}>{etherBalance}</Text>

            <Text style={styles.title}>{etherWallet.privateKey}</Text>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="/screens/TabOneScreen.tsx"/>
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
                title="Create"
                color="#efefef"
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
});
