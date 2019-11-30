import React from 'react';

export const MapTools = props => (
    <div>
        <button
            onClick={props.saveMarkers}
        >
            Save Markers
        </button>
        <button
            onClick={props.showMarkers}
        >
            Show Saved Markers
        </button>
    </div>
)


