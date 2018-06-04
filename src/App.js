import React, { Component } from "react";

import Logo from "./assets/Logo";
import Pokemon from "./components/Pokemon";
import PokemonDetail from "./components/PokemonDetail";

class App extends Component {
  state = {
    isFetching: false,
    pokemonList: [],
    selectedPokemon: null
  };

  componentDidMount = () => {
    this.fetchPokemons("https://pokeapi.co/api/v2/pokemon/?limit=9")
  }

  fetchPokemons = (url) => {
    this.setState({
      isFetching: true
    });

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { results: pokemonList } = data;

        this.setState({
          isFetching: false,
          pokemonList
        });
      });
  };

  fetchPokemonDetail = url => {
    this.setState({
      isFetching: true
    });

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { base_experience: baseExperience, name, sprites, weight } = data;

        this.setState({
          isFetching: false,
          selectedPokemon: {
            baseExperience,
            images: {
              male: sprites.front_default,
              female: sprites.front_female
            },
            name,
            weight
          }
        });
      });
  };

  showPokemonList = list => {
    return list.map(item => (
      <Pokemon
        key={item.name}
        name={item.name}
        showDetail={this.fetchPokemonDetail}
        url={item.url}
      />
    ));
  };

  render() {
    const { isFetching, pokemonList, selectedPokemon } = this.state;

    return (
      <React.Fragment>
        <header className="app-header">
          <Logo />
          <h1 className="app-title">Pick your pokémon!</h1>
        </header>

        {isFetching && "Fetching data"}

        {pokemonList
          ? this.showPokemonList(pokemonList)
          : null}

        {selectedPokemon ? (
          <PokemonDetail pokemonData={selectedPokemon} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
