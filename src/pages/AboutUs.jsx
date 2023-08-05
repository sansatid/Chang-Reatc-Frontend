import React from 'react'
import '../styles/AboutUs.css'
import Img from '../assets/123.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { responsiveFontSizes } from '@mui/material';



export default function Content() {
    return (
        <div className='container1'>
            <div className='info01'>
                <p className='text01'>ABOUT US</p>
                <p className='text02'>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
                <p className='text03'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum repellat dolorem ullam necessitatibus alias enim impedit, in dolorum obcaecati.</p>
                    <button className='button01'>Read More</button>

                <div className='social'>
                <FacebookOutlinedIcon sx={{ fontSize: 50 }}/>
                <TwitterIcon sx={{ fontSize: 50}}/>
                <InstagramIcon sx={{ fontSize: 50 }}/>
                </div>
                    
            </div>
            <div className='image01'>
                <img src={Img} width={'90%'}/>
            </div>
        </div>
    )
}
