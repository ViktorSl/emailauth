import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Provider} from 'react-redux';
import configureStore from './store/store';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const store = configureStore();


const app = () => (
    <Provider store = {store}>
        <View style = {styles.container}>
            <Text>Hello, Blue Car !!!</Text>
        </View>
    </Provider>
);

export default app;