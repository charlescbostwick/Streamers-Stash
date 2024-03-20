import axios from 'axios';

const AMAZON_API_URL = 'https://api.amazon.com/';

// Function to search for items on Amazon
export const searchItems = async (query) => {
    try {
        const response = await axios.get(
            `${AMAZON_API_URL}/search?q=${encodeURIComponent(query)}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.AMAZON_API_KEY(update later)}`,
                },
            }
        );
        return response.data.results;
    } catch (error) {
        console.error('Error searching items on Amazon:', error);
        throw error;
    }
};
