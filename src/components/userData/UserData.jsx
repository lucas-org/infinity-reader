import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { signOutUser } from '../../services/autenticationService';

export default function UserData(user){
    useEffect(() => {
        console.log(user)
    }, [])

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Usuario Logado</Text>
            <Button onPress={signOutUser}>SAIR</Button>
        </View>
    )
}