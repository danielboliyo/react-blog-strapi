import React from 'react';
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
import { NavLink } from 'react-router-dom';

const BlogCard = ({ attributes, id }) => {
    if (attributes === undefined) return (<div></div>);
    return (
        <Card sx={{ maxWidth: 345, minHeight: 345 }}>
            <CardHeader
                sx={{ display: 'none' }}
                avatar={
                    <Avatar alt="Remy Sharp" src="" />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={attributes.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={attributes.miniature.data.attributes.formats.small.url}
                alt={attributes.miniature.data.attributes.name}
            />
            <CardContent sx={{ minHeight: 100 }}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {attributes.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {attributes.text_content && attributes.text_content.length > 70
                        ? attributes.text_content.slice(0, 70) + '...'
                        : attributes.text_content}
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
                        LinkComponent={NavLink}
                        endIcon={<ArrowForwardIcon />}
                        to={`/blog?id=${id}`}
                    >
                        Ver más
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};

export default BlogCard;
