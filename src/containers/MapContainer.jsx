import React, { Component, Fragment } from "react";
import MapWrapper from '../components/Map';
import { MapTools } from '../components/MapTools';
import { connect } from 'react-redux'
import {
    addMarker,
    showMarkers,
    saveMarkers,
    deleteMarker,
    updateMarkers,
} from '../duck/actions/map'

class MapContainer extends Component {
    componentDidMount() {
        const { addMarker } = this.props;
        navigator.geolocation.getCurrentPosition( (pos) => addMarker({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            currentGeolocation: true,
        }));
    }

    onMapClick = e => this.props.addMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
    })


    deleteMarker = e => this.props.deleteMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
    })

    render() {
        const { markers, saveMarkers, showMarkers, updateMarkers } = this.props;
        return (
            <Fragment>
                <MapTools
                    saveMarkers={saveMarkers}
                    showMarkers={showMarkers}
                />
                <MapWrapper
                    markers={markers}
                    updateMarkers={updateMarkers}
                    onMapClick={this.onMapClick}
                    deleteMarker={this.deleteMarker}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        markers: state.map.markers
    }
}

const mapDispatchToProps = dispatch => ({
    addMarker: data => dispatch(addMarker(data)),
    deleteMarker: data => dispatch(deleteMarker(data)),
    showMarkers: () => dispatch(showMarkers()),
    saveMarkers: () => dispatch(saveMarkers()),
    updateMarkers: (markers) => dispatch(updateMarkers(markers)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContainer)