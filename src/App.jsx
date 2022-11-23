import './App.css';
import Layout from './Pages/Layout';
import {Route, Router,Routes, useParams} from 'react-router-dom'
import Main from './Components/Main';
import About from './Components/About';
import Home from './Components/Home';
import Pokelist from './Components/Pokelist';
import PokeDetails from './Components/PokeDetails';
import React from 'react';

const Routerwrapper = (props) =>{
  const params = useParams();
  return <PokeDetails params={params} {...props}/>
}

class App extends React.Component {
  render (){

    return (
      <div className="App">
        
       {/* <Layout/> */}
  <Routes>
    <Route path='/' element={<Layout/>} >
     <Route path='/' element={<Home/>} >Home</Route> 
    <Route path='/about' element={<About></About>}> about</Route>
    <Route path='/pokelist' element={<Pokelist/>}>Pokelist</Route>
    <Route path='pokelist/:pokedetails' element={<Routerwrapper/>}> MoreDetail</Route>
    </Route>
    </Routes>
      </div>
    );
  }
}

export default App;
