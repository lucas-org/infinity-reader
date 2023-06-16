import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import { Layout, Text, Input, Button, Spinner, Icon } from '@ui-kitten/components';
import { signInUser, currentUser, signOutUser } from '../../services/autenticationService';

export default function FormLogin() {

    const [loading, setLoading] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    useEffect(() => {
        console.log(currentUser()?.email)
        signOutUser();
    }, [])

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = () => (
        <TouchableWithoutFeedback onPress={() => toggleSecureEntry}>
            {/* <Icon name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'} /> */}
            <Text category='s1' appearance='hint'>Icone nao funciona</Text>
        </TouchableWithoutFeedback>
    );

    return (
            <View style={styles.container}>
                <Formik
                    initialValues={{ email: 'test@gmail.com', senha: '123456' }}
                    onSubmit={(values) => {
                        setLoading((loading) => !loading);
                        console.log("values: ", values)
                        signInUser(values);
                        setLoading((loading) => !loading);
                    }}
                    
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <Layout level='1'>
                            <Input
                                placeholder='Email'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                style={styles.input}
                                accessoryRight={evaProps => <Text {...evaProps} category='s1' appearance='hint'>@</Text>}
                            />
                            <Input
                                placeholder='Senha'
                                onChangeText={handleChange('senha')}
                                onBlur={handleBlur('senha')}
                                value={values.senha}
                                style={styles.input}
                                accessoryRight={renderIcon}
                                secureTextEntry={secureTextEntry}
                            />
                            <Button style={styles.esqueceuSenha} appearance='ghost' status='basic'>
                                {evaProps => <Text category='s1' appearance='hint'>Esqueceu a senha?</Text>}
                            </Button>
                        <Button onPress={() => handleSubmit} accessoryLeft={loading ? () => <Spinner size='small' status='success' /> : null} style={styles.button}>
                                <Text>Entrar</Text>
                            </Button>
                        </Layout>
                    )}
                </Formik>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 350,
        marginBottom: 20
    },
    button: {
        width: 350,
        marginBottom: 20,
        textAlign: 'right'
    },
    esqueceuSenha: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    }
});