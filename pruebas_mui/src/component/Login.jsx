import { React } from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'


const handleSubmit = e => {
    e.preventDefault()
}

const Login = () => {
    return (
        <>
            <Box className="contenedor">
                <TextField
                    id=""
                    label="email"
                    type="email"
                    sx={{ mb: 1 }}
                />

                <TextField
                    id=""
                    label="Contraseña"
                    type="password"
                    sx={{mb: 1}}
                />

                <Button variant="contained" href="#contained-buttons" color='primary' sx={{mb: 1}}>
                    uno
                </Button>

                <Button variant="contained" href="#contained-buttons" color='secondary' sx={{mb: 1}}>
                    dos
                </Button>

                <Button variant="contained" href="#contained-buttons" color='error' sx={{mb: 1}}>
                    tres
                </Button>

                <Button variant="contained" href="#contained-buttons" color='warning' sx={{mb: 1}}>
                    cuatro
                </Button>

                <Button variant="contained" href="#contained-buttons" color='success' sx={{mb: 1}}>
                    cinco
                </Button>
            </Box>
        </>
    )
}

export default Login