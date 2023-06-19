import React, { useEffect, useState } from 'react';
import { Card, CardMedia } from '@mui/material';

const PreviewPage = ({ data }) => {
    const [previewImage, setPreviewImage] = useState('');
    useEffect(() => {
        if (data.image_content) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(data.image_content);
        } else {
            setPreviewImage('/upload.jpg');
        }
    }, [data.image_content]);
    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={previewImage}
                alt="miniature"
            />
        </Card>
    );
};

export default PreviewPage;
