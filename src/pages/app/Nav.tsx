import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuItem } from '../../types';

type IProps = {
    readonly list: IMenuItem[]
}

function Nav(props: IProps) {
    return (
        <ul>
            {props.list.map((item) => {
                return (
                    <li key={item.id}>
                        <Link to={item.path}>{item.title}</Link>
                    </li> 
                )
            })}
        </ul>
    )
}

export default Nav;