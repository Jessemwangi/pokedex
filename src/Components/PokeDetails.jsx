import React, { Component } from 'react';

class PokeDetails extends Component {
    state = {
        data: [],
        isLoading: false,
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
        });
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokedetails}`)
            .then(res => res.json()
                .then((data) => {
                    this.setState({
                        data: data, isLoading: false,
                    }); console.log(data);
                }
                ))

    }
    render() {
        const types =  this.state.data.types?.map((type) => {
            return <span key={Math.random()} style={{"display":'inline-block',"margin":"1rem" }}>{type.type?.name}</span>
        }
        )
        console.log(this.props.params.pokedetails)
        return (
            <div>
                {this.state.isLoading ? <h1>Loading</h1> :

                    <div key={this.state.data.name}>
                        <h1>{this.state.data.name}</h1>
                        <p>weight : {this.state.data.weight}</p>
                        <img src={this.state.data.sprites?.other["official-artwork"].front_default} alt="" />
                  
<p>{types}
   </p>

 
</div>
                }
            </div>
        );
    }
}

export default PokeDetails;

// sprites.other["official-artwork"].front_default