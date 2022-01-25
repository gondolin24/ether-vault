import * as React from 'react';
import {StyleSheet} from 'react-native';

import {View} from '../components/Themed';
import {Title} from "react-native-paper";

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <div>
                <Title>Initial Release</Title>
                <ul>
                    <li>Ability to create a wallet</li>
                    <li>Ability to delete a wallet</li>
                    <li>export address and keys</li>
                    <li>Secure everything runs on your device</li>
                </ul>
            </div>
            <div>
                <Title>Upcoming features</Title>
                <ul>
                    <li>See wallet transactions</li>
                    <li>Transfer ETH to another wallet</li>

                </ul>
            </div>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {},
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
