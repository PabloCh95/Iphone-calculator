import { View , StyleSheet , Platform} from 'react-native'
import React from 'react'
import { character , numbers1 , numbers2, numbers3, numbers4, operators} from '../utils/Characters';
import Button from './button';
import {FunctionHooks} from '../interface/variables';

export default function Keyboard({
  limpiar,
  positioNegativo,
  btnDelete,
  btnDividir,
  armarNumero,
  btnMultiplicar,
  btnRestar,
  btnSumar,
  calcular
}:FunctionHooks) {

  return (
    <View style={styles.container}>
      {/*Contenedor de teclado */}
      <View>
        <View style={styles.containerButtonNumber}>
          { //botones de caracteres
            character.map(
              (item:string)=>{
                return(
                 <Button item={item} action={(item=='C' && limpiar) || (item=='+/-' && positioNegativo) || (item=='del' && btnDelete)}/>
                )
              }
            )
          }
        </View>
        <View style={styles.containerButtonNumber}>
          {
            //botones de numeros
            numbers1.map(
              (item:string)=>{
                return(
                  <Button item={item} action={armarNumero}/>
                )
              }
          )}
        </View>
        <View style={styles.containerButtonNumber}>
          {
            //botones de numeros
            numbers2.map(
              (item:string)=>{
                return(
                  <Button item={item} action={armarNumero}/>
                )
              }
            )
          }
        </View>
        <View style={styles.containerButtonNumber}>
          {
              //botones de numeros
              numbers3.map(
                (item:string)=>{
                  return(
                    <Button item={item} action={armarNumero}/>
                  )
                }
              )
            }
        </View>
        <View style={styles.containerButtonNumber}>
          {
            //botones de numeros y punto
            numbers4.map((item:string)=>{
              return(
                <Button item={item} action={armarNumero}/>
              )
            })
          }
        </View>
      </View>
      <View>
          {
            //botones de operadores
            operators.map(
              (item:string)=>{
                return(
                  <Button item={item} action={(item=='+' && btnSumar)||(item=='-' && btnRestar) || (item=='x' && btnMultiplicar) || (item=='÷' && btnDividir) || (item=='=' && calcular)}/>
                )
              }
            )
          }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:(Platform.OS=="android") ? 3:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end'

    },
    containerButtonNumber:{
      flexDirection:'row',
    },
})