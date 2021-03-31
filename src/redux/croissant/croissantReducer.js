import { BUY_CROISSANT } from './croissantTypes'

const initialState = {
    numOfCroissants: 50
}

const croissantReducer = (state = initialState, action) => 
{
    switch(action.type) {
        case BUY_CROISSANT: return {
            ...state,
            numOfCroissants: state.numOfCroissants - 1
        }
        default: return state
    }
}

export default croissantReducer