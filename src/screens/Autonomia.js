import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import Nav from '../components/Nav';

const backgroundCar = require('../assets/bugatti.jpg')

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>           
            
                {/* title */}
                <View style={styles.title}>
                    <Text style={styles.titleText}>AUTONOMIA</Text>
                </View>

                {/* conteudo principal */}
                <View style={styles.imagem}>
                    <Image style={styles.backgroundCar} source={backgroundCar}></Image>
                </View>

                <View style={styles.btnRelatorio}>
                    <TouchableHighlight>
                        <Text style={styles.btnText}>RELATÓRIO</Text>
                    </TouchableHighlight>
                </View>

                <Nav></Nav>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
       backgroundColor: 'black',
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    titleText: {
        color: '#fff',
        fontSize: 20,
    },
    imagem: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    backgroundCar: {
        width: 370,
        height: 220,
    },
    btnRelatorio: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        marginBottom: 15,
    }
});