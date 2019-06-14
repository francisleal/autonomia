/**
 * @format
 // AppRegistry.registerComponent(appName, () => Login); 
 */
import React, { Component } from 'react';
import { AppRegistry, StatusBar, View } from 'react-native';
import Autonomia from './src/screens/Autonomia';
import CustoTrajeto from './src/screens/CustoTrajeto';
import { name as appName } from './app.json';

class Index extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <StatusBar backgroundColor = 'black' />
                <CustoTrajeto />
            </View>
        );
    }
}
AppRegistry.registerComponent(appName, () => Index);