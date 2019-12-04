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

import styles from '../styles';

class Operacional extends React.Component {
    static navigationOptions = {
        title: "Diário do Trader",
        color: "white"
    };
    render() {
    const {navigate} = this.props.navigation;

        return(

            <ScrollView>

              <StatusBar barStyle="light-content"/>

              <View style={styles.body}>
                <View style={styles.sectionContainer}>

                    <View style={styles.sectionContainerOne}>
                        <Text style={styles.h1}> Diário do Trader </Text>
                    </View>

                    <View style={styles.sectionContainerTwo}>
                        <Text style={styles.h3}> Operacional </Text>
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



export default Operacional;
