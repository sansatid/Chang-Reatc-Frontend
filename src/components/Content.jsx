import React from 'react'
import '../styles/Content.css'
import Img from '../assets/drawing-367946_1920.png'

export default function Content() {
    return (
        <div className='contentContainer'>
            <div className='info'>
                <p className='text1'>The video host with the most</p>
                <p className='text2'>See measurable result from your videos (and podcast too)
                    with our complete hosting platform for our marketers.</p>
                <button className='button1'>Try for free</button>
                <button className='button2'>Explore our plan</button>
            </div>
            <div className='image'>
                <img src={Img} width={'100%'} />
            </div>
        </div>
    )
}
