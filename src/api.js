import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 5ZxvskOnSJUybhrRZjmcXk_8Yf9sriGGkLISHVbGfq4',
        },
        params: {
            query: 'term',
        },
    });

    console.log(response);
    return response;
};

export default searchImages;