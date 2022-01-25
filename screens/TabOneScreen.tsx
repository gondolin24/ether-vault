import * as React from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Button, Modal, TextInput} from 'react-native-paper';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import createWallet from "../hooks/fetch/createWallet";
import WalletCart from "../components/vault/WalletCard";

export default function TabOneScreen({navigation}: RootTabScreenProps<'TabOne'>) {

    const [items, setItems] = useState<any>([])

    const {etherWallet, createNewWallet} = createWallet()
    const deleteWallet = (address: string) => {
        setItems([...items.filter((wallet: any) => address !== wallet.address)])
    }

    const renderItem = (value: any) => {
        const {item} = value
        return (
            <WalletCart address={item.address} mnemonic={item.mnemonic} privateKey={item.privateKey}
                        walletName={item.walletName} deleteWallet={deleteWallet}/>
        );
    }
    const containerStyle = {backgroundColor: 'white', padding: 20};

    const [visible, setVisible] = React.useState(false);
    const [createToggle, setCreateToggle] = React.useState(true)
    const [walletName, setWalletName] = React.useState('');
    const onChangeText = (text: any) => {
        setWalletName(text);
        if (text.length === 0 || text.length > 20) {
            setCreateToggle(true)
        } else {
            setCreateToggle(false)
        }
    }

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{'Wallets'}</Text>

            <FlatList style={styles.one} data={items} renderItem={renderItem}/>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            {/*<EditScreenInfo path="/screens/TabOneScreen.tsx"/>*/}
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <TextInput
                    mode="outlined"
                    label="Wallet Name"
                    placeholder="Wallet Name"
                    onChangeText={onChangeText}
                    right={<TextInput.Affix text="/20"/>}
                />
                <Button
                    disabled={createToggle}

                    mode='outlined'
                    onPress={() => {
                        items.push({...etherWallet, walletName})
                        setItems([...items])
                        hideModal()
                        createNewWallet()
                    }}
                >
                    CREATE
                </Button>
            </Modal>
            <Button
                mode='outlined'
                onPress={() => {
                    showModal()
                }}
                style={styles.modelButton}
            >
                Create Wallet
            </Button>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

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
        marginTop: '10px',
        fontSize: 20,
        marginBottom: '10px'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    one: {
        width: '80%',
    },
    modelButton: {
        marginTop: '10px'
    },
});
