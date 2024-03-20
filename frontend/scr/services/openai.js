import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/';
const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Ensure you have configured this in your environment

/*Text Generation for Product Descriptions:

Use OpenAI's text generation model to generate product descriptions based on item attributes, features, or user preferences.
When a new item is added to your system, trigger a request to OpenAI's API with relevant item details as input.
Parse the generated text response from OpenAI and incorporate it into your item listings.
 */

/**
 * Function to call OpenAI API for text analysis.
 * @param {string} text - The text to be analyzed.
 * @returns {Promise<string>} The analyzed text.
 * @throws {Error} If an error occurs during the API request.
 *Sentiment Analysis for User Feedback:
 *
 * Utilize OpenAI's sentiment analysis model to analyze user feedback, reviews, or comments related to items.
 * Send user feedback to OpenAI's API for sentiment analysis and use the returned sentiment polarity (positive, negative, or neutral) to assess the overall sentiment towards items.
 */
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
                    'Authorization': `Bearer ${OPENAI_API_KEY}`, // Use OPENAI_API_KEY variable
                },
            }
        );
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error analyzing text:', error);
        throw error;
    }
};

/**
 * Function to call OpenAI API for text augmentation.
 * @param {string} textData - The text data to be augmented.
 * @returns {Promise<string>} The augmented text data.
 * @throws {Error} If an error occurs during the API request.
 * Market Analysis and Insights:
 * 
 * Use OpenAI's text augmentation models to generate additional training data for machine learning models.
 * Augment textual data such as product descriptions, user reviews, or sales reports to improve the performance of predictive analytics models.
 *
 */

export const generateTextAugmentation = async (textData) => {
    try {
        const response = await axios.post(
            `${OPENAI_API_URL}/text-augmentation`, // Replace with actual endpoint provided by OpenAI
            { text: textData }, // Text data to be augmented
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`, // Authorization header with API key
                },
            }
        );
        return response.data.augmentedText;
    } catch (error) {
        console.error('Error generating text augmentation:', error);
        throw error;
    }
};

/**
 * Function to call OpenAI API for competitive analysis.
 * @param {string} competitorData - Data related to competitors for analysis.
 * @returns {Promise<string>} The competitive analysis result.
 * @throws {Error} If an error occurs during the API request.
 * Competitive Analysis and Benchmarking:
 * Implement functionality to compare product attributes, features, or performance metrics with competitors.
 * Use OpenAI's models to generate insights or benchmarks based on textual data such as competitor product descriptions or reviews.
 */
export const generateCompetitiveAnalysis = async (competitorData) => {
    try {
        const response = await axios.post(
            `${OPENAI_API_URL}/competitive-analysis`, // Replace with actual endpoint provided by OpenAI
            { competitorData }, // Data related to competitors for analysis
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`, // Authorization header with API key
                },
            }
        );
        return response.data.analysisResult;
    } catch (error) {
        console.error('Error generating competitive analysis:', error);
        throw error;
    }
};
