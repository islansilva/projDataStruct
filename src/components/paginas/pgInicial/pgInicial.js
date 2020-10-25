import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../../images/logo_est_dados_2.png';
import LDDE from '../../../images/list.png';
import LDDEgif from '../../../gif/LDDE.gif';
import F_CIRC from '../../../images/filaCircular.jpg';
import f_circ from '../../../gif/fila_circular.gif';
import HEAP from '../../../images/heap (1).png';
import HEAPgif from '../../../gif/heap.gif';
import './pgInicial.css';


function pgInicial() {
    return ( 
        <div className = "inicial" >
            <header className = "inicial-header" >
                <p className = "title" > CC4652 - ESTRUTURA DE DADOS </p> 
                <img src = {logo} className = "inicial-logo" alt = "logo" / >
                <p className = "selOpcao" >
                Selecione a estrutura desejada :</p>
                <div className = "opcoes" >
                    <Link to= "/LDDE">
                        <div className = "menu" >
                            <img class ="static" src = { LDDE } alt = "LDDE" / ><img class ="active" src = { LDDEgif } alt = "LDDE" / >
                            <div class= "nextPage">
                                <p> LDDE </p> 
                            </div>     
                        </div>
                    </Link>
                    <Link to = "/FILA_CIRC" >
                        <div className = "menu" >
                            <img class="static" src = { F_CIRC } alt = "FILA CIRCULAR"/ ><img class="active" src = { f_circ+ "?a="+Math.random()} alt = "FILA CIRCULAR"/ >
                            <div class= "nextPage">
                                <p> FILA CIRCULAR </p> 
                            </div>
                        </div>
                    </Link>
                    <Link to= "/HEAPS" >
                        <div className = "menu" >
                            <img class="static" src = { HEAP }alt = "HEAP" / ><img class="active" src = { HEAPgif }alt = "HEAP" / >
                            <div class= "nextPage">
                                <p> HEAPS </p>
                            </div>                       
                        </div>
                    </Link>
                </div> 
            </header > 
        </div>
    );
}

export default pgInicial;