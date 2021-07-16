import { createContext, useContext, useState } from "react"

const moods = {
    happy: '😃',
    sad: '😭'
}

const MoodContext = createContext(moods)

const MoodEmoji = () => {
    const mood = useContext(MoodContext)

    return <p>{mood}</p>
}

export default function AppV3() {

    const [currentMood, setCurrentMood] = useState(moods.happy);

    function changeMood(){
        if (currentMood === moods.happy){
            setCurrentMood(moods.sad)
        }else{
            setCurrentMood(moods.happy)
        }  
    }

    return (
        <MoodContext.Provider value={currentMood}>
            <button onClick={changeMood}> Click me to change the mood  {currentMood}</button>
            <MoodEmoji/>
        </MoodContext.Provider>
    )
    
} 

