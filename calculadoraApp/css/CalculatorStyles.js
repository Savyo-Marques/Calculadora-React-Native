import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({

    blocoResultado:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        height: 430,
        backgroundColor: '#fff'
    },

    expressao:{
        fontSize: 40,
        marginRight: 30,
        alignSelf: 'flex-end'
    },

    resultados:{
        fontSize: 40,
        margin: 10
    },

    blocoDivisao:{
        height: 1,
        backgroundColor: '#696969'
    },

    blocoBotoes:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F0F8FF',
    },

    bt:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        minHeight: 78,
        minWidth: 77,
        elevation: 4,
        borderRadius: 50,
        margin: 8,
        borderWidth: 1,
        borderColor: '#000000',
    },

    textBotao:{
        color: '#5b5b5b',
        fontSize: 25

    },
});