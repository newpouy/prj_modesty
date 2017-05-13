import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    list: {
        status: 'INIT',
        data: []
    }
};


export default function authentication(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
        case types.FRIEND_LIST :
            return update(state, {
                login: {
                    status: { $set: 'WAITING '}
                }
            });

        case types.FRIEND_LIST_SUCCESS :
            return update(state, {
                list: {
                    status: { $set: 'SUCCESS' },
                    data: { $set: action.data }
                }
            });
        case types.FRIEND_LIST_FAILURE :
            return update(state, {
                login: {
                    status: { $set: 'FAILURE '}
                }
            });
        default:
            return state;
    }
}
