import React, { Component } from "react";

import Loader from "./components/Loader";
import Logo from "./assets/logo.svg";
import Pokemon from "./components/Pokemon";
import PokemonDetail from "./components/PokemonDetail";

class App extends Component {
  state = {
    isFetching: false,
    pokemonList: [],
    selectedPokemon: null
  };

  componentDidMount = () => {
    this.fetchPokemons("https://pokeapi.co/api/v2/pokemon/?limit=9");
  };

  fetchPokemons = url => {
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
    return (
      <nav className="pokedex-nav">
        <ul className="pokedex-navList">
          {list.map(item => (
            <li key={item.name} className="pokedex-navItem">
              <Pokemon
                name={item.name}
                showDetail={this.fetchPokemonDetail}
                url={item.url}
              />
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  render() {
    const { isFetching, pokemonList, selectedPokemon } = this.state;

    return (
      <React.Fragment>
        <header className="pokedex-header">
          <Logo />
        </header>

        {isFetching && <Loader />}

        {pokemonList ? this.showPokemonList(pokemonList) : null}

        {selectedPokemon ? (
          <PokemonDetail pokemonData={selectedPokemon} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
