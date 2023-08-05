import React from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import "../styles/login.css";

export default function LoginDialog(props) {
    return (
        <Dialog
        open={props.open}
        >
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                label='Username'
                name='username'
                type='text'
                fullWidth
                margin='normal'
                onChange={props.handleChange}
                />
                <TextField
                autoFocus
                label='Password'
                name='password'
                type='password'
                fullWidth
                margin='normal'
                onChange={props.handleChange}
                />
            </DialogContent>
            
            <DialogActions>
                <Button variant='contained' onClick={props.handleLogin}>Login</Button>
                <Button onClick={(props.handleCloseDialog)} variant='contained' color="error">cancel</Button>
            </DialogActions>
        </Dialog>
    )
}