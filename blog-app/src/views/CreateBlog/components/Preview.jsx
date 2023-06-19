import React, { useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Preview = ({ data }) => {
    const [previewImage, setPreviewImage] = useState('');
    useEffect(() => {
        if (data.miniature) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(data.miniature);
        } else {
            setPreviewImage('/upload.jpg');
        }
    }, [data.miniature]);
    return (
        <Card sx={{ width: 345, height: 345 }}>
            <CardHeader
                sx={{ display: 'none' }}
                avatar={
                    <Avatar alt="Remy Sharp" src='/upload.jpg' />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={data.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={previewImage}
                alt="miniature"
            />
            <CardContent sx={{ minHeight: 100 }}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.text_content && data.text_content.length > 70
                        ? data.text_content.slice(0, 70) + '...'
                        : data.text_content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Box width="100%" display="flex" justifyContent="flex-end" alignItems="center">
                    <Button
                        type="button"
                        disabled
                        endIcon={<ArrowForwardIcon />}
                    >
                        Ver más
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};

export default Preview;
