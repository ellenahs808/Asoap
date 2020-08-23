import { IS_OPEN, IS_CLOSED } from '../actions/navbar_actions';

const navbarReducer = (oldState = {isOpen: false}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case IS_OPEN:
            return { isOpen: action.isOpen }
        case IS_CLOSED:
            return { isClosed: action.isClosed }
        default:
            return oldState;
    }
};



export default navbarReducer;

