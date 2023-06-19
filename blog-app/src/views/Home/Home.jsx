import React, { useContext, useState } from 'react';
import BlogSearch from '../../components/BlogSearch/BlogSearch';
import { Box, Container, Grid } from '@mui/material';
import BlogCard from '../../components/BlogCard/BlogCard';
import Loader from '../../components/Loader/Loader';
import { BlogsContext } from '../../context/BlogsContext';

const Home = () => {
    const { blogs } = useContext(BlogsContext);
    const [searchText, setSearchText] = useState('');
    const [originalBlogs, setOriginalBlogs] = useState(blogs.data);
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
    if (!blogs.data) return (<Loader open={blogs.loading} onClose={() => {}} />);
    return (
        <div>
            <Box component="h1" sx={{ textAlign: 'center' }}>Explore</Box>
            <BlogSearch
                setSearchText={setSearchText}
                handleSearch={handleSearch}
                searchText={searchText}
                handleReset={handleReset}
            />
            <Container sx={{ mt: 2 }}>
                <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    {originalBlogs?.map((item) => (
                        <Grid key={item.id} item xs={12} sm={4} md={4} lg={3} xl={3}>
                            <BlogCard id={item.id} attributes={item.attributes} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
