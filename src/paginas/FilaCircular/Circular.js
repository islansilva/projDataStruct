import React from 'react';
import './circular.css';
import Numeros from './Inc&Dec';
import Navbar from '../../components/Navbar/Navbar';

function Circular (){
    return(
        <div class="inicial">
            <div class="container">
                <div>
                    <Numeros/>
                </div>
                <div>
                    <Navbar/>
                </div>
            </div>
        </div> 
    )
}

export default Circular;