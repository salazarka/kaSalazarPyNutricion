import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Left } from 'native-base';
const itemId = require('../Client/Profile.js');
const firebaseApp = require('../firebaseconfig.js');
var states = true;
var esp = '';
const styles = StyleSheet.create({
    textTitle: {
        color: '#4f603c',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 15,
    },
    input: {
        width: '100%',
        backgroundColor: 'transparent',
        marginTop: 20,
        fontSize: 20,
        padding: 5,
    },
    icon: {
        width: 40,
        height: 40,
        marginTop: 5,
        borderRadius: 5,
        //display: 'right',
    },
});

export class addBoard extends React.Component {
    state = {
        boardinfo: ''
    }
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        icon: PropTypes.string.isRequired,
    };

    static defaultProps = {
        icon: 'md-menu',
    };

    onChangeBoardinfo = (boardinfo) => {
        this.setState({ boardinfo });
    }
    _renderSection = (section, sectionId) => < Text > { section } < /Text>;

    static navigationOptions = {
        title: 'Add Comment',
    };

    addPostC = () => {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');

        itemsRef = this.getRef().child('client');
        itemsRef.on('value', (snap) => {
            snap.forEach((child) => {
                if ((child.val().email == itemId.email)) {
                    esp = child.key + ".json";
                }
                const URL2 = 'https://proyecto-92f5c.firebaseio.com/client/' + esp;
                axios({
                    method: "PATCH",
                    url: URL2,
                    data: {
                        boardinfo: this.state.boardinfo
                    }
                })
            });
        });
        /*makingPlan() { //funcion prueba </Text>
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const exBoard = itemId.boardinfo;

        idCli = '';
        itemRef = this.getRef().child('client');
        itemRef.on('value', (snap) => {
            snap.forEach((child) => {
                if ((child.val().email == itemId.email)) {
                    this.idCli = child.key;
                }
            });
        });
        const ref = firebaseApp.database().ref(`client/${idCli}`).set({
            age: itemId.age,
            description: itemId.description,
            email: itemId.email,
            height: itemId.height,
            name: itemId.name,
            password: itemId.password,
            weight: itemId.weight,
            boardinfo: exBoard + this.state.boardinfo
        });
    }*/
    }



    getRef() {
        return firebaseApp.database().ref();
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        return ( <
            View >

            <
            View style = {
                { flexDirection: 'row' }
            } >

            <
            TouchableHighlight onPress = {
                () => navigation.navigate('LoginScreen')
            } >

            <
            Image style = {
                { width: 40, height: 40, marginTop: 10, borderRadius: 5, marginLeft: 310, }
            }
            source = { require('../Image/out.jpg') }
            /> 

            <
            /TouchableHighlight>  

            <
            /View>


            <
            View style = { styles.container } >

            <
            Text > { JSON.stringify(itemId.boardinfo) } <
            /Text> 

            <
            /
            View >

            <
            TextInput multiline = { true }
            numberOfLines = { 1 }
            style = { styles.input }
            onChangeText = { this.onChangeBoardinfo }
            />

            <
            Button title = "SENd"
            color = "#aa6d71"
            onPress = { this.addPostC } //this.makingPlan } 

            /> 



            <
            /
            View >
        )
    }
}
export default addBoard