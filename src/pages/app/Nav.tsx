import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItemButton, ListItemText } from "@mui/material";
import { IMenuItem } from '../../types';

type IProps = {
    readonly list: IMenuItem[]
}

function Nav(props: IProps) {
    // return (
    //     <ul>
    //         {props.list.map((item) => {
    //             return (
    //                 <li key={item.id}>
    //                     <Link to={item.path}>{item.title}</Link>
    //                 </li> 
    //             )
    //         })}
    //     </ul>
    // )

    return (
        <List component="nav">
            {props.list.map(item => {
                return (
                    <Link key={item.id} to={item.path} style={{ textDecoration: 'none' }}>
                        <ListItemButton>
                            <ListItemText primary={item.title} />      
                        </ListItemButton>
                    </Link>
                )
            })}
        </List>
    )
}

export default Nav;