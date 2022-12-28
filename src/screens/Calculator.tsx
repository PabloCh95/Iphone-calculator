import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Keyboard from '../components/keyboard'
import useCalculators from '../hooks/useCalculators';

export default function Calculator():JSX.Element {
    const {
      numeroAnterior,
      numero,
      limpiar,
      positioNegativo,
      btnDelete,
      btnDividir,
      armarNumero,
      btnMultiplicar,
      btnRestar,
      btnSumar,
      calcular,
    } = useCalculators();

  return (
    <View style={styles.container}>
      <View style={styles.containerResult}>
        {(numeroAnterior !=='0') && (<Text style={styles.litleResult}>{numeroAnterior}</Text>)}
    
        <Text 
        style={styles.textResult}
        numberOfLines={ 1 }
        adjustsFontSizeToFit>
        {numero}
        </Text>
      </View>
      <Keyboard 
      limpiar={limpiar}
      positioNegativo={positioNegativo}
      btnDelete={btnDelete}
      btnDividir={btnDividir}
      armarNumero={armarNumero}
      btnMultiplicar={btnMultiplicar}
      btnRestar={btnRestar}
      btnSumar={btnSumar}
      calcular={calcular}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000000'
  },
  containerResult:{
    flex:1,
    justifyContent:'flex-end',
    paddingTop:60,
    paddingRight:10
  },
  textResult:{
    color:'#ffffff',
    fontSize:60,
    textAlign:'right'
  },
  litleResult: {
    color: 'rgba(255,255,255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },

})