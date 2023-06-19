import React, { createContext, useEffect, useMemo, useReducer } from 'react';
import { getBlogs } from '../strapi';
import {
    fetchReducer,
    initialState,
    GET_DATA_TYPE_LOADING,
    GET_DATA_TYPE_SUCCESS,
    GET_DATA_TYPE_FAILURE
} from '../reducers/fetchReducer';

export const BlogsContext = createContext();

const BlogsProvider = ({ children }) => {
    const [blogs, blogsDispatch] = useReducer(fetchReducer, initialState);
    useEffect(() => {
        blogsDispatch({ type: GET_DATA_TYPE_LOADING, payload: true });
        const getAllBlogs = async () => {
            try {
                const blogs = await getBlogs();
                console.log(blogs.data?.data);
                blogsDispatch({ type: GET_DATA_TYPE_SUCCESS, payload: blogs.data?.data });
            } catch (error) {
                blogsDispatch({ type: GET_DATA_TYPE_LOADING, payload: false });
                blogsDispatch({ type: GET_DATA_TYPE_FAILURE, payload: 'Error' });
                console.error(error);
            }
        };
        getAllBlogs();
    }, []);
    const memoizedValue = useMemo(() => ({ blogs, blogsDispatch }), [blogs, blogsDispatch]);
    return (
        <BlogsContext.Provider value={memoizedValue}>
            {children}
        </BlogsContext.Provider>
    );
};

export default BlogsProvider;
