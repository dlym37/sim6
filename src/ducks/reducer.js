import axios from 'axios';

const initialState = {
    pets: []
    

}

const ADD_PET = 'ADD_PET';
const GET_PET = 'GET_PET';

export function getPet(){
    const data = axios.get('/get/animals').then(response => {//SIM1 44D
        console.log('response', response.data)
        return response.data
    })
    // console.log('data', data)
    return {
        type: GET_PET,
        payload: data
    }
}


export default function reducer(state = initialState, action){
    // console.log(action);
    switch (action.type) {
        case GET_PET + '_FULFILLED':
            return Object.assign({}, state, {pets: action.payload});
       
        default:
            return state;
    }
}