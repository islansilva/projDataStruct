import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import './Navbar.css';
import { IconContext } from 'react-icons';


class Navbar extends Component{
    //const classe = props.classe;
    constructor(props){
        
        super(props);
        this.aberto = this.showNavBar.bind(this);
        this.state = {
            sidebar:false
        };
    }
    showNavBar(){
        this.setState({sidebar : !this.state.sidebar})
    }

        render(){
        
        return(
            <>
            
            <IconContext.Provider value={{color:'red'}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FiIcons.FiChevronRight onClick ={()=>this.showNavBar()}/>
                    </Link>
                    <Link to="/" className="menu-bars" id="home">
                    <FaIcons.FaHome/>
                    </Link>
                </div>
                <nav className={this.state.sidebar ? 'nav-menu active': 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className='navbar-toggle' onClick ={(()=>this.showNavBar())}>
                            <Link to="#" className="menu-bars">
                                <FiIcons.FiChevronLeft/>
                            </Link>
                        </li>                     
                                <li                         
                                style={{outline:0}}
                                className = {'subNavBar'}
                                >
                                
                                <div className='nav-text' >
                                        <Link to="#" >
                                            <IoIcons.IoMdCreate/>
                                            <span>Create</span>
                                            <span className='chevronSub'>
                                                <FiIcons.FiChevronRight/>
                                            </span>
                                        </Link>
                                </div>
                                <ul className='subNavBar-text'style={{position:'relative',textAlign:'left',color:'red'}} >
                                    <li>
                                        alooo    
                                    </li>
                                </ul>    
                            </li>
                                <li                         
                                style={{outline:0}}
                                className = {'subNavBar'}
                                >
                                
                                <div className='nav-text' >
                                        <Link to="#" >
                                            <IoIcons.IoIosRemoveCircleOutline/>
                                            <span>Remove</span>
                                            <span className='chevronSub'>
                                                <FiIcons.FiChevronRight/>
                                            </span>
                                        </Link>
                                </div>
                                <ul className='subNavBar-text'style={{position:'relative',textAlign:'left',color:'red'}} >
                                    <li>
                                        alooo    
                                    </li>
                                </ul>    
                            </li>
                                <li                         
                                style={{outline:0}}
                                className = {'subNavBar'}
                                >
                                
                                <div className='nav-text' >
                                        <Link to="#" >
                                            <IoIcons.IoIosAddCircleOutline/>
                                            <span>Insert</span>
                                            <span className='chevronSub'>
                                                <FiIcons.FiChevronRight/>
                                            </span>
                                        </Link>
                                </div>
                                <ul className='subNavBar-text'style={{position:'relative',textAlign:'left',color:'red'}} >
                                    <li>
                                        alooo    
                                    </li>
                                </ul>    
                            </li>
                                <li                         
                                style={{outline:0}}
                                className = {'subNavBar'}
                                >
                                
                                <div className='nav-text' >
                                        <Link to="#" >
                                            <IoIcons.IoIosSearch/>
                                            <span>Search</span>
                                            <span className='chevronSub'>
                                                <FiIcons.FiChevronRight/>
                                            </span>
                                        </Link>
                                </div>
                                <ul className='subNavBar-text'style={{position:'relative',textAlign:'left',color:'red'}} >
                                    <li>
                                        alooo    
                                    </li>
                                </ul>    
                            </li>
                            
                        
                    </ul>
                
                </nav>
                
                
            </IconContext.Provider>
            
            </>
        )
            
    }

}

export default Navbar