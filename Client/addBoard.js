import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
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
        backgroundColor: 'lightgrey',
        marginTop: 20,
        fontSize: 20,
        padding: 5,
    },
  });

export class addBoard extends React.Component{
    state = {
        boardinfo: ''
    }

    onChangeBoardinfo = (boardinfo) => {
        this.setState({ boardinfo});
    }
    _renderSection = (section, sectionId)  => <Text>{section}</Text>;

    static navigationOptions = {
        title: 'Add Comment',
    };

    addPostC = () =>{
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        
        itemsRef =  this.getRef().child('client');
        itemsRef.on('value',(snap) => {
            snap.forEach((child) => {
                if( (child.val().email == itemId.email)){
                    esp = child.key+".json";
                }
            const URL2 ='https://proyecto-92f5c.firebaseio.com/client/'+esp;
            axios({
                method:"PATCH",
                url:URL2,
                data: {
                    boardinfo: this.state.boardinfo
                }
            }) 
        });      
    }); 
    }

    getRef(){
        return firebaseApp.database().ref();
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        return (
          <View>
            <View style={styles.container}>
                <Text>{JSON.stringify(itemId.boardinfo)}</Text>
            </View>
            <TextInput 
                multiline = {true}
                numberOfLines = {1}
                style = { styles.input }
                onChangeText = { this.onChangeBoardinfo }
            />

            <Button title = "SENd"
            color = "#92d1b9"
            onPress 
                ={this.addPostC}
            
            />
          </View>
        )
      }
}
export default addBoard