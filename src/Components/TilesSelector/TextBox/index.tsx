import {FC} from 'react'
import styles from './styles.module.css'

interface texBoxProps {
    currentTile: string
}

export const TextBox:FC<texBoxProps> = ({ currentTile }): JSX.Element => {


    return(
        <>
            <div className={styles.inputContainer}>
                <input className={styles.inputStyles} type='text' value={currentTile}></input>
            </div>
        </>
    )
}