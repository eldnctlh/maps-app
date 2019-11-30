import React from 'react';
import styled from 'styled-components';

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Button = styled.button`
    box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
    padding: 10px 20px;
    color: #333;
    margin-left: 20px;
    background: #fefef0;
`;


export const MapTools = props => (
    <Buttons>
        <Button
            onClick={props.saveMarkers}
        >
            Save Markers
        </Button>
        <Button
            onClick={props.showMarkers}
        >
            Show Saved Markers
        </Button>
    </Buttons>
)


