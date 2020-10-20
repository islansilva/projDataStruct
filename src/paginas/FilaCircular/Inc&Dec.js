import React, {Component} from 'react';

class Numeros extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            valor: 0
      }
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }

    dec(){
        this.setState({
        valor: this.state.valor-1
        })
    }

    inc(){
        this.setState({
        valor: this.state.valor+1
        })
    }
    render(){
        return(
            <div>
                <div>
                    <button onClick={this.inc}>Incrementa</button>
                </div>
                <br/>
                <p>{this.state.valor}</p>
                <br/>
                <div>
                    <button onClick={this.dec}>Decrementa</button>
                </div>
            </div>
        )
    }
}

export default Numeros