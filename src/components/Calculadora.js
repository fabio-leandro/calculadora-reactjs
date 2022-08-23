/* eslint-disable no-eval */
import {useState} from 'react'
import { Botoes } from "./Botoes"
import { Display } from "./Display"
import styles from "./Calculadora.module.css"

export function Calculadora(){

    const [verValor, setVerValor] = useState('');
   
    const comporValorNumeros = (d) => {
        setVerValor(verValor+d)
    }

    const comporValorEspeciais = (d) => {
        if(d === verValor[verValor.length - 1]) return verValor;
        else if(verValor[verValor.length - 1] === '/') return verValor;
        else if(verValor[verValor.length - 1] === '*') return verValor;
        else if(verValor[verValor.length - 1] === '-') return verValor;
        else if(verValor[verValor.length - 1] === '+') return verValor;
        else if(verValor[verValor.length - 1] === '.') return verValor;
        else setVerValor(verValor+d)
    }


    const gerarResultado = () => {
      try {
        setVerValor(eval(verValor))
      } catch (error) {
        setVerValor('ERROR')
      }  
        
    }

    const limparTudo = () => {
        setVerValor('')
    }

    const limparUltimoCarctere = () => {
        if(verValor.length > 1) {
            setVerValor(verValor.substring(verValor.indexOf(0), verValor.length - 1))
        }else{
            setVerValor('')
        }
        
    }

    return(
        <div className={styles.Calculadora}>
            <div className={styles.Titulo}>
                <h4>Calculadora Simples</h4>
            </div>
            <div className={styles.Display}>
                <Display valor={verValor}/>
            </div>
            <div className={styles.Botoes}>
                <Botoes nome1={'('} f1={()=>comporValorNumeros('(')} nome2={')'} f2={()=>comporValorNumeros(')')} nome3={'AC'} f3={()=>limparTudo()}  nome4={'/'} f4={()=>comporValorEspeciais('/')}/>

                <Botoes nome1={'7'} f1={()=>comporValorNumeros('7')} nome2={'8'} f2={()=>comporValorNumeros('8')} nome3={'9'} f3={()=>comporValorNumeros('9')}  nome4={'*'} f4={()=>comporValorEspeciais('*')}/>

                <Botoes nome1={'4'} f1={()=>comporValorNumeros('4')} nome2={'5'} f2={()=>comporValorNumeros('5')} nome3={'6'} f3={()=>comporValorNumeros('6')}  nome4={'_'} f4={()=>comporValorEspeciais('-')}/>

                <Botoes nome1={'1'} f1={()=>comporValorNumeros('1')} nome2={'2'} f2={()=>comporValorNumeros('2')} nome3={'3'} f3={()=>comporValorNumeros('3')}  nome4={'+'} f4={()=>comporValorEspeciais('+')}/>

                <Botoes nome1={'.'} f1={()=>comporValorEspeciais('.')} nome2={'0'} f2={()=>comporValorNumeros('0')} nome3={'<-'} f3={()=>limparUltimoCarctere()}  nome4={'='} f4={()=>gerarResultado()}/>

                
            </div>
        </div>
    )

}