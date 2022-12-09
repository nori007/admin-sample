import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import NotFound from '../NotFound';
import { MENU_LIST } from '../../constants';
import { IMenuItem } from '../../types';

function MainContent() { 

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Nav list={MENU_LIST} />
                <Routes>
                    {MENU_LIST.map((menu: IMenuItem) => {
                        return (
                            <Route key={menu.id} path={menu.path} element={<Content title={menu.title} />}>
                                <Route path=":id" />
                            </Route>
                        )
                    })}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default MainContent;