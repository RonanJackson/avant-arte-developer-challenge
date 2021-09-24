import { useQuery } from 'react-query';
import axios from 'axios';

const getWorks = async () => {
  const res = await axios.get('works.json');
  return res.data;
};

export const useGetWorks = () => {
  return useQuery('worksData', getWorks);
};
