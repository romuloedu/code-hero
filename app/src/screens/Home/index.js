import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Search from '../../components/Search';
import ResultsList from '../../components/ResultsList';
import Pagination from '../../components/Pagination';

export default class Home extends Component {

    state = {
        apikey: "fa3d1ecfc313657edd64bd5eeb726f6c",
        ts: "1576086904",
        hash: "41c520a5e9364f81ddc2dd2ecef47d80",
        limit: 4,
        currentPage: 1,
        querySearch: null,
        serverData: [],
        pages: []
    }

    fetchData = async () => {
        const res = await api.get("/characters", {
            params: {
                apikey: this.state.apikey,
                ts: this.state.ts,
                hash: this.state.hash,
                offset: ((this.state.currentPage - 1) * this.state.limit),
                limit: this.state.limit,
                nameStartsWith: this.state.querySearch
            }
        });

        this.setState({ serverData: res.data.data },
            this.handleNavigationButtons);
    }

    handleNavigationButtons = async () => {
        const { total, limit } = this.state.serverData;
        const { currentPage } = this.state;
        const totalPages = Math.trunc(total / limit) + ((total % limit) ? 1 : 0);
        var cont = 1;
        var pagesAux = [];
        var auxCont = (currentPage === 1) ? 1 : currentPage - 1;

        while (cont <= 3 &&
            auxCont <= totalPages) {

            pagesAux.push({
                id: auxCont,
                isCurrentPage: currentPage === auxCont
            });

            cont++;
            auxCont++;
        }

        this.setState({ pages: pagesAux });
    }

    handlePageSearch = async (id) => {
        this.setState({ currentPage: id },
            this.fetchData);
    }

    handleSearch = async (query) => {
        this.setState({
            querySearch: query ?
                query.toLowerCase()
                : null
            ,
            currentPage: 1
        },
            this.fetchData);
    }

    componentDidMount = async () => {
        this.fetchData();
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Search filterCharacters={this.handleSearch} />
                <ResultsList serverData={this.state.serverData} />
                <Pagination pages={this.state.pages}
                    getPage={this.handlePageSearch} />
            </View>
        );
    }
}
