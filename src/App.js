import React, { Component } from "react";

import "./App.css";

import Logo from "./assets/Logo";
import Pokemon from "./components/Pokemon";

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
        const { base_experience: baseExperience, name, sprites } = data;

        this.setState({
          isFetching: false,
          selectedPokemon: {
            baseExperience,
            images: {
              male: sprites.front_default,
              female: sprites.front_female
            },
            name
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
    return (
      <div className="app">
        <header className="app-header">
          <Logo />
          <h1 className="app-title">Pick your pokémon!</h1>
        </header>

        {this.state.isFetching && "Fetching data"}

        {this.state.pokemonList
          ? this.showPokemonList(this.state.pokemonList)
          : null}

        {this.state.selectedPokemon ? (
          <div>{this.state.selectedPokemon.name}</div>
        ) : null}
      </div>
    );
  }
}

export default App;
