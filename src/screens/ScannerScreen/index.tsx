import React, { useEffect, useState } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import QrCodeIconScanner from '../../assets/svg/qrCodeIconScanner.svg'

import { Title } from '../../components/Title';
import AppScanActivityModule from '../../modules/AppScanActivityModule';
import { colors } from '../../utils/theme';
import styles from './styles';

type PermissionStatus =
    | 'unavailable'
    | 'denied'
    | 'limited'
    | 'granted'
    | 'blocked'
    | null;

export default function ScannerScreen() {
    const [permissionResult, setPermissionResult] = useState<PermissionStatus>(null);
    const [textLoadingProgress, setTextLoadingProgress] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        permissionsValidate()
    }, [])

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

    async function handleAction() {
        try {
            const imagePath = await AppScanActivityModule.startScan();
            console.log('Image Path', imagePath);
        } catch (e) {
            console.log(e)
        }
        
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerBody}>

            </View>
            <View style={styles.containerFooter}>
                <TouchableOpacity
                    style={styles.containerButton}
                    activeOpacity={0.8}
                    onPress={() => handleAction()}
                >
                    <View style={styles.textItem}>
                        <Title text={'Botão de ação.'} color={colors.shape} isBold />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
