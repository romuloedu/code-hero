import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

import styles from './styles';

export default class Search extends Component {
    render() {
        return (
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>
                    Nome do Personagem
                </Text>
                <TextInput style={styles.searchInput} />
            </View>
        )
    }
}
