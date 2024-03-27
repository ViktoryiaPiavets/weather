import { CityNameAdded, MetricsChanged } from './../actions';

const initialState = {
  name: 'Warsaw',
  metrics: 'C'
}


export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
  case CityNameAdded:
    return {
      ...state,
      name: action.payload
    }
  case MetricsChanged:
    return {
      ...state,
      metrics: action.payload
    }
  default:
    return state
  }
}
