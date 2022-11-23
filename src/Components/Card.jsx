import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
 import poke from './poke.jpeg';

const Card = (props) => {
    return (
        <div className='cardContainer'>
            <div className='imgRegion'>
                <div className='image'>
                <img src={props.pic} alt="imagees" className='imagepoke' />
                </div>
                    <p>{props.name}</p>
            </div>
            <div className='cardDetails'>
               <Link to={`${props.name}`}>..... More Details.....</Link> 
            </div>
            
        </div>
    );
};

export default Card;