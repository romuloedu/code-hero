import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

import Header from '../../components/Header';
import Search from '../../components/Search';
import ResultsList from '../../components/ResultsList';
import Pagination from '../../components/Pagination';

export default class Home extends Component {

    state = {
        heroes: [
            {
                id: 1,
                image: "http://www.google.com.br",
                name: "Tony Stark"
            },
            {
                id: 2,
                image: "http://www.google.com.br",
                name: "Capitão América"
            },
            {
                id: 3,
                image: "http://www.google.com.br",
                name: "Hulk"
            },
            {
                id: 4,
                image: "http://www.google.com.br",
                name: "Viúva Negra"
            },
            {
                id: 5,
                image: "http://www.google.com.br",
                name: "Homem Aranha"
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Search />
                <ResultsList {...this.state.heroes} />
                <Pagination />
            </View>
        );
    }
}
