import {styles} from './css/CalculatorStyles.js';

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Calculator () {

   
    const botoes = ['C', 'DEL', '%', '/', 
                    '7', '8', '9', '*', 
                    '4', '5', '6', '-', 
                    '3', '2', '1', '+', 
                    '0', '.', '=']

    const [expressao, setExpressao] = useState ('')
    const [result, setResult] = useState ('')

    // Função que verifica qual botão foi acionado, chamando a função adequada.
    const checkBotaoAcionado = (valor) => {
        if(valor == '='){
            calcularExpressao()
        } else if (valor == 'C'){
            limpar()
        } else if (valor == 'DEL'){
            apagar()
        } else {
            setExpressao (expressaoInformada => expressaoInformada + valor);
        }
    }

    // Função que calcula a expressao passada.
    const calcularExpressao = () => {
        if(/^[0-9]+([+\-*/.][0-9]+)*$/.test(expressao)) {
                const resultado = eval(expressao)
                setResult(resultado)
        } else {
            setResult ('Erro')
        }
    }

    //Função que limpa expressão e resultado
    const limpar = () => {
        setExpressao ('')
        setResult ('')
        
    }

    // Função que apaga o ultimo caractere passado na expressao.
    const apagar = () => {
        setExpressao (expressaoPassada => expressaoPassada.substring(0, expressaoPassada.length - 1))
    }

   return(
    <SafeAreaView style={{flex: 1}}>
        <View>

            <View style={styles.blocoResultado}>
                <Text style={styles.expressao}> {expressao} </Text>
                <Text style={styles.resultados}> {result} </Text>
            </View>

            <View style={styles.blocoDivisao}></View>

            <View style={styles.blocoBotoes}>
                {botoes.map((button) =>
                    <TouchableOpacity key={button} style={styles.bt} onPress={ () => checkBotaoAcionado(button)}> 
                        <Text style={styles.textBotao}> {button} </Text> 
                    </TouchableOpacity>
                )}
            </View>

        </View>
    </SafeAreaView>
   );
}