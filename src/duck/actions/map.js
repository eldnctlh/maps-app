import { getDataFromStorage, setDataToStorage } from "../../services/LocalStorageService";

export const ADD_MARKER = 'ADD_MARKERS';
export const DELETE_MARKER = 'DELETE_MARKER';
export const SHOW_MARKERS = 'SHOW_MARKERS';

export const addMarker = data => {
    return {
        type: ADD_MARKER,
        data
    }
};

export const deleteMarker = data => {
    return {
        type: DELETE_MARKER,
        data
    }
};

export const showMarkers =  () => {
    return async dispatch => {
        const savedMarkers = await getDataFromStorage('markers');
        dispatch({
            type: SHOW_MARKERS,
            data: savedMarkers
        })
    }
};

export const saveMarkers = () => {
    return (dispatch, getState) => {
        setDataToStorage(getState().map.markers.filter(e => !e.currentGeolocation), 'markers');
    }
};