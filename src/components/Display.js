import styles from './Display.module.css'

export function Display({valor}){

    return(
        <div className={styles.Display}>
            <label>{valor}</label>
        </div>
    )
}