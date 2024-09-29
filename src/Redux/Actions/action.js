// src/Redux/Actions/actions.js
import { FETCH_PRODUCTS, FETCH_CATEGORIES, SET_SELECTED_CATEGORY, SET_SEARCH_QUERY } from './actiontype';

export const fetchProducts = (products) => ({
    type: FETCH_PRODUCTS,
    payload: products,
});

export const fetchCategories = (categories) => ({
    type: FETCH_CATEGORIES,
    payload: categories,
});

export const setSelectedCategory = (category) => ({
    type: SET_SELECTED_CATEGORY,
    payload: category,
});

export const setSearchQuery = (query) => ({
    type: SET_SEARCH_QUERY,
    payload: query,
});
