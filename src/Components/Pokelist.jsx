import React from 'react';
import Card from './Card';
import './Pokelist.css';


class Pokelist extends React.Component {

    state = {
        data: [],
        isLoading: false,

    }

    componentDidMount() {
        this.setState({
            isLoading: true,
        })

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=152&offset=0`)
            .then(res => res.json())
            .then((data) => {

                const fetches = data.results.map((result) => {
                    return fetch(result.url).then((res) => res.json()
                    )
                })
                
                Promise.all(fetches).then((res) =>{
                this.setState({
                    data: res, isLoading: false
                });
                // console.log(res);
            }
                )
            });
    }

    render() {

        return (
            <div className='PokeDisplay'>
                {this.state.isLoading ? <h2>Loading ....</h2> : this.state.data.map((card) => (
                    <Card name={card.name} key={card.name} 
                    pic ={card.sprites.other["official-artwork"].front_default}>
                        
                    </Card>
                ))}
            </div>
        );
    }
}



export default Pokelist;