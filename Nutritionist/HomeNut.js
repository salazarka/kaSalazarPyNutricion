import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ListView, Alert, Image, TouchableHighlight } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { ListItem, Separator } from 'native-base';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8DA593',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        marginTop: 3,
    },
    title: {
        marginTop: 30,
        color: '#4f603c',
        fontSize: 30,
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#3D2A23',

    },
    expandible: {
        backgroundColor: '#aa6d71',
        marginTop: 3,
    },
    button: {
        backgroundColor: '#CBD9D6',
        marginTop: 10,
        marginBottom: 10,
        width: 150,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        marginTop: 10,
        borderRadius: 5,
    },
});
const idNut = '';
const firebaseApp = require('../firebaseconfig.js');
export class HomeNut extends React.Component {
    static navigationOptions = {
        title: 'Nutritionist',
    };

    static propTypes = {
        onPress: PropTypes.func.isRequired,
        icon: PropTypes.string.isRequired,
    };

    static defaultProps = {
        icon: 'md-menu',
    };

    _renderRow = (rowItem, rowId, sectionId) => < Text > { rowItem.title } < /Text>;
    _renderSection = (section, sectionId) => < Text > { section } < /Text>;

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        this.state = {
            itemDataSourceP: ds,
            items: []

        }
        this.itemsRef = this.getRef().child('client');
        this.itemsRefMatch = this.getRef().child('cliente-nut');
        this.renderRow = this.renderRow.bind(this);
        this.pressRow = this.pressRow.bind(this);

    }

    getRef() { // DEBE RECIBIR EL PARÁMETRO DEL ID CLIENTE AL QUE DEBO ACCESAR
        return firebaseApp.database().ref(); //  REFERENCIAR ATRIBUTO
    }

    componentWillMount() {
        this.getItemsP(this.itemsRef);


    }

    getItemsP(itemsRef) {
        //  console.log('en getitemsp idNut: ' + idNut);

        this.itemsRefMatch.on('value', (snap) => { // matching doc
            snap.forEach((child) => {
                if (child.val().idNut == idNut) { // // "-LRPxv1z_BTvxjx4zkvu" // dato quemado se va parametrizar
                    this.state.items.push(child.val().idCliente); //filling array with client's id
                    console.log("ITEMS TO FIND : ");
                    console.log(this.state.items);
                }
            });

        });
        itemsRef.on('value', (snap) => { //clients
            let itemss = [];

            snap.forEach((child) => {

                //"-LRob66Ztyvwju4MUwK3"

                for (i = 0; i < this.state.items.length; i++) {
                    if ((child.key == this.state.items[i])) {
                        itemss.push({
                            title: child.val().name
                        });

                    }

                }

            });
            if (itemss.length == 0) {
                itemss.push({
                    title: "YOU DON'T HAVE ANY CLIENTS YET! >.<"
                });
            }
            this.setState({ itemDataSourceP: this.state.itemDataSourceP.cloneWithRows(itemss) });
        });
    }

    pressRow(item) {
        console.log(item)
    }

    alertItemName = () => {
        alert(item.name)
    }

    profileView(client) {
        itemsRef = this.getRef().child('client');

        itemsRef.on('value', (snap) => {

            snap.forEach((child) => {

                if (child.val().name == client) {

                    this.props.navigation.navigate('ProfileScreen', { itemId: child.val() })
                }

            });

        })
    }

    renderRow(item) {
        return ( <
            View >

            <
            Text style = { styles.container }
            //onPress={() => this.props.navigation.navigate('ProfileScreen',)}>
            onPress = {
                () => Alert.alert(
                    'Descripcion',
                    item.note, [
                        { text: 'Cancel' },
                        { text: 'View Profile', onPress: () => { this.profileView(item.title) } } //  onPress: () => this.props.navigation.navigate('ProfileScreen', { itemId: item.name })
                    ], { cancelable: false })
            } > { item.title }

            <
            /Text>  

            <
            /View>
        )
    }



    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        idNut = itemId;
        return (

            <
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
            Collapse >


            <
            CollapseHeader >

            <
            Separator style = { styles.expandible }
            bordered >


            <
            Text style = { styles.text } > MY CLIENTS < /Text> 

            <
            /Separator >


            <
            /CollapseHeader>  

            <
            CollapseBody >

            <
            ListItem >


            <
            ListView dataSource = { this.state.itemDataSourceP }
            renderRow = { this.renderRow }
            /> 

            <
            /ListItem >


            <
            /CollapseBody>  

            <
            / Collapse >

            <
            /View> 

        );
    }
}

export default HomeNut