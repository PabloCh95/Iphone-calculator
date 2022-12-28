import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { ButtonProps } from '../interface/variables';

export default function Button({ item, action }:ButtonProps) {

    const stylesButton=(value:string)=>{
        switch(value){
            case 'C':
                return styles.buttonOperator;
            case '+/-':
                return styles.buttonOperator;
            case 'del':
                return styles.buttonOperator;
            case  ".":
                return styles.buttonNumber;
            case "÷":
                return styles.buttonOperatorV2;
            case "x":
                return styles.buttonOperatorV2;
            case "-": 
                return styles.buttonOperatorV2;
            case "+":
                return styles.buttonOperatorV2;
            case "=":
                return styles.buttonOperatorV2;
            case "0":
                return styles.buttonNumberZero;

        }
    }
  return (
    <TouchableOpacity style={[styles.buttonNumber, stylesButton(item)]} key={item.toString()} onPress={()=>action(item)}>
        <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonNumber:{
        backgroundColor:'#333333',
        width:80,
        height:80,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        margin:5
    },
    buttonNumberZero:{
      width:170,
      alignItems:'flex-start',
      paddingLeft:20,
    },
    buttonOperator:{
      backgroundColor:'#fe9f0a'
    },
    buttonOperatorV2:{
      backgroundColor:'#a5a5a5',
    },
    text:{
        color:'#ffffff',
        fontSize:40,
    }
})