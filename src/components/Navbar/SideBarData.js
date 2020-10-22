import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as FiIcons from "react-icons/fi";


export default class SideBarData extends Component {

    handleClick = () => this.props.onClick(this.props.index)

    render() {
        return (
            <div>
                <li style={{outline:0}} className = {(this.props.isActive) ? ('subNavBar-active') : ('subNavBar')} onClick = {this.handleClick}>
                    <div className='nav-text'>
                        <Link to="#" >
                            {this.props.icon}
                            <span>{this.props.name}</span>
                            <span className='chevronSub'>
                                <FiIcons.FiChevronRight/>
                            </span>
                        </Link>
                    </div>
                    <ul className='subNavBar-text'style={{position:'relative',textAlign:'left'}} >
                        <li style={{fontSize:16}}>
                            {this.props.subName} 
                            <input className="dados"type={this.props.type}></input>
                            <input className="btnGo"type="button" value='Go!'></input>
                        </li>
                    </ul>    
                </li>
            </div>
        )
    }
}
