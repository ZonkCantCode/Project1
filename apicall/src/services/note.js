
import axios from "axios";


const baseUrl = "http://localhost:3001/notes";
const getAll = async() => {
  const response = await axios.get(baseUrl);
    return response.data;


  // return response.data.concat({ id: 1000, content: "this is fake", important: true });
};

const create = async (newObject) => {
    create response = await axios.post(baseUrl, newObject);
    return response.data;
};

export default { getAll};