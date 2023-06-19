export const SET_DATA_TYPE_LOADING = 'SET_DATA_LOADING';
export const SET_DATA_TYPE = 'SET_DATA_TYPE';
export const SET_DATA_TYPE_FAILURE = 'SET_DATA_TYPE_FAILURE';

export const initialState = {
    data: {
        title: '',
        author: '',
        release: '',
        miniature: '',
        image_content: '',
        text_content: '',
        published: true
    },
    loading: false,
    error: null
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_TYPE_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_DATA_TYPE:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case SET_DATA_TYPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
