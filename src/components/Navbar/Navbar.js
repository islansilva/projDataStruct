import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import SidebarData from './SideBarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarContent,
  } from 'react-pro-sidebar'; 

function Navbar(props){
    //const classe = props.classe;
    const[sidebar, setSidebar] = useState(0),
    showSidebar = ()=> setSidebar(!sidebar)

        return(
            <>
            
            <IconContext.Provider value={{color:'red'}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FiIcons.FiChevronRight onClick ={showSidebar}/>
                    </Link>
                    <Link to="/" className="menu-bars" id="home">
                    <FaIcons.FaHome/>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                    <ul className='nav-menu-items' onClick ={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className="menu-bars">
                                <FiIcons.FiChevronLeft/>
                            </Link>
                        </li>
                        <ProSidebar>
                        <SidebarContent>
                        <Menu>
                        {SidebarData.map((item, index)=>{
                            return(
                                <SubMenu
                                className = "subNavBar"
                                title={<span key={index} className='nav-text'>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </span>}>
                                <MenuItem className="subNavBar-text">
                                    <span>{item.insere}</span>
                                    <input type={item.type} style={{width:80}} />
                                    <input type='button' style={{width:30,backgroundColor:'red'}} value="Go!">
                                    </input>
                                </MenuItem>
                                
                            </SubMenu>
                            )
                        })}
                        </Menu>
                    </SidebarContent>
                    </ProSidebar>
                    </ul>
                
                </nav>
                
                
            </IconContext.Provider>
            
            </>
        )

}

export default Navbar