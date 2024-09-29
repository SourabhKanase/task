// src/Redux/Reducers/reducers.js
import { FETCH_PRODUCTS, FETCH_CATEGORIES, SET_SELECTED_CATEGORY, SET_SEARCH_QUERY } from '../Actions/actiontype';

const initialState = {
    products: [],
    categories: [],
    selectedCategory: '',
    searchQuery: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload,
            };
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
