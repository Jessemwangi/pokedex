import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                
               <Outlet/>
            </div>
        );
    }
}

export default Main;