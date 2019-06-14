import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const navIcon = {
    mediaKm: require('../assets/km.png'),
    custoTrajeto: require('../assets/custoTrajeto.png'),
    dividirCusto: require('../assets/dividirCusto.png')
};

export default class NavCiclo extends React.Component {
    render() {
        return (
            <View style={styles.nav}>
                <View style={styles.navViewIcon}>
                    <View style={styles.navViewCicle}>
                        <Image style={styles.navIcon} source={navIcon.mediaKm} />
                    </View>
                    <Text style={styles.navText}>MÉDIA KM LITRO</Text>
                </View>

                <View style={styles.navViewIcon}>
                    <View style={styles.navViewCicle}>
                        <Image style={styles.navIcon} source={navIcon.custoTrajeto} />
                    </View>
                    <Text style={styles.navText}>CUSTO TRAJETO</Text>
                </View>

                <View style={styles.navViewIcon}>
                    <View style={styles.navViewCicle}>
                        <Image style={styles.navIcon} source={navIcon.dividirCusto} />
                    </View>
                    <Text style={styles.navText}>DIVIDIR CUSTO</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nav: {
        height: '25%',
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
    },
    navText: {
        fontSize: 10,
        color: '#ffffff',
    },
    navViewIcon: {
        alignItems: 'center',
    },
    navViewCicle: {
        backgroundColor: '#000000',
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    navIcon: {
        width: 16,
        height: 16,
    }
});