import React from 'react';
import MemberList from './member/MemberList';
import ActivityList from './activity/ActivityList';
import { MenuTitleType } from '../../types'

interface IProps {
    title: string
}

function Content(props: IProps) {
    let content = null;

    switch (props.title) {
        case MenuTitleType.MEMBER:
            content = <MemberList />
            break;
        case MenuTitleType.ACTIVETY:
            content = <ActivityList />
            break;
        default:
            content = null
    }

    return (
        <>
            <h2>{props.title}</h2>
            {content}
        </>
    )
}

export default Content