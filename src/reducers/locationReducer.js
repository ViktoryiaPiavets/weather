import { CoordsChanged } from './../actions';

const initialState = {    
    latitude: null,
    longitude: null
}


export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CoordsChanged:
            return {
                ...state,            
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude
                }            
        default:          
          return state
      }
}