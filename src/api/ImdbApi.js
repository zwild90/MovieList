import axios from 'axios';
import { headers } from './Headers';

const baseurl = 'https://v2.sg.media-imdb.com';

export const getsuggestions = async (substring) => {
  const firstletter = substring.charAt(0);
  const url = `${baseurl}/suggestion/${firstletter}/${substring}.json`;

  try {
    const result = await axios.get(url, { headers });
    return result;
  } catch (err) {
    console.error(err);
  }
}