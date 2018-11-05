import React, { Component } from 'react';
import logo from './logo.svg';
import ReactMapGL from 'react-map-gl';
import MyMap from "./components/MyMap";

class App extends Component {

    render() {
        return (
            <div className="App">
                <MyMap/>
            </div>
    );
  }
}

export default App;
