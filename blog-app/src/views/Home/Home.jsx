import React, { useEffect, useReducer, useState } from 'react';
import BlogSearch from '../../components/BlogSearch/BlogSearch';
import { Box, Container, Grid, Typography } from '@mui/material';
import BlogCard from '../../components/BlogCard/BlogCard';
import Loader from '../../components/Loader/Loader';
import { getBlogs } from '../../strapi';
import {
    fetchReducer,
    initialState,
    GET_DATA_TYPE_LOADING,
    GET_DATA_TYPE_SUCCESS,
    GET_DATA_TYPE_FAILURE
} from '../../reducers/fetchReducer';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [originalBlogs, setOriginalBlogs] = useState([]);
    const [blogs, blogsDispatch] = useReducer(fetchReducer, initialState);
    useEffect(() => {
        blogsDispatch({ type: GET_DATA_TYPE_LOADING, payload: true });
        const getAllBlogs = async () => {
            try {
                const blogs = await getBlogs();
                console.log(blogs.data?.data);
                blogsDispatch({ type: GET_DATA_TYPE_SUCCESS, payload: blogs.data?.data });
                setOriginalBlogs(blogs.data?.data);
            } catch (error) {
                blogsDispatch({ type: GET_DATA_TYPE_LOADING, payload: false });
                blogsDispatch({ type: GET_DATA_TYPE_FAILURE, payload: 'Algo salio mal' });
                console.error(error);
            }
        };
        getAllBlogs();
    }, []);
    const handleSearch = () => {
        //if (searchText == '') return;
        if (searchText == '') {
            alert('Ingrese un texto para buscar');
            return;
        }
        const filteredBlogs = blogs.data.filter((blog) => {
            const { attributes } = blog || {};
            const searchLower = searchText.toLowerCase();
            
            return (
                (attributes.author && attributes.author.toLowerCase().includes(searchLower)) ||
                (attributes.title && attributes.title.toLowerCase().includes(searchLower)) ||
                (attributes.text_content && attributes.text_content.toLowerCase().includes(searchLower))
            );
        });
        console.log('filteredBlogs', filteredBlogs);
        //search({ type: GET_DATA_TYPE_SUCCESS, payload: filteredBlogs });
        setOriginalBlogs(filteredBlogs);
        
    };
    const handleReset = () => {
        setSearchText(''); // Reiniciar el campo de búsqueda
        setOriginalBlogs(blogs.data); // Restaurar los blogs originales
    };
    return (
        <div>
            <Loader open={blogs.loading} onClose={() => {}} />
            <Box component="h1" sx={{ textAlign: 'center' }}>Explore</Box>
            <BlogSearch
                setSearchText={setSearchText}
                handleSearch={handleSearch}
                searchText={searchText}
                handleReset={handleReset}
            />
            {blogs.error && <Typography variant="h4" sx={{ textAlign: 'center' }}>{blogs.error}</Typography>}
            <Container sx={{ mt: 2 }}>
                {originalBlogs.length === 0 && blogs.data?.length > 0 && (
                    <Box component="h1" sx={{ textAlign: 'center' }}>No se encontraron blogs</Box>
                )}
                {originalBlogs.length === 0 && blogs.data?.length === 0 && (
                    <Box component="h1" sx={{ textAlign: 'center' }}>
                        Aun no has creado blogs, crea uno para que aparezca aquí
                    </Box>
                )}
                <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    {originalBlogs?.map((item) => (
                        <Grid key={item.id} item xs={12} sm={4} md={4} lg={3} xl={3}>
                            <BlogCard id={item.id} attributes={item?.attributes ? item?.attributes : {}} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
