import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import styles from './styles';

var SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({ name: 'test', createFromLocation: "~database.db" })

class Resumo extends React.Component {

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
                        <Text style={styles.h3}> Resumo </Text>
                    </View>

                    <View style={styles.sectionContainerThree}>

                        <Button
                        title="Emocional"
                        onPress={() => navigate('Emocional', {name: 'Emocional'})
                        }
                        />

                    </View>

                    <View style={styles.sectionContainerThree}>

                        <Button
                        title="Mercado"
                        onPress={() => navigate('Mercado', {name: 'Mercado'})
                        }
                        />

                    </View>

                    <View style={styles.sectionContainerThree}>

                        <Button
                        title="Operacional"
                        onPress={() => navigate('Operacional', {name: 'Operacional'})
                        }
                        />

                    </View>


                    <View style={styles.sectionContainerThree}>

                        <Button
                        title="Voltar"
                        onPress={() => navigate('Main', {name: 'Main'})
                        }
                        />

                    </View>

                </View>

              </View>
            </ScrollView>
        );
    }
}





export default Resumo;
