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


export default class Table extends React.Component {
    render() {
        const characters = this.props.data
        
        return (
            <table>
               <TableHeader/>
               <TableBody data={characters} removeCharacter={this.props.removeCharacter}/>
            </table>
        )
    }
}