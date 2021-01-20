import React from 'react';
import './Posts.css';
import InputOption from '../InputOption/InputOption';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';

function Posts({ name, description, message, photoUrl }) {
    return (
        <div className='posts'>

            <div className='posts__header'>
                <Avatar />
                
                <div className='posts__info'>
                    <h2> {name} </h2>
                    <p> {description} </p>  
                </div>
            </div>

            <div className='posts__body'>
                <p> {message} </p>
            </div> 

            <div className='posts__buttons'>
                <InputOption 
                    Icon={ThumbUpAltOutlinedIcon}
                    title='Like'
                    color='gray'
                />

                <InputOption 
                    Icon={ChatOutlinedIcon}
                    title='Comment'
                    color='gray'
                />

                <InputOption 
                    Icon={ShareOutlinedIcon}
                    title='Share'
                    color='gray'
                />

                <InputOption 
                    Icon={SendOutlinedIcon}
                    title='Send'
                    color='gray'
                />
                
            </div> 
        </div>
    );
}

export default Posts;
