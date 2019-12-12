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

        const { results } = this.props.serverData;

        return (
            <View style={styles.resultsContainer}>
                <View style={styles.resultHeaderContainer}>
                    <Text style={styles.resultHeaderThumbnail}></Text>
                    <Text style={styles.resultHeaderName}>Nome</Text>
                </View>
                {
                    (results && results.length) ?
                        results.map(result => (
                            <View style={styles.resultCard} key={result.id} >
                                <Image source={{
                                    uri: result.thumbnail.path
                                        + '.' + result.thumbnail.extension
                                }} style={styles.resultThumbnail} />
                                <Text style={styles.resultName}>
                                    {result.name}
                                </Text>
                            </View>
                        ))
                        : (
                            <View style={styles.emptyListContainer}>
                                <Text style={styles.emptyListText}>
                                    Nenhum resultado encontrado.
                                </Text>
                            </View>
                        )
                }
            </View>
        );
    }
}