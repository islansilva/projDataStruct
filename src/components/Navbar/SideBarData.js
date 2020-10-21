import React from 'react';
import * as IoIcons from "react-icons/io";
//import ResolveLDDE from '../../paginas/LDDE/ResolveLDDE'


const SideBarData = [
    {
        title: 'Create',
        path: '/',
        icon: <IoIcons.IoMdCreate/>,
        cName: 'create',
        type: 'text',
        insere: 'Array:'
    },
    {
        title: 'Remove',
        path: '/',
        icon: <IoIcons.IoIosRemoveCircleOutline/>,
        cName: 'remove',
        type: 'number',
        insere: 'V :'
    },
    {
        title: 'Insert',
        path: '/',
        icon: <IoIcons.IoIosAddCircleOutline/>,
        cName: 'insert',
        type: 'number',
        insere: 'V :'
    },
    {
        title: 'Search',
        path: '/',
        icon: <IoIcons.IoIosSearch/>,
        cName: 'search',
        type: 'number',
        insere: 'V :'
    }
]

export default SideBarData