import React, {Component} from 'react';
import '../paginas.css';
import Navbar from '../../Navbar/Navbar';

class Circular extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number : undefined
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    
    handleSubmit (e) {
        this.setState({number: e});
    }
    
    render(){
        return(
            <div className="inicial">
                <div className="container">
                    <div>
                        <Navbar 
                            handleSubmit={this.handleSubmit}
                        />
                        <p>{this.state.number}</p>
                    </div>
                </div>
            </div> 
        )
    }
    
}

export default Circular;