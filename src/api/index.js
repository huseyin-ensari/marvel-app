import md5 from "js-md5";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

export const fetchHeros = async (limit, offset) => {
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);

    const { data } = await axios.get(
        `${BASE_URL}/v1/public/characters?ts=${ts}&limit=${limit}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}&offset=${offset}`
    );
    return data;
};