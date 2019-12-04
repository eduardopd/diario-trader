import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import styles from './styles';
import Header from '../components/Header';


var SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({ name:"test", createFromLocation: "~database.db"})


class Main extends React.Component {

    _isMounted = false;

    static navigationOptions = {
        title: "Diário do Trader",
    };


    constructor(props) {
        super(props);

        this.state = {
            nome: null
        };
    }

    componentDidMount(){
        this._isMounted = true;


        // id do usuário logado
        // Criar a lógica do login e passar o id para as queries abaixo.
        var id = 2;

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM trader WHERE id=?', [id], (tx, results) => {

                console.log("Query Completed");

                    var len = results.rows.length;

                    if(len > 0){
                        var row = results.rows.item(0);
                        this.setState({nome: row.nome});

                        console.log("State changed");

                    }
            } )
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState, this.state);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
    const { navigate } = this.props.navigation;


        return(

            <ScrollView>

              <StatusBar barStyle="light-content"/>

              <Header> </Header>

              <View style={styles.body}>
                <View style={styles.sectionContainer}>

                    <View style={styles.sectionContainerOne}>

                        <Text style={styles.h1}> Diário do {this.state.nome}</Text>


                    </View>

                    <View style={styles.sectionContainerTwo}>
                        <Text style={styles.h3}> Main </Text>
                    </View>

                    <View style={styles.sectionContainerThree}>

                        <Button
                        title="Resumo"
                        onPress={() => navigate('Resumo', {name: 'Resumo'})
                        }
                        />

                    </View>


                </View>

              </View>
            </ScrollView>
        );
    }
}


export default Main;
