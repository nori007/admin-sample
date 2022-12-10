import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import { IMenuItem, MenuTitleType } from '../../types';
import MemberList from '../../components/members/MemberList';
import ActivityList from '../../components/activites/ActivityList';
import Member from '../../components/members/Member';

export const MENU_LIST: Array<IMenuItem> = [
    {
        id: 0,
        title: MenuTitleType.MEMBER,
        path: '/app/members'
    },
    {
        id: 1,
        title: MenuTitleType.ACTIVETY,
        path: '/app/activities'
    }
]

function MainForm() { 

    return (
        <>
            <Header />
            <Nav list={MENU_LIST} />
            <Routes>
                <Route path="members" element={<MemberList />} >
                    <Route path=":id" element={<Member />} />
                </Route>
                <Route path="activities" element={<ActivityList />} />
            </Routes>
        </>
    )
};

export default MainForm;