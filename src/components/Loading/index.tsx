import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { colors } from '../../utils/theme';
import styles from './styles';

interface Props {
    loadingVisible: boolean;
    textMensage?: string;
}
export function Loading({ loadingVisible, textMensage }: Props) {
    return (
        <>
            {loadingVisible && (
                <View style={styles.container}>
                    <ActivityIndicator size='large' color={colors.shape} />
                    <Text style={styles.text}>
                        {textMensage ?? 'Acessando dados ...'}
                    </Text>
                </View>
            )}
        </>
    );
}
