import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import * as Font from 'expo-font';

import styles from './styles';

export default class Header extends Component {

    state = {
        fontLoaded: false
    }

    componentDidMount = async () => {

        await Font.loadAsync({
            'Roboto-Black': require('../../../assets/fonts/Roboto-Black.ttf'),
            'Roboto-Light': require('../../../assets/fonts/Roboto-Light.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.fontLoaded ?
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerTitle}>
                                Busca Marvel
                                <Text style={styles.headerSubtitle}>
                                    Teste Front-end
                                </Text>
                            </Text>
                            <View style={styles.headerBottomBorder}>
                            </View>
                        </View>
                        : null
                }
            </View>
        );
    }
}
