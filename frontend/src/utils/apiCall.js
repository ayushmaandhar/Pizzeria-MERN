import axios from 'axios';

const APICall = async (requestType, route, sendData) => {
    const serverURI = "http://localhost:4000/api/v1";

    if (requestType === 'get') {
        try {
            const response = await axios.get(`${serverURI}/${route}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Propagate the error
        }
    } else if (requestType === 'post') {
        try {
            await axios.post(`${serverURI}/${route}`, sendData);
        } catch (error) {
            console.error('Error posting data:', error);
            throw error; // Propagate the error
        }
    } else if (requestType === 'delete') {
        try {
            await axios.delete(`${serverURI}/${route}`);
        } catch (error) {
            console.error('Error deleting data:', error);
            throw error; // Propagate the error
        }
    }
};

export default APICall;
