import React from 'react';
import axios from 'axios';

const MyBlogs = () => {
    const handleClickSendData = async () => {
        try {
            let token = '038e4efccf408062f9df777dbac3a941233f22f0aa95276f0654a7e2e338514c531e63eda16c5f4da22fead68835c7aede47201dec057d3615c001e568b8cc384d8aca0f765213681186cce204f262c3920fa38d4bda6a6939140f231506b69c4d93ea2848a1dd2576b58bb36a5a7b64aad3a5582ecd6382a9981670c420ef91';
            const title = 'title';
            const data = {
                data: {
                    blog: title
                }
              };
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            };
            const blogsUrl = import.meta.env.VITE_STRAPPI_URL + '/api/tests';
            const response = await axios.post(blogsUrl, data, { headers });
            /* const response = await axios({
                method: "post",
                url: blogsUrl,
                data: data,
                headers
                })
            .then(({ data }) => {
                console.log('data', data);
            }) */
            console.log('createdBlog', response);
        } catch (e) {
            console.error('error', e);
        }
    };
    return (
        <>
            <button type="button" onClick={handleClickSendData}>
                submit
            </button>
        </>
    );
};

export default MyBlogs;
