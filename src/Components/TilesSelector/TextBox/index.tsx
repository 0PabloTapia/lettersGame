import {FC} from 'react'
import styles from './styles.module.css'

interface texBoxProps {
    result: string
}

export const TextBox:FC<texBoxProps> = ({ result }): JSX.Element => {


    return(
        <>
            <div className={styles.inputContainer}>
                <input className={styles.inputStyles} type='text' value={result}></input>
            </div>
        </>
    )
}