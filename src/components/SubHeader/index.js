import React from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import Button from '../Button';

const SubHeader = () => (
    <View style={styles.container}>
        <Icon name='user-circle' size={50} style={styles.avatar} />

        <View style={styles.profileInfo}>
            <Text style={styles.name}> Eduardo </Text>
            <Text style={styles.bio}> Trader de Futuros </Text>

            <View style={styles.buttonContainer}>
                <Button> Mensagem </Button>
                <Button> Seguir </Button>

            </View>

        </View>

    </View>

);

export default SubHeader;