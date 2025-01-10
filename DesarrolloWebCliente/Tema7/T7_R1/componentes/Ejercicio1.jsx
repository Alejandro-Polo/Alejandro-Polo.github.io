import styles from './Ejercicio1.module.css';
export default function Ejercicio1(){

    return(
        <div className={styles.fondo}>
            <h3 className={styles.titulo}>username</h3>
            <hr className={styles.linea}/>
            <ul>
                <li  className={styles.listado}>1 lowerscase character</li>
                <li  className={styles.listado}>1 uppercase character</li>
                <li  className={styles.listado}>6 minimum characters</li>
            </ul>
            <button className={styles.boton}>Submit</button>
        </div>
)
}