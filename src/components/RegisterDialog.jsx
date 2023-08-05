import React from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

export default function LoginDialog(props) {
    return (
        <Dialog
        open={props.open}
        >
            <DialogTitle>Register</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                label='Username'
                name="username"
                type='text'
                fullWidth
                margin='dense'
                onChange={props.handleChange}
                />
                <TextField
                autoFocus
                label='Password'
                name="password"
                type='password'
                fullWidth
                margin='dense'
                onChange={props.handleChange}
                />
                <TextField
                autoFocus
                label='Age'
                name="Age"
                type='number'
                fullWidth
                margin='dense'
                onChange={props.handleChange}
                />
            </DialogContent>
            
            <DialogActions>
                <Button variant='contained' onClick={props.handleRegister}>Register</Button>
                <Button onClick={(props.handleCloseRegisterDialog)} variant='contained' color="error">cancel</Button>
            </DialogActions>
        </Dialog>
    )
}