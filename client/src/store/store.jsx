import { createStore } from 'redux'

const initialState={
    user:{login:null},
    admin:{login:null}
}

function reducer(state=initialState, action){
    switch(action.type){
        case 'user': return {...state, user:action.payload};
        case 'admin': return {...state, admin:action.payload};
        default: return state;
    }

}

export default createStore(reducer)