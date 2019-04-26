import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    this.applyVehicleNames();
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
        this.setState({ starwarsChars: data.results });

        // console.log(data);
      })
      .catch(err => {
        throw new Error(err);
      });
  };



  // toggleCompleted = id => {
  //   this.setState({
  //     taskList: this.state.taskList.map(task =>
  //       task.id === id ? {...task, completed: !task.completed } : task
  //       )
  //   });
  // };

  getVehicleName = (URL) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // this.setState({ tempVehicleName: data.name });
        return data.name
      
      })
      .catch(err => {
        throw new Error(err);
      });
    // return data.name

  };

  applyVehicleNames = () => {
    this.setState({
      starwarsChars: this.state.starwarsChars.map(char => 
        char.vehicles[0] ? {...char, vehicleName: this.getVehicleName(char.vehicles[0])} : char
      )

  })};


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList
          characterList={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
