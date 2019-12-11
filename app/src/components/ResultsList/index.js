import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import styles from './styles';

export default class ResultsList extends Component {

    render() {

        // Converte o objeto em um array.
        const personsArray = Object.keys(this.props)
            .map(i => this.props[i]);

        return (
            <View style={styles.resultsContainer}>
                <View style={styles.resultHeaderContainer}>
                    <Text style={styles.resultHeaderThumbnail}></Text>
                    <Text style={styles.resultHeaderName}>Nome</Text>
                </View>
                {
                    personsArray.map(person => (
                        <View style={styles.resultCard} key={person.id} >
                            <Image source={{
                                uri: person.thumbnail.path
                                    + '.' + person.thumbnail.extension
                            }} style={styles.resultThumbnail} />
                            <Text style={styles.resultName}>
                                {person.name}
                            </Text>
                        </View>
                    ))
                }
            </View>
        );
    }
}
