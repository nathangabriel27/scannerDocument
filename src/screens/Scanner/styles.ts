import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        padding: 20,
        backgroundColor: colors.gray,
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
