import React from 'react';
import { useNavigate } from "react-router-dom"
import { 
    Container, 
    Box, 
    TextField, 
    Button 
} from '@mui/material';

function CreateForm() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log(`id: ${data.get('id')}, password: ${data.get('password')}`);
        
        setTimeout(() => {
            sessionStorage.setItem("isAuthorized", "true");
            navigate("/app");
        }, 3000);
    }

    const handleCreate = (event: React.MouseEvent<HTMLElement>) => {
        navigate("/create");
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, marginTop: 20 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="id"
                    label="id"
                    name="id"
                    autoComplete="id"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="name"
                    name="name"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="email"
                    name="email"
                />
                 <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >회원가입</Button>
            </Box>
        </Container>
    )
}

export default CreateForm;