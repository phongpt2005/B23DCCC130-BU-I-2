import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from './actions';

const initialState = {
    items: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case EDIT_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, ...action.payload.updatedItem } : item
                ),
            };
        default:
            return state;
    }
};

export default reducer;
