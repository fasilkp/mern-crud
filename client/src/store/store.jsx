import { createStore } from 'redux'

const initialState={
    user:{login:false}
}

function reducer(state=initialState, action){
    switch(action.type){
        case 'user': return {...state, user:action.payload};
        default: return state;
    }

}

export default createStore(reducer)