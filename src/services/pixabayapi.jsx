import axios from 'axios';

const API_KEY = '36956826-672ab3f15608cce646c5c212d';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async ({ query, page }) => {
  const response = await axios.get(
    `${axios.defaults.baseURL}?q=${query}&key=${API_KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
  console.log(response.data);
  return response.data;
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
