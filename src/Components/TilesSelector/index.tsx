import {FC, useState} from 'react'
import { TextBox } from "./TextBox/index";
import styles from './styles.module.css'
import { boardData } from './utils'

export const TilesSelector:FC = (): JSX.Element => {
    const [result, setResult] = useState<string>("")

    const handleClick = (e: any) => {

        setResult(result.concat(e.target.name))
    }

    const handleClear = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setResult("")
    }

    return(
        <> 
        <div className={styles.clearButtonContainer}>
            <div onClick={handleClear}>
                {result ? <div className={styles.clearWord}>Clear Word <button className={styles.clearBtn}>X</button></div> : ''}
            </div>
        </div>
            <div>{boardData.map((letter, idx) => 
                (<div key={idx} className={styles.tilesGrid}>
                    <button name="A" onClick={handleClick}>{letter.alphabet[0]}</button>
                    <button name="B" onClick={handleClick}>{letter.alphabet[1]}</button>
                    <button name="C" onClick={handleClick}>{letter.alphabet[2]}</button>
                    <button name="D" onClick={handleClick}>{letter.alphabet[3]}</button>
                    <button name="E" onClick={handleClick}>{letter.alphabet[4]}</button>
                    <button name="F" onClick={handleClick}>{letter.alphabet[5]}</button>
                    <button name="G" onClick={handleClick}>{letter.alphabet[6]}</button>
                    <button name="H" onClick={handleClick}>{letter.alphabet[7]}</button>
                    <button name="I" onClick={handleClick}>{letter.alphabet[8]}</button>
                    <button name="J" onClick={handleClick}>{letter.alphabet[9]}</button>
                    <button name="K" onClick={handleClick}>{letter.alphabet[10]}</button>
                    <button name="L" onClick={handleClick}>{letter.alphabet[11]}</button>
                    <button name="M" onClick={handleClick}>{letter.alphabet[12]}</button>
                    <button name="N" onClick={handleClick}>{letter.alphabet[13]}</button>
                    <button name="O" onClick={handleClick}>{letter.alphabet[14]}</button>
                    <button name="P" onClick={handleClick}>{letter.alphabet[15]}</button>
                </div>
                ))}
            </div>
            <TextBox result={result}/>
        </>
    )
}