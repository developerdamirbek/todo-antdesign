import { useQuery } from '@tanstack/react-query';
import {request} from '../../../config/request';

export const useGetusers = () => {
  return useQuery({
    queryKey: ['getusers'],
    queryFn: async (userData) => {
      const response = await request.get('/users', userData);
      return response.data;
    },
  });
};