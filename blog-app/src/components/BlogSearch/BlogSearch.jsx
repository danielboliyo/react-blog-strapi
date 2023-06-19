import React from 'react';
import { Box, Button, Checkbox, Container, InputBase } from '@mui/material';

const BlogSearch = ({ setSearchText, handleSearch, searchText, handleReset }) => {
    return (
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box display="flex" alignItems="center">
                <InputBase
                    required
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Buscar"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    sx={{ border: '1px solid #f3f3f3', borderRadius: '10px', width: '100%', padding: '10px' }}
                />
                <Button type="button" onClick={handleSearch}>Buscar</Button>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
                <Box>
                    <label htmlFor="author">Author</label>
                    <Checkbox
                        disabled
                        id="author"
                        name="author"
                        defaultChecked
                    />
                </Box>
                <Box>
                    <label htmlFor="author">Titulo</label>
                    <Checkbox
                        disabled
                        id="title"
                        name="title"
                        defaultChecked
                    />
                </Box>
                <Box>
                    <Button type="button" onClick={handleReset}>
                        Reset
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default BlogSearch;
