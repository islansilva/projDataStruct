import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import './Navbar.css';
import { IconContext } from 'react-icons';
import SideBarData from './SideBarData';


class Navbar extends Component{
    //const classe = props.classe;
    constructor(props){
        
        super(props);
        this.showNavBar = this.showNavBar.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            sidebar:false,
            activeIndex: -1,
            number: undefined
        };
    }
    showNavBar(){
        this.setState({sidebar : !this.state.sidebar})
    }

    handleClick = (index) => {

        if(this.state.activeIndex!==index) {
            this.setState({activeIndex: index})
        } else {
            this.setState({activeIndex: -1})
        }
    }

    handleSubmit = (n) =>{
        this.props.handleSubmit(n);
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
                </IconContext.Provider>
                <nav className={this.state.sidebar ? 'nav-menu active': 'nav-menu'}>
                    
                    <ul className='nav-menu-items' >
                        <IconContext.Provider value={{color:'red'}}>
                            <li className='navbar-toggle' onClick ={(()=>this.showNavBar())}>
                                <Link to="#" className="menu-bars">
                                    <FiIcons.FiChevronLeft/>
                                </Link>
                        
                            </li>     
                        </IconContext.Provider>
                        <IconContext.Provider value={{color:'red'}}>                
                            <li>                        
                                <SideBarData 
                                    name="Create" 
                                    subName="Array : " 
                                    preValue={'0,5,3,20,10'} 
                                    type="text" 
                                    icon={<IoIcons.IoMdCreate/>} 
                                    index={0} 
                                    isActive={this.state.activeIndex===0} 
                                    onClick={this.handleClick}
                                    handleSubmit={this.handleSubmit}
                                    />   
                            </li>
                            <li>                         
                                <SideBarData 
                                    name="Remove" 
                                    subName="V : " 
                                    type="number" 
                                    icon={<IoIcons.IoIosRemoveCircleOutline/>} 
                                    index={1} 
                                    isActive={this.state.activeIndex===1} 
                                    onClick={this.handleClick}
                                    handleSubmit={this.handleSubmit}
                                />
                            </li>
                            <li>   
                                <SideBarData 
                                    name="Insert" 
                                    subName="V : " 
                                    type="number" 
                                    icon={<IoIcons.IoIosAddCircleOutline/>} 
                                    index={2} 
                                    isActive={this.state.activeIndex===2} 
                                    onClick={this.handleClick}
                                    handleSubmit={this.handleSubmit}
                                />
                            </li>
                            <li>  
                                <SideBarData 
                                    name="Search" 
                                    subName="V : " 
                                    type="number" 
                                    icon={<IoIcons.IoIosSearch/>} 
                                    index={3} 
                                    isActive={this.state.activeIndex===3} 
                                    onClick={this.handleClick}
                                    handleSubmit={this.handleSubmit}
                                />
                            </li>
                        </IconContext.Provider>
                        <li>
                            <a 
                            href='https://github.com/islansilva/projDataStruct' 
                            className="linkToGit" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <span><IoIcons.IoLogoGithub/>GitHub</span>
                            </a>
                        </li>
                        
                    </ul>
                    
                </nav>
            
            </>
        )
    }
}

export default Navbar