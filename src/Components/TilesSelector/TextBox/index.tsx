import {FC, useState} from 'react'
import styles from './styles.module.css'
import { dictionary } from "../utils";

interface texBoxProps {
    currentTile: string
}

export const TextBox:FC<texBoxProps> = ({ currentTile }): JSX.Element => {
    const [dictionaryWords] = useState(dictionary)


    const handleMatch = (dictionaryValues: string[]) => {
        const lowerCasedValues = currentTile.toLowerCase()
        let formedWord = new Array(lowerCasedValues)

        const matchedWords = dictionaryValues.filter( correctWords => correctWords.includes(formedWord as never))
        const foundMatch = matchedWords.some( wordsFounded => formedWord.includes(wordsFounded))

        if(foundMatch) {
            const validWord = '      valid'
            const upperCaseFormedWords = formedWord.map( word => word.toUpperCase())
            return upperCaseFormedWords + validWord

        } else {
            const invalidWord = '  invalid'
            return currentTile + invalidWord
        }   
    }


    return(
        <>
            <div className={styles.inputContainer}>
                <input className={styles.inputStyles} type='text' value={handleMatch(dictionaryWords)}></input>
            </div>
        </>
    )
}