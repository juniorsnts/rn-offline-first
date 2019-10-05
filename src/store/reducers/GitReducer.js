import { GITREPOSITORY_RESPONSE } from '../actions/ActionTypes';

const initialState = {
    Repository: [],
    Repository_all: []
}

function gitReducer(state = initialState, action) {
    switch (action.type) {
        case GITREPOSITORY_RESPONSE:
            return { ...state, Repository_all: action.repository_all }

        default:
            return state
    }
}

export default gitReducer;