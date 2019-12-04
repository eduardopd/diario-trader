import React from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = () => (
    <View style={styles.container}>
        <View style={styles.container}>
            <Icon name="angle-left" size={24} style={styles.icon} />
        </View>
        <View style={styles.container}>
            <Text style={styles.title}> Diário do: </Text>
        </View>
        <View style={styles.container}>
            <Icon name="info-circle" size={24} style={styles.icon} />
        </View>
    </View>

);

export default Header;