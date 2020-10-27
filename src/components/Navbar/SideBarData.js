import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as FiIcons from "react-icons/fi";


export default class SideBarData extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state={
            number : 0
        }
    }
    handleChange = (e)=>{
        this.setState({number : e.target.value});
    }

    handleClick = () => {
        return this.props.onClick(this.props.index)
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state.number);
    }


    render() {
        return (
                <li style={{outline:0}} className = {(this.props.isActive) ? ('subNavBar-active') : ('subNavBar')} >
                    <div className='nav-text' onClick = {this.handleClick}>
                        <Link to="#" >
                            {this.props.icon}
                            <span>{this.props.name}</span>
                            <span className='chevronSub'>
                                <FiIcons.FiChevronRight/>
                            </span>
                        </Link>
                    </div>

                    <ul className='subNavBar-text' >
                        <li style={{fontSize:16}}>
                            {this.props.subName} 
                            <input 
                                autoComplete ="off"
                                id="inputValue"
                                onChange={this.handleChange}
                                className="dados"
                                type={this.props.type}
                                placeholder={this.props.preValue}>
                            </input>
                            <input className="btnGo"type="button" value='Go!' onClick={this.handleSubmit}></input>
                        </li>
                    </ul>    
                </li>
        )
    }
}
