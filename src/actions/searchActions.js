import axios from 'axios';
export const saveSearch = searchText => ({ type: "SAVE_SEARCH", search: searchText });
export const removeSearch = searchText => ({ type: "REMOVE_SEARCH", search: searchText });
export const focusSearch = () => ({ type: "FOCUS_SEARCH" });
export const blurSearch = () => ({ type: "BLUR_SEARCH" });
export const changeSearch = searchText => ({ type: "SEARCH_INPUT", search: searchText });
export const inList = focus => ({ type: "IN_LIST", focus});

const loadingAutocompleteList = current => ({ type: "LOADING_LIST", current });
const updateAutocompleteList = list => ({ type: "UPDATE_LIST", list });
const failedAutocompleteList = () => ({ type: "FAILED_LIST" });

export const autoCompleteText = text => {
    return async (dispatch) => {
        dispatch(loadingAutocompleteList(text));
        try {
            const res = await axios.post('/autocomplete', { text });
            dispatch(updateAutocompleteList(res.data));
        } catch(err) {
            dispatch(failedAutocompleteList());
        };
    }
}

const loadingRestaurantsList = () => ({ type: "LOADING_RESTAURANTS" });
const updateRestaurantsList = list => ({ type: "UPDATE_RESTAURANTS", list });
const failedRestaurantsList = () => ({ type: "FAILED_RESTAURANTS" });

export const searchItems = (searchList, searchText) => {
    return async (dispatch) => {
        let searchTextArray = [];
        if (searchText) {
            if (searchText.indexOf(' ') > -1) {
                searchTextArray = searchText.split(' ');
            } else {
                searchTextArray = [searchText];
            }
            dispatch(saveSearch(searchTextArray));
        }
        searchTextArray = searchTextArray.filter(search => searchList.indexOf(search) === -1);
        const newSearchList = [...searchList, ...searchTextArray];
        if (!searchText || newSearchList !== searchList) {
            dispatch(loadingRestaurantsList());
            try {
                const res = await axios.post('/restaurants', { list: newSearchList });
                dispatch(updateRestaurantsList(res.data));
            } catch (err) {
                dispatch(failedRestaurantsList(err.message));
            };
        }
    }
}
