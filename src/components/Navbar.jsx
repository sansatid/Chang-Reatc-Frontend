import React, { useState } from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import LoginDialog from './LoginDialog';
import axios from 'axios';

export default function Navbar() {
    const [loginData, setloginData] = useState({})
    const [open, setopen] = useState(false)
    const navigation = useNavigate()

    const handleLink = (path) => {
        navigation(path)
    }

    const handleOpenDialog = () => {
        setopen(true)
    }

    const handleCloseDialog = () => {
        setopen(false)
    }

    const handleChangeUsername = (e) => {
        setloginData({
            ...loginData,
            username: e.target.value
        })
    }

    const handleChangePassword = (e) => {
        setloginData({
            ...loginData,
            password: e.target.value
        })
    }

    const handleLogin = () => {
        axios({
            url: 'http://localhost:3000/login',
            method: 'POST',
            data: loginData
        }).then(res => {
            console.log(res.data)
        })
    }

    return (
        <div className='navbarContainer'>
            <div className='logo'>
                <h1>WISTIA</h1>
            </div>

            <div className='menu'>
                <div className='menuItem'>
                    <p onClick={() => handleLink('/products')}>Product</p>
                </div>

                <div className='menuItem'>
                    <p onClick={() => handleLink('/learning-center')}>Learning center</p>
                </div>

                <div className='menuItem'>
                    <p onClick={() => handleLink('/original-series')}>Original Series</p>
                </div>

                <div className='menuItem'>
                    <p onClick={() => handleLink('/aboutus')}>About</p>
                </div>
            </div>

            <div className='button'>
                <button onClick={handleOpenDialog} className='loginButtonStyle'>Login</button>
                <button className='getStartButtonStyle'>Get started</button>
            </div>

            <div className='navbarIcon'>
                <MenuIcon fontSize='large' />
            </div>

            <LoginDialog
                open={open}
                handleCloseDialog={handleCloseDialog}
                handleChangeUsername={handleChangeUsername}
                handleChangePassword={handleChangePassword}
                handleLogin={handleLogin}
            />
        </div>
    )
}
