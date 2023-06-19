import axios from 'axios';

const isOnLine = navigator.onLine;

/* 
Configurar el almacenamiento local: Utiliza una biblioteca como localStorage o 
IndexedDB para almacenar en caché los datos descargados previamente. 
Puedes utilizar un identificador único, como el ID de la entrada, como clave para almacenar y 
recuperar los datos. */
/* useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []); */

const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPPI_CLIENT_ID}`,
    "Content-Type": "application/json"
};

export const createBlog = async (data) => {
    try {
        const obj = {
            data: {
                title: data.title,
                author: data.author,
                release: data.release,
                published: data.published,
                text_content: data.text_content
            }
        }

        // Subir imagen de contenido
        const imageContent = data.image_content;
        const imageContentFormData = new FormData();
        imageContentFormData.append('files', imageContent, imageContent.name);
        const imageContentUrl = import.meta.env.VITE_STRAPPI_URL + '/api/upload/';
        const responseImageContent = await axios.post(imageContentUrl, imageContentFormData, headers);
        const imageContentId = responseImageContent.data[0].id;
        //add to obj.data
        obj.data.image_content = imageContentId;

        // Subir miniatura
        const miniature = data.miniature;
        const miniatureFormData = new FormData();
        miniatureFormData.append('files', miniature, miniature.name);
        const miniatureUrl = import.meta.env.VITE_STRAPPI_URL + '/api/upload/';
        const responseMiniature = await axios.post(miniatureUrl, miniatureFormData, headers);
        const miniatureId = responseMiniature.data[0].id;
        //add to obj.data
        obj.data.miniature = miniatureId;

        const blogsUrl = import.meta.env.VITE_STRAPPI_URL + '/api/travel-blogs';
        const createResponse = await axios.post(blogsUrl, obj, headers);
        const createdBlog = createResponse.data;

        return createdBlog;
    } catch (error) {
        console.error('Error creating blog:', error);
        throw error;
    }
};
  

export const getBlogs = async () => {
    console.log('isOnLine', isOnLine);
    const url = import.meta.env.VITE_STRAPPI_URL + '/api/travel-blogs?populate=*';
    const response = await axios.get(url, headers);
    return response;
};

export const getBlogById = async (id) => {
    const url = import.meta.env.VITE_STRAPPI_URL + '/api/travel-blogs/' + id + '?populate=*';
    const response = await axios.get(url, headers);
    return response;
};
