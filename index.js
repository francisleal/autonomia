/**
 * @format
 // AppRegistry.registerComponent(appName, () => Login); 
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Autonomia from './src/screens/Autonomia';
import CustoTrajeto from './src/screens/CustoTrajeto';
import {name as appName} from './app.json';

class Index extends Component {
    render() {
        return (<Autonomia />);
    }
}
AppRegistry.registerComponent(appName, () => Index);