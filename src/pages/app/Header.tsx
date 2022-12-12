import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Typography } from '@mui/material';

function Header() {
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        navigate("/app");
    }

    return (
        <>
            <AppBar position="static">
                <Typography variant="h3" color="inherit" component="div" onClick={handleClick}>
                    헤더! 엔드 홈
                </Typography>
            </AppBar>
        </>
    )
}

export default Header;