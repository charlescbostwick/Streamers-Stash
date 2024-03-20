import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/';

// Function to call OpenAI API for ML analysis
export const analyzeText = async (text) => {
    try {
        const response = await axios.post(
            `${OPENAI_API_URL}/engines/davinci/completions`,
            {
                prompt: text,
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY(change late)}`,
                },
            }
        );
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error analyzing text:', error);
        throw error;
    }
};
