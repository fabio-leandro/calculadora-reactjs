import styles from './Botoes.module.css'

export function Botoes(props){


    return(
        <div className={styles.Botoes}>
            <button onClick={props.f1}>{props.nome1}</button>
            <button onClick={props.f2}>{props.nome2}</button>
            <button onClick={props.f3}>{props.nome3}</button>
            <button onClick={props.f4}>{props.nome4}</button>
        </div>
    )
}