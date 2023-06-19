export const GET_DATA_TYPE_LOADING = 'GET_DATA_LOADING';
export const GET_DATA_TYPE_SUCCESS = 'GET_DATA_TYPE_SUCCESS';
export const GET_DATA_TYPE_FAILURE = 'GET_DATA_TYPE_FAILURE';

export const initialState = {
    data: null,
    loading: false,
    error: null
};

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_TYPE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_DATA_TYPE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case GET_DATA_TYPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
