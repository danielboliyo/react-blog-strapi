import React, { useEffect, useReducer } from 'react';
import { Box, Button, Checkbox } from '@mui/material';
import {
    initialState,
    postReducer,
    SET_DATA_TYPE,
    SET_DATA_TYPE_LOADING,
    SET_DATA_TYPE_FAILURE
} from '../../reducers/postReducer';
import { createBlog } from '../../strapi';
import { useNavigate } from 'react-router-dom';
import { ContainerStyled, Formstyled, InputBaseStyled } from './styled';
import Preview from './components/Preview';
import PreviewPage from './components/PreviewPage';
import Loader from '../../components/Loader/Loader';

const CreateBlog = () => {
    const [createNewBlog, dispatchCreateBlog] = useReducer(postReducer, initialState);
    const navigate = useNavigate();
    useEffect(() => {
        const currentDate = new Date();
        dispatchCreateBlog({ type: SET_DATA_TYPE, payload: {
            ...createNewBlog.release,
            release: currentDate.toISOString()
        }});
    }, []);
    const handleCreateBlog = async (e) => {
        e.preventDefault();
        dispatchCreateBlog({ type: SET_DATA_TYPE_LOADING, payload: true });
        try {
            const createNewBlogResponse = await createBlog(createNewBlog.data);
            dispatchCreateBlog({ type: SET_DATA_TYPE_LOADING, payload: false });
            console.log('createNewBlogResponse', createNewBlogResponse);
            navigate('/explore');
        } catch (e) {
            dispatchCreateBlog({ type: SET_DATA_TYPE_LOADING, payload: false });
            dispatchCreateBlog({ type: SET_DATA_TYPE_FAILURE, payload: 'Error' });
            console.error('error', e);
        }
    };
    return (
        <>
            <Loader open={createNewBlog.loading} onClose={() => {}} />
            <Box component="h1" sx={{ textAlign: 'center' }}>Crear entrada</Box>
            <ContainerStyled maxWidth="md">
                <Formstyled onSubmit={handleCreateBlog}>
                    <Box width="100%">
                        <label htmlFor="title">Titulo</label>
                        <br />
                        <InputBaseStyled
                            required
                            type="text"
                            id="title"
                            name="title"
                            value={createNewBlog.data.title}
                            onChange={(e) => dispatchCreateBlog({ type: SET_DATA_TYPE, payload: {
                                ...createNewBlog.data,
                                title: e.target.value
                            }})}
                        />
                    </Box>
                    <Box width="100%">
                        <label htmlFor="author">Author</label>
                        <br />
                        <InputBaseStyled
                            required
                            type="text"
                            id="author"
                            name="author"
                            value={createNewBlog.data.author}
                            onChange={(e) => dispatchCreateBlog({ type: SET_DATA_TYPE, payload: {
                                ...createNewBlog.data,
                                author: e.target.value
                            }})}
                        />
                    </Box>
                    <Box width="100%">
                        <label htmlFor="content">Contenido</label>
                        <br />
                        <textarea
                            required
                            id="content"
                            name="content"
                            value={createNewBlog.data.text_content}
                            onChange={(e) => dispatchCreateBlog({ type: SET_DATA_TYPE, payload: {
                                ...createNewBlog.data,
                                text_content: e.target.value
                            }})}
                            style={{
                                border: '1px solid #f3f3f3',
                                borderRadius: '10px',
                                resize: 'vertical',
                                height: '200px',
                                width: '100%', // Ajusta el ancho según tus necesidades
                            }}
                        />
                    </Box>
                    <Box width="100%">
                        <label htmlFor="miniature">Miniatura</label>
                        <br />
                        <InputBaseStyled
                            required
                            type="file"
                            id="miniature"
                            name="miniature"
                            accept="image/*"
                            //value={createNewBlog.data.miniature}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                dispatchCreateBlog({
                                    type: SET_DATA_TYPE,
                                    payload: {
                                        ...createNewBlog.data,
                                        miniature: file
                                    }
                                });
                            }}
                        />
                    </Box>
                    <Box width="100%">
                        <label htmlFor="image">Image de blog</label>
                        <br />
                        <InputBaseStyled
                            required
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            //value={createNewBlog.data.image_content}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                dispatchCreateBlog({
                                    type: SET_DATA_TYPE,
                                    payload: {
                                        ...createNewBlog.data,
                                        image_content: file
                                    }
                                });
                            }}
                        />
                    </Box>
                    <Box width="100%">
                        <label htmlFor="publish">Publicar ahora</label>
                        <Checkbox
                            //required
                            disabled
                            id="publish"
                            name="publish"
                            defaultChecked
                            //defaultChecked={createNewBlog.data.published}
                            value={createNewBlog.data.published}
                            onChange={(e) => dispatchCreateBlog({ type: SET_DATA_TYPE, payload: {
                                ...createNewBlog.data,
                                published: e.target.checked
                            }})}
                        />
                    </Box>
                    {/* <Box width="100%">
                        <label htmlFor="date">Miniature</label>
                        <InputBaseStyled
                            required
                            type="text"
                            id="date"
                            name="date"
                            value={createNewBlog.date}
                            onChange={(e) => dispatchCreateBlog({ type: SET_DATA_TYPE, payload: {
                                ...createNewBlog.data,
                                author: e.target.value
                            }})}
                        />
                    </Box> */}
                    <Box sx={{ display: {xs: 'none', sm: 'none', md: 'block' } }}>
                        <Button type="submit" variant="contained">Create</Button>
                    </Box>
                </Formstyled>
                <Box display="flex" flexDirection="column" gap={2}>
                    <Preview data={createNewBlog.data} />
                    <PreviewPage data={createNewBlog.data} />
                </Box>
                <Box sx={{ display: {xs: 'block', sm: 'none', md: 'none' }, mt: 2 }}>
                    <Button type="submit" variant="contained">Create</Button>
                </Box>
            </ContainerStyled>
        </>
    );
};

export default CreateBlog;
