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


var SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({ name:"test", createFromLocation: "~database.db"})

import styles from '../styles';

class Emocional extends React.Component {

    _isMounted = false;

    static navigationOptions = {
        title: "Diário do Trader",
    };


    constructor(props) {
        super(props);

        this.state = {
            nome: null,
            desc: null
        };
    }

    componentDidMount(){
        this._isMounted = true;


        // id do usuário logado
        var id = 1;

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

        db.transaction((tx) => {
            tx.executeSql('SELECT desc FROM emoc WHERE id_trader=?', [id], (tx, results) => {

                console.log("Query Completed");

                    var len = results.rows.length;

                    if(len > 0){
                        var row = results.rows.item(0);
                        this.setState({desc: row.desc});

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
    const {navigate} = this.props.navigation;


        return(

            <ScrollView>

              <StatusBar barStyle="light-content"/>

              <View style={styles.body}>
                <View style={styles.sectionContainer}>

                    <View style={styles.sectionContainerOne}>
                        <Text style={styles.h1}> Diário do {this.state.nome} </Text>
                    </View>

                    <View style={styles.sectionContainerTwo}>
                        <Text style={styles.h3}> Emocional </Text>
                    </View>

                    <View style={styles.sectionContainerFour}>

                    <Text style={styles.h4}> Descreva como você se sentiu durante as operações </Text>

                    </View>

                    <View style={styles.sectionContainerTextBox}>

                        <TextInput
                          style={{ height: 150, width: "100%", borderWidth: 1, color: "black" }}
                        />

                    </View>

                    <View style={styles.sectionContainerThree}>

                        <Button
                        title="Limpar"
                        onPress={() => navigate('Emocional', {name: 'Emocional'})
                        }
                        />

                    </View>

                    <View style={styles.sectionContainerThree}>

                        <Button
                        title="Enviar"
                        onPress={() => navigate('Emocional', {name: 'Emocional'})
                        }
                        />

                    </View>

                    <View style={styles.sectionContainerTwo}>
                        <Text style={styles.h3}> Último registro </Text>
                    </View>

                    <View style={styles.sectionContainerTextBox}>

                        <Text style={styles.h3}> {this.state.desc} </Text>

                    </View>


                    <View style={styles.sectionContainerThree}>

                        <Button
                        title="Voltar"
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


export default Emocional;
