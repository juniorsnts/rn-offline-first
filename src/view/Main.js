import React from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

import { Creators } from '../store/actions/GitActions';

import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
    const dispatch = useDispatch();
    const repository = useSelector(({ GitReducer }) => GitReducer.Repository_all);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ textAlign: 'center' }}>Antes de cliar no botao, desligue a internet, clique no botao e depois ligue novamente a internet</Text>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(Creators.getRepository('facebook/react'))}>
                <Text style={styles.textButton}>Adicionar Repositorio</Text>
            </TouchableOpacity>
            <View style={styles.card}>
                <Text style={styles.textRepo}>{repository ? repository.full_name : null}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 20,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#000'
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF'
    },
    card: {
        borderWidth: 1,
        borderColor: '#000',
        width: 400,
        height: 80,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textRepo: {
        color: '#000',
        fontWeight: "bold",
        fontSize: 16
    }
})

export default Main;