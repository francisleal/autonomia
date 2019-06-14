import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ImageBackground, TouchableHighlight } from 'react-native';

import Nav from '../components/Nav';

const backgroundCar = require('../assets/bg-custo-trajeto.jpg')

export default class CustoTrajeto extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground style={styles.backgroundCar} source={backgroundCar}>
                    <View style={styles.container}>

                        <View style={styles.section}>
                            <TextInput style={styles.textInput}
                                placeholder="Distância do Trajeto KM"
                            />
                            <TextInput style={styles.textInput}
                                placeholder="Média Km por Litro"
                            />
                            <TextInput style={styles.textInput}
                                placeholder="Valor do Combustível"
                            />

                            <Text style={styles.resultado}>Resultado</Text>
                        </View>
                        
                    </View>

                    <View style={styles.btnCalcular}>
                        <TouchableHighlight style={styles.botao}>
                            <Text style={styles.btnText}>CALCULAR</Text>
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
    section: {
        flex: 1,
        marginTop: '25%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#fff',
        color: '#fff',
        width: 220,
    },
    resultado: {
        color: '#fff',
        fontSize: 20,
    },
    btnCalcular: {
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