import {FC, useState} from 'react'
import { TextBox } from "./TextBox/index";
import styles from './styles.module.css'
import { boardData } from './utils'

export const TilesSelector:FC = (): JSX.Element => {
       const [currentTile, setCurrentTile] = useState("")
       const [selectedTile, setSelectedTile] = useState([])
  

    const handleClick = (letter: string) => {
        setCurrentTile(currentTile + letter)
    }

    const handleBtnStyle = (letterId: never) => {
        let tmp = selectedTile
        if(selectedTile.includes(letterId)) {
            setSelectedTile(selectedTile.filter(elem => elem !== letterId))
        } else {
            tmp.push(letterId)
            setSelectedTile(tmp)
        }
    }

    const handleClear = () => {
        setCurrentTile("")
        setSelectedTile([])
    }

    return(
        <> 
        <div onClick={handleClear} 
             className={styles.clearButtonContainer}>
            {currentTile ? <div><div className={styles.clearWord}>Clear Word</div><button className={styles.clearBtn}>X</button></div> : ''}
        </div>
            <div className={styles.tilesGrid}>
                {boardData.map(letter => {
                    return <button 
                              key={letter.id} 
                              onClick={() =>  
                               {handleClick(letter.thisLetter); 
                                handleBtnStyle(letter.id as never)}} 
                              className={selectedTile.includes(letter.id as never) ?  
                              styles.btnSelected : 
                              styles.btnStyles}> 
                            {letter.thisLetter}
                           </button>
                })}
            </div>
            <TextBox currentTile={currentTile} />
        </>
    )
}