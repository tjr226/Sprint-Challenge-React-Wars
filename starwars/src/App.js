import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      tempVehicleName: "",
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results },
          this.applyVehicleNames
          );

      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getVehicleName = (URL, name) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ tempVehicleName: data.name }
          );
        console.log(name, " drives a ", this.state.tempVehicleName);

      })
      .catch(err => {
        throw new Error(err);
      });
    // return data.name

  };

  applyVehicleNames = () => {
    console.log("apply vehicle names running");
    console.log(this.state);
    this.setState({
      starwarsChars: this.state.starwarsChars.map(char => {
        if (char.vehicles[0]) {
          this.getVehicleName(char.vehicles[0], char.name)
          return char
        } else {
          return char
        }
      })
    })
  };


  render() {
    // console.log(this.state); 
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList
          characterList={this.state.starwarsChars}
          applyVehicleNames={this.applyVehicleNames}
        />
      </div>
    );
  }
}

export default App;
