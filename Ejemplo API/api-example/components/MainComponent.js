import React from "react";

class MainComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            listaDePalabras: props.listaDePalabras,
            currentWord: "",
            
            
        }
            
    }

    
    
    

    
    handleSubmit = async  e =>{
        e.preventDefault();
        let peticion = await fetch("http://localhost:3000/api/"+this.state.currentWord)
        let response = await peticion.json()

        this.setState({
            listaDePalabras: response
        })
        
    }

    timer = setInterval(async ()=>{
        let res = await fetch("http://localhost:3000/api/palabras")
        let response = await res.json()
        this.setState({
            listaDePalabras: response
        })
    },3000)

    

    handleChange = e =>{
        let data = e.target.value

        this.setState({
            currentWord: data
        })
    }

    render() {

       

        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                <input type="text" placeholder = "Pon tu palabra aquí" onChange={this.handleChange}></input>
                </form>

                <ul>
                {this.state.listaDePalabras.map(el =>
                    <li>
                        <b>{el.a}</b> {el.b}

                    
                    </li>
                )}
                </ul>
            </div>)
    }
}


export default MainComponent