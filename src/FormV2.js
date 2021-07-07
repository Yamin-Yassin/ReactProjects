import React, { useState } from 'react'

export default function Form(props) {

    const [name, setName] = useState("");
    const [job, setJob] = useState("")

    const initialState = {
        name : '', 
        job : '',
    }

    


    const handleChange = (event) => {
        
        const {name, value} = event.target
        
        if (name === "name")
            setName(value)
        else
            setJob(value)
    } 

    const submitForm = () => {
        const auxCharacter = {name: name,  job: job}
        props.handleSubmit(auxCharacter)

        setName(initialState.name);
        setJob(initialState.job);

       
    }
    
      

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => handleChange(e)} />
            <label htmlFor="job">Job</label>
            <input 
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={(e) => handleChange(e)} />

            <input type="button" value="Submit" onClick={submitForm} />
        </form>
    )

    
}

