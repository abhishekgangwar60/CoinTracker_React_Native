import React, { Component } from 'react';
import { Header } from 'react-native-elements';

export default class HomeComponent extends Component {
    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{
                    text: 'CryptoTracker', style: { color: '#fff', fontWeight: 'bold' }
                }}
                rightComponent={{ icon: 'search', color: '#fff' }}
                backgroundColor="#0e7d8c"
            />
        );
    }
}
