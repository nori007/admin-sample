import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from './Header';
import Nav from './Nav';
import { IMenuItem, MenuTitleType } from '../../types';
import Dashboard from '../../components/dashboard/Dashboard';
import MemberList from '../../components/members/MemberList';
import ActivityList from '../../components/activites/ActivityList';
import Member from '../../components/members/Member';
import MemberForm from './MemberForm';

export const MENU_LIST: Array<IMenuItem> = [
    {
        id: 0,
        title: MenuTitleType.HOME,
        path: '/app'
    },
    {
        id: 1,
        title: MenuTitleType.MEMBER,
        path: '/app/members'
    },
    {
        id: 2,
        title: MenuTitleType.ACTIVETY,
        path: '/app/activities'
    }
]

function MainForm() { 
    return (
        <>
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Nav list={MENU_LIST} />
                </Grid>
                <Grid item xs={8}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="members" element={<MemberForm />} >
                            <Route path=":id" element={null}/>
                        </Route>
                        <Route path="activities" element={<ActivityList />} />
                    </Routes>
                </Grid>
            </Grid>
        </>
    )
};

export default MainForm;