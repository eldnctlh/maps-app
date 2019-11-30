import React from 'react';

export const MapFilters = props => (
    <div>
        <button
            onClick={props.saveMarkers}
        >
            Pharmacies
        </button>
        <button
            onClick={props.showMarkers}
        >
            Gas Stations
        </button>
        <button
            onClick={props.showMarkers}
        >
            Schools
        </button>
        <button
            onClick={props.showMarkers}
        >
            Restaurants
        </button>
    </div>
)


