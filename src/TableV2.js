import React from 'react' 


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    console.log("TAbLE BODY ", props)
    const rows = props.data.map((row, index) =>{
       
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=> props.removeCharacter(index)}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

export default function Table(props) {
    const characters = props.data

    return (
        <table>
            <TableHeader/>
            <TableBody data={characters} removeCharacter={props.removeCharacter}/>
        </table>
    )

}