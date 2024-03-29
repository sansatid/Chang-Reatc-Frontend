import React from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material'

export default function LoginDialog(props) {
    return (
        <Dialog
            open={props.open}
        >
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    name="username"
                    label='Username'
                    type='text'
                    fullWidth
                    margin='normal'
                    onChange={props.handleChange}
                />
                <TextField
                    autoFocus
                    name="password"
                    label='Password'
                    type='password'
                    fullWidth
                    margin='normal'
                    onChange={props.handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleLogin} variant='contained'>Login</Button>
                <Button onClick={props.handleCloseDialog} variant='contained' color='error'>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}
