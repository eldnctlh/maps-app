import { ADD_MARKER, DELETE_MARKER, SHOW_MARKERS } from '../actions/map';
import { removeDuplicates } from "../../helpers/utils";

const initialState = {
    markers: []
};

const map = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MARKER:
            return {
                ...state,
                markers: [...state.markers, action.data]
            };
        case DELETE_MARKER:
            return {
                ...state,
                markers: state.markers.filter(e => e.lat !== action.data.lat && e.lng !== action.data.lng)
            };
        case SHOW_MARKERS:
            const newMarkers = removeDuplicates([...state.markers, ...action.data], 'lat')
            return {
                ...state,
                markers: newMarkers,
            };
        default:
            return state;
    }
}

export default map;