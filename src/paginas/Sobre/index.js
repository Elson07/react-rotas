import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../../App.css";

class Sobre extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Sobre</h1>
            <Link to="/"><button>Pá¡gina Inicial</button></Link>
        </div>
      )
    }
}

export default Sobre;