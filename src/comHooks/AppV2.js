import { useState } from 'react'
import Table from './TableV2'
import Form from './FormV2'

export default function AppV2() {

    const [characters, setCharacters ] = useState( [
        {
            name: 'Charlie',
            job: 'Janitor',
        },
        {
            name: 'Mac',
            job: 'Bouncer',
        },
        {
            name: 'Dee',
            job: 'Aspring actress',
        },
        {
            name: 'Dennis',
            job: 'Bartender',
        }
    ]
      
    )

    const removeCharacter = (index) => {
        
        setCharacters( 
            characters.filter((character, i) => {
                return i !== index
            })
        )
    }

    const handleSubmit = (character) => {

        setCharacters([...characters, character])
    }


    return (
        <div className="container">
            <Table data={characters} removeCharacter={() => removeCharacter()} />
            <Form handleSubmit={(e) => handleSubmit(e)} />
        </div>
    )
 
}

