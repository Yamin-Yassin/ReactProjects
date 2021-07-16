import React, { useEffect, useState, useRef } from "react";



class BtnOld extends React.Component {
    state = {
        count: 0,
        loaded: false
    }
    
    // lifecicle events 
    componentDidMount(){
        // inicializado
        console.log("Component mounted lifecicle Class")
    }

    componentDidUpdate(){
        fetch(" ").then(() =>{       // corre no inicio
            this.state.loaded = !this.state.loaded
            console.log("Updated Component Class")
        })
    }

    componentWillUnmount(){
        console.log("destroyed Component Class", this.state.count)
    }

    render(){
        return ( 
            <div>
            <button onClick={() => this.setState({count: this.state.count + 1})}>
                {this.state.count}
            </button>
            { this.state.loaded  &&
            <h3> número Par</h3> ||
            <h3> número Impar</h3>
            }
            </div>
           

        )
           
        
    }
}


function Btn() {

    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useState(false);


    useEffect( () => {
        fetch(" ").then(() =>{       // corre no inicio
            setLoaded(!loaded)
            console.log("Updated Component Hook")
        })

        return () => console.log("destroyed Component Hook ", count) // corre no final 

    }, [count]) // com este segundo arg, ele vai correr o fetch sempre que count é atualizado

    return(
        <div>
            <button onClick={() =>setCount(count+1)} > {count}</button>
            { loaded  &&
            <h3> número Par</h3> ||
            <h3> número Impar</h3>
            }
        </div>
    )

}





function BtnRef() {

    // Com Refs nao posso atualizar o UI
    // refs servem para ir buscar cenas do DOM

    const count= useRef(0);
    const [loaded, setLoaded] = useState(false);
    

    useEffect( () => {
        fetch(" ").then(() =>{       // corre no inicio
            setLoaded(!loaded)
            console.log("Updated Component Hook")
        })
        
        
        //return () => console.log("destroyed Component Hook ", count) // corre no final 

    }, [count.current]) // com este segundo arg, ele vai correr o fetch sempre que count é atualizado
    

    return(
        <div>
            <button onClick={() =>count.current++} > {count.current}</button>
            { loaded  &&
            <h3> número Par</h3> ||
            <h3> número Impar</h3>
            }
        </div>
       
       
    )

}


export default function AppV4() {

    return (
        <div>
            <h1> without hooks</h1>
            <BtnOld/>

            <h1> with <strong>State & Efffect</strong></h1>
            <Btn/>

            <h1> with <strong>Refs</strong></h1>
            <BtnRef/>
        </div>
    
    )
}