import React from 'react';
import * as IoIcons from "react-icons/io";
//import ResolveLDDE from '../../paginas/LDDE/ResolveLDDE'


const SideBarData = [
    {
        title: 'Create',
        path: '/',
        icon: <IoIcons.IoMdCreate/>,
        cName: 'navSubBar-text',
        type: 'text',
        insere: 'Array: ',
        display: 0
    },
    {
        title: 'Remove',
        path: '/',
        icon: <IoIcons.IoIosRemoveCircleOutline/>,
        cName: 'navSubBar-text',
        type: 'number',
        insere: 'V : ',
        display: 0
    },
    {
        title: 'Insert',
        path: '/',
        icon: <IoIcons.IoIosAddCircleOutline/>,
        cName: 'navSubBar-text',
        type: 'number',
        insere: 'V : ',
        display: 0
    },
    {
        title: 'Search',
        path: '/',
        icon: <IoIcons.IoIosSearch/>,
        cName: 'navSubBar-text',
        type: 'number',
        insere: 'V : ',
        display: 0
    }
]

export default SideBarData