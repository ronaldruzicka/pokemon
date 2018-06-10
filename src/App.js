import React, { Component } from "react";

import Loader from "./components/Loader";
import Logo from "./assets/logo.svg";
import Pokemon from "./components/Pokemon";

class App extends Component {
  state = {
    isFetching: false,
    pokemonList: [],
    selectedPokemon: null,
    pokemonCache: []
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

  fetchPokemonDetail = (name, url) => {
    const { pokemonCache } = this.state;
    const cachedPokemon = pokemonCache.find(item => item.name === name);

    if (cachedPokemon) {
      this.setState({
        isFetching: false,
        selectedPokemon: cachedPokemon
      });

      return;
    }

    this.setState({
      isFetching: true
    });

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { id, height, name, sprites, stats, types, weight } = data;

        const selectedPokemon = {
          height,
          id,
          images: {
            male: sprites.front_default,
            female: sprites.front_female
          },
          name,
          stats: stats.map(item => {
            return {
              value: item.base_stat,
              name: item.stat.name
            };
          }),
          types: types.map(item => item.type.name),
          weight
        };

        this.setState({
          isFetching: false,
          selectedPokemon,
          pokemonCache: this.state.pokemonCache.concat(selectedPokemon)
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
                selectedPokemon={this.state.selectedPokemon}
              />
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  render() {
    const { isFetching, pokemonList } = this.state;

    return (
      <React.Fragment>
        <header className="pokedex-header">
          <Logo />
        </header>

        {isFetching && <Loader />}

        {pokemonList ? this.showPokemonList(pokemonList) : null}
      </React.Fragment>
    );
  }
}

export default App;
