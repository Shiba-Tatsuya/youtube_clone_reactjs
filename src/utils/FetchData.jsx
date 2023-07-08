import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'f6fe764077mshc042df21ebaca79p1a79f0jsn5ea068a739a7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  

  export const FetchData = async (url)=> {
 const {data}= await axios.get(`${BASE_URL}/${url}`,options);
return data;
  }
