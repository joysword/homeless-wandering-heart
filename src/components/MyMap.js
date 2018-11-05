import React, { Component } from "react";
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import ControlPanel from './ControlPanel';
import 'mapbox-gl/dist/mapbox-gl.css';

const navControlStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '10px'
};

const controlPanelStyle = {
    position: 'absolut',
    top: 0,
    right: 0,
    padding: '10px'
};

export default class MyMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 37.785164,
                longitude: -100,
                zoom: 3.5,
                width: window.innerWidth - 20,
                height: window.innerHeight - 20,
            }
        };
    }

    _updateViewport = (viewport) => this.setState({viewport});

    render() {

        return (
            <ReactMapGL
                mapboxApiAccessToken="pk.eyJ1Ijoiam95c3dvcmQiLCJhIjoiSmJYSVNnUSJ9.is_i8oSQtofgH31ZkIMBgA"
                mapStyle="mapbox://styles/mapbox/basic-v9"
                {...this.state.viewport}
                onViewportChange={this._updateViewport} >

                <div className="nav" style={navControlStyle}>
                    <NavigationControl onViewportChange={this._updateViewport} />
                </div>

                <div className="control" style={controlPanelStyle}>
                    <ControlPanel />
                </div>

            </ReactMapGL>
        );
    }
}