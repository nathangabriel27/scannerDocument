import React, { useState } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';

import { Title } from '../../components/Title';
import styles from './styles';

type PermissionStatus =
    | 'unavailable'
    | 'denied'
    | 'limited'
    | 'granted'
    | 'blocked'
    | null;

export default function Scanner() {
    const [permissionResult, setPermissionResult] = useState<PermissionStatus>(null);
    const [textLoadingProgress, setTextLoadingProgress] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    function permissionsValidate() {
        setTextLoadingProgress('Verificando permissão');
        setLoading(true);
        request(Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA).then((result) => {
            setPermissionResult(result);
            if (result === 'blocked' || result === 'denied') {
                console.log(result);
                setLoading(false);
            } else {
                console.log(result);
                setLoading(false);
            }
        });
    }
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.containerButton}
                activeOpacity={0.8}
                onPress={() => permissionsValidate()}
            >
                <View style={styles.textItem}>
                    <Title text={'Botão'} />
                </View>
            </TouchableOpacity>
        </View>
    );
}
