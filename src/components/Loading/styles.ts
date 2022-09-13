import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        zIndex: 9999,
        height: height + StatusBar.currentHeight,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.shape,
        margin: 10,
        fontSize: 18,
        // fontFamily: fonts.medium
    },
});
