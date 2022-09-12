import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Title } from '../../components/Title';
import styles from './styles';

export default function Scanner() {
    return (
        <View style={styles.container}>

        <TouchableOpacity
            style={styles.containerButton}
            activeOpacity={0.8}
            onPress={() => console.log('onpress')}
        >
            <View style={styles.textItem}>
                <Title text={'item.nome'} />

            </View>
        </TouchableOpacity>
        </View>
    );
}
