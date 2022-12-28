export interface ButtonProps{
    item: string,
    action:false | ((value: string) => void)
}

export interface FunctionHooks{
    limpiar:(value:string)=>void,
    positioNegativo: (value:string)=>void,
    btnDelete: (value:string)=>void,
    btnDividir: (value:string)=>void,
    armarNumero: (value:string)=>void,
    btnMultiplicar: (value:string)=>void,
    btnRestar: (value:string)=>void,
    btnSumar: (value:string)=>void,
    calcular: (value:string)=>void
  }
export enum Operadores {
    sumar, restar, multiplicar, dividir 
}
