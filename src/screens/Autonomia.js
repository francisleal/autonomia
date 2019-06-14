import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, TouchableHighlight } from 'react-native';

import Nav from '../components/Nav';

const backgroundCar = require('../assets/bugatti.jpg');

export default class Autonomia extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground style={styles.backgroundCar} source={backgroundCar}>
                    <View style={styles.container}>
                        <Text style={styles.titleText}>AUTONOMIA</Text>
                    </View>
                    
                    <View style={styles.btnRelatorio}>
                        <TouchableHighlight style={styles.botao}>
                            <Text style={styles.btnText}>RELATÓRIO</Text>
                        </TouchableHighlight>
                    </View>

                    <Nav></Nav>

                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({  
    backgroundCar: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    container: {
        height: '65%',
        alignItems: 'center',
    },
    titleText: {
        marginTop: '10%',
        color: '#fff',
        fontSize: 20,
    },   
    btnRelatorio: {
        height: '10%',
        alignItems: 'center',
    },
    botao: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#fff',
        width: 220,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
    }
});