import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
const { width, height } = Dimensions.get('window')


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFooter: {
        height: 100,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.success,
        
    },
    containerButton: {
        padding: 20,
        width: width/3,
        backgroundColor: colors.warn,
        alignItems: 'center',
        paddingVertical: 12,
    },
    textItem: {
    },
    dotIcon: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginRight: 8,
        padding: 10,
        alignItems: 'flex-end',


    },

});
