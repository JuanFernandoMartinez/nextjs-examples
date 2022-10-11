
import styles from '../styles/Profile.module.css'
import React from 'react'


let nombres = [1,2,3,4,5,6,7,8,9,10]

function sayHello(e){
 nombres.push(prompt("¿qué nombre desea agregar?")) 
 console.log(nombres)  
}

/*

*/
function profile(){
    return (
        <div>
            
        <Names/>
    </div>
        
        )
}


class Names extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                names : []
            }
    }
    addName = (e) =>{
        let aux = this.state.names
        for (let i = 0; i < 10; i++){
            aux.push([])
            for (let j = 0; j < 10; j++){
                aux[i].push(j)
            }
        }
        this.setState({ names: aux})
    }
    render(){
        return <di>
            <table border = "2">
                {this.state.names.map(e=><tr>
                    {e.map(i=><td>
                        {i}
                    </td>)}
                </tr>)}
            </table>
            <button onClick={this.addName}> Add Name</button>
        </di>
    }
}

export default profile