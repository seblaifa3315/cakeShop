import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes';



//those actionCreators return an actio (an object)
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        error: error
    
    }
}

//This one return a function instead of returning an action(object)
//doesn't have to be pure
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errMsg = error.message
                dispatch(fetchUsersFailure(errMsg))
            })
    }
}